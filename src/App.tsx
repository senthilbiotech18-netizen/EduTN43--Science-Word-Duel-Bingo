import React, { useState, useEffect } from "react";
import {
  GameMode,
  WordEntry,
  BingoTile,
  GameStats,
  ValidateAndRespondResponse,
} from "./types";
import { DEFAULT_BINGO_TILES, PRESET_TOPICS } from "./data/topics";
import { Header } from "./components/Header";
import { TopicSelector } from "./components/TopicSelector";
import { WordBattle } from "./components/WordBattle";
import { BingoCard } from "./components/BingoCard";
import { GameResults } from "./components/GameResults";
import { GlossaryModal } from "./components/GlossaryModal";
import { ApiKeyModal } from "./components/ApiKeyModal";
import { AcademicHonestyModal } from "./components/AcademicHonestyModal";
import { getEtymologyFallback } from "./utils/etymologyHelper";
import {
  validateStudentWordOffline,
  getAiTurnOffline,
  generateBingoTilesOffline,
  getOfflineHint,
} from "./data/scienceDictionary";

export default function App() {
  const [gameStep, setGameStep] = useState<"setup" | "playing" | "results">(
    "setup"
  );
  const [topic, setTopic] = useState<string>("Cell Biology & Organelles");
  const [gameMode, setGameMode] = useState<GameMode>("turn-duel");
  const [maxTurns, setMaxTurns] = useState<number>(10);
  const [currentTurn, setCurrentTurn] = useState<number>(1);
  const [isStudentTurn, setIsStudentTurn] = useState<boolean>(true);

  // Custom API Key, Academic Honesty & Engine Mode state
  const [engineMode, setEngineMode] = useState<"offline" | "gemini">(
    () => (localStorage.getItem("game_engine_mode") as "offline" | "gemini") || "offline"
  );
  const [apiKey, setApiKey] = useState<string>(
    () => localStorage.getItem("custom_gemini_api_key") || ""
  );
  const [academicHonesty, setAcademicHonesty] = useState<boolean>(
    () => localStorage.getItem("academic_honesty_mode") !== "false"
  );
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState<boolean>(false);
  const [isAcademicHonestyModalOpen, setIsAcademicHonestyModalOpen] =
    useState<boolean>(false);

  const handleToggleEngineMode = (mode: "offline" | "gemini") => {
    setEngineMode(mode);
    localStorage.setItem("game_engine_mode", mode);
  };

  // Stats & history
  const [studentScore, setStudentScore] = useState<number>(0);
  const [aiScore, setAiScore] = useState<number>(0);
  const [studentBingos, setStudentBingos] = useState<number>(0);
  const [aiBingos, setAiBingos] = useState<number>(0);
  const [strikes, setStrikes] = useState<number>(0);
  const [wordHistory, setWordHistory] = useState<WordEntry[]>([]);
  const [bingoTiles, setBingoTiles] = useState<BingoTile[]>([]);

  // Turn execution states
  const [isAiThinking, setIsAiThinking] = useState<boolean>(false);
  const [latestAiTurnData, setLatestAiTurnData] = useState<{
    word: string;
    definition: string;
    funFact?: string;
    score: number;
    matchedBingoTileId?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentHint, setCurrentHint] = useState<string | null>(null);

  // Settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);

  // Save API Key helper
  const handleSaveApiKey = (key: string) => {
    const trimmed = key.trim();
    setApiKey(trimmed);
    if (trimmed) {
      localStorage.setItem("custom_gemini_api_key", trimmed);
    } else {
      localStorage.removeItem("custom_gemini_api_key");
    }
  };

  // Save Academic Honesty toggle
  const handleToggleAcademicHonesty = () => {
    setAcademicHonesty((prev) => {
      const next = !prev;
      localStorage.setItem("academic_honesty_mode", String(next));
      return next;
    });
  };

  // TAB SWITCH DETECTION FOR ACADEMIC HONESTY
  useEffect(() => {
    if (gameStep !== "playing" || !academicHonesty) return;

    const triggerAcademicReset = () => {
      setIsAcademicHonestyModalOpen(true);
      // Immediately reset current match to wipe added words
      setWordHistory([]);
      setStudentScore(0);
      setAiScore(0);
      setStrikes(0);
      setCurrentTurn(1);
      setLatestAiTurnData(null);
      setIsStudentTurn(true);
      setGameStep("setup");
    };

    const handleVisibilityChange = () => {
      if (document.hidden || document.visibilityState === "hidden") {
        triggerAcademicReset();
      }
    };

    const handleWindowBlur = () => {
      triggerAcademicReset();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [gameStep, academicHonesty]);

  // Helper to check bingo completion lines (5 in a row/col/diag)
  const calculateBingos = (tiles: BingoTile[], owner: "student" | "ai") => {
    let count = 0;
    const grid = Array(5)
      .fill(null)
      .map((_, r) =>
        Array(5)
          .fill(null)
          .map((_, c) => tiles[r * 5 + c]?.claimedBy === owner)
      );

    // Rows & Columns
    for (let i = 0; i < 5; i++) {
      if (grid[i].every(Boolean)) count++;
      if ([0, 1, 2, 3, 4].every((r) => grid[r][i])) count++;
    }
    // Diagonals
    if ([0, 1, 2, 3, 4].every((i) => grid[i][i])) count++;
    if ([0, 1, 2, 3, 4].every((i) => grid[i][4 - i])) count++;

    return count;
  };

  // Start a new game
  const handleStartGame = async (
    chosenTopic: string,
    mode: GameMode,
    turns: number
  ) => {
    setTopic(chosenTopic);
    setGameMode(mode);
    setMaxTurns(turns);
    setCurrentTurn(1);
    setIsStudentTurn(true);
    setStudentScore(0);
    setAiScore(0);
    setStudentBingos(0);
    setAiBingos(0);
    setStrikes(0);
    setWordHistory([]);
    setLatestAiTurnData(null);
    setErrorMessage(null);
    setCurrentHint(null);

    // Helper for API request headers
    const getHeaders = () => {
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (apiKey.trim()) {
        headers["x-gemini-api-key"] = apiKey.trim();
      }
      return headers;
    };

    // Load initial bingo board
    const preset = PRESET_TOPICS.find((p) => p.name === chosenTopic);
    if (preset && DEFAULT_BINGO_TILES[preset.id]) {
      setBingoTiles(
        DEFAULT_BINGO_TILES[preset.id].map((tile) => ({ ...tile, claimedBy: null }))
      );
    } else if (engineMode === "offline") {
      const offlineTiles = generateBingoTilesOffline(chosenTopic);
      setBingoTiles(
        offlineTiles.map((t, idx) => ({
          id: `tile-${idx}`,
          label: t.label,
          targetTermOrCategory: t.targetTermOrCategory,
          description: t.description,
          claimedBy: null,
        }))
      );
    } else {
      // Fetch dynamic 5x5 board from API
      try {
        const res = await fetch("/api/generate-bingo-board", {
          method: "POST",
          headers: getHeaders(),
          body: JSON.stringify({ topic: chosenTopic, customApiKey: apiKey }),
        });
        const data = await res.json();
        if (data.tiles && Array.isArray(data.tiles)) {
          setBingoTiles(
            data.tiles.map((t: any, idx: number) => ({
              id: `tile-${idx}`,
              label: t.label,
              targetTermOrCategory: t.targetTermOrCategory,
              description: t.description,
              claimedBy: null,
            }))
          );
        } else {
          throw new Error("Invalid response");
        }
      } catch (err) {
        console.warn("Using offline bingo board fallback", err);
        const offlineTiles = generateBingoTilesOffline(chosenTopic);
        setBingoTiles(
          offlineTiles.map((t, idx) => ({
            id: `tile-${idx}`,
            label: t.label,
            targetTermOrCategory: t.targetTermOrCategory,
            description: t.description,
            claimedBy: null,
          }))
        );
      }
    }

    setGameStep("playing");
  };

  // Pass turn / Stuck action (increments strike)
  const handlePassTurn = () => {
    setErrorMessage(null);
    setCurrentHint(null);
    const newStrikes = strikes + 1;
    setStrikes(newStrikes);

    if (newStrikes >= 3) {
      setErrorMessage("❌ Strike 3/3! Match ended after 3 passed attempts.");
      setTimeout(() => setGameStep("results"), 1200);
    } else {
      setErrorMessage(
        `⚠️ Passed turn (+1 Strike). Strike ${newStrikes}/3. Try to think of another term!`
      );
    }
  };

  // Submit student's turn word
  const handleSubmitStudentWord = async (word: string) => {
    setErrorMessage(null);
    setCurrentHint(null);

    const normalizedInput = word.trim().toLowerCase();
    const usedWords = wordHistory.map((w) => w.word.toLowerCase());

    // 1. Client-Side Duplicate Word Check
    if (usedWords.includes(normalizedInput)) {
      const newStrikes = strikes + 1;
      setStrikes(newStrikes);

      if (newStrikes >= 3) {
        setErrorMessage(
          `❌ Strike 3/3! "${word}" was already used in this match. 3 strikes reached!`
        );
        setTimeout(() => setGameStep("results"), 1200);
      } else {
        setErrorMessage(
          `⚠️ Strike ${newStrikes}/3: "${word}" has already been used in this match! Enter a NEW science term.`
        );
      }
      return;
    }

    setIsAiThinking(true);

    try {
      let data: ValidateAndRespondResponse;

      if (engineMode === "offline") {
        // Fast instant local offline validation and AI counter turn
        const valResult = validateStudentWordOffline(topic, word, usedWords);
        let aiTurnData = null;
        if (valResult.studentValidation.isValid) {
          aiTurnData = getAiTurnOffline(topic, [...usedWords, valResult.studentValidation.normalizedWord || word]);
        }
        data = {
          studentValidation: valResult.studentValidation,
          aiTurn: aiTurnData || undefined,
        };
      } else {
        // Gemini AI Cloud call
        try {
          const headers: Record<string, string> = { "Content-Type": "application/json" };
          if (apiKey.trim()) {
            headers["x-gemini-api-key"] = apiKey.trim();
          }

          const res = await fetch("/api/validate-and-respond", {
            method: "POST",
            headers,
            body: JSON.stringify({
              topic,
              studentWord: word,
              usedWords,
              bingoTiles: bingoTiles.map((t) => ({ id: t.id, label: t.label })),
              customApiKey: apiKey,
            }),
          });

          data = await res.json();
        } catch {
          // Automatic graceful offline fallback
          const valResult = validateStudentWordOffline(topic, word, usedWords);
          let aiTurnData = null;
          if (valResult.studentValidation.isValid) {
            aiTurnData = getAiTurnOffline(topic, [...usedWords, valResult.studentValidation.normalizedWord || word]);
          }
          data = {
            studentValidation: valResult.studentValidation,
            aiTurn: aiTurnData || undefined,
          };
        }
      }

      if (!data.studentValidation.isValid) {
        const newStrikes = strikes + 1;
        setStrikes(newStrikes);

        if (newStrikes >= 3) {
          setErrorMessage(
            `❌ Strike 3/3! Invalid word 3 times. Endless challenge completed!`
          );
          setTimeout(() => setGameStep("results"), 1200);
        } else {
          setErrorMessage(
            `⚠️ Strike ${newStrikes}/3: ${
              data.studentValidation.reason ||
              `"${word}" is not a valid science term for "${topic}".`
            }`
          );
        }
        setIsAiThinking(false);
        return;
      }

      // Valid word entered! Reset strikes to 0
      setStrikes(0);

      // Add student word to history
      const studentWordNormalized = data.studentValidation.normalizedWord || word;
      const studentEtymology =
        data.studentValidation.etymology && data.studentValidation.etymology.trim()
          ? data.studentValidation.etymology
          : getEtymologyFallback(studentWordNormalized, topic);

      const studentEntry: WordEntry = {
        id: `student-${Date.now()}`,
        word: studentWordNormalized,
        playedBy: "student",
        turnNumber: currentTurn,
        definition: data.studentValidation.definition || "Science term.",
        etymology: studentEtymology,
        isValid: true,
        score: data.studentValidation.score || 15,
        timestamp: Date.now(),
        matchedBingoTileId: data.studentValidation.matchedBingoTileId,
      };

      setWordHistory((prev) => [...prev, studentEntry]);
      setStudentScore((prev) => prev + studentEntry.score);

      // Claim Bingo Tile if matched
      let updatedTiles = [...bingoTiles];
      const studentWordLower = studentEntry.word.toLowerCase();
      updatedTiles = updatedTiles.map((t) => {
        if (t.claimedBy) return t;
        const labelLower = t.label.toLowerCase();
        const targetLower = (t.targetTermOrCategory || "").toLowerCase();
        const isMatch =
          (data.studentValidation.matchedBingoTileId && t.id === data.studentValidation.matchedBingoTileId) ||
          labelLower === studentWordLower ||
          targetLower === studentWordLower ||
          (studentWordLower.length >= 3 && (labelLower.includes(studentWordLower) || studentWordLower.includes(labelLower)));
        return isMatch ? { ...t, claimedBy: "student" as const, claimedWord: studentEntry.word } : t;
      });
      setBingoTiles(updatedTiles);
      const newBingos = calculateBingos(updatedTiles, "student");
      if (newBingos > studentBingos) {
        setStudentBingos(newBingos);
        setStudentScore((prev) => prev + (newBingos - studentBingos) * 50);
      }

      // Save AI Turn payload for animated typing!
      if (data.aiTurn) {
        setLatestAiTurnData(data.aiTurn);
        setIsStudentTurn(false);
      } else {
        // If AI didn't provide turn, advance turn
        setIsStudentTurn(true);
        if (maxTurns > 0 && maxTurns < 999 && currentTurn >= maxTurns) {
          setGameStep("results");
        } else {
          setCurrentTurn((prev) => prev + 1);
        }
      }
    } catch (err: any) {
      setErrorMessage("Network or validation error. Please try playing again.");
    } finally {
      setIsAiThinking(false);
    }
  };

  // Called when AI letter-by-letter typing animation finishes in UI
  const handleAiTypingComplete = () => {
    if (!latestAiTurnData) return;

    const aiEtymology =
      latestAiTurnData.etymology && latestAiTurnData.etymology.trim()
        ? latestAiTurnData.etymology
        : getEtymologyFallback(latestAiTurnData.word, topic);

    const aiEntry: WordEntry = {
      id: `ai-${Date.now()}`,
      word: latestAiTurnData.word,
      playedBy: "ai",
      turnNumber: currentTurn,
      definition: latestAiTurnData.definition,
      etymology: aiEtymology,
      funFact: latestAiTurnData.funFact,
      isValid: true,
      score: latestAiTurnData.score || 20,
      timestamp: Date.now(),
      matchedBingoTileId: latestAiTurnData.matchedBingoTileId,
    };

    setWordHistory((prev) => [...prev, aiEntry]);
    setAiScore((prev) => prev + aiEntry.score);

    // Claim Bingo Tile if matched
    const aiWordLower = aiEntry.word.toLowerCase();
    const updatedTiles = bingoTiles.map((t) => {
      if (t.claimedBy) return t;
      const labelLower = t.label.toLowerCase();
      const targetLower = (t.targetTermOrCategory || "").toLowerCase();
      const isMatch =
        (latestAiTurnData.matchedBingoTileId && t.id === latestAiTurnData.matchedBingoTileId) ||
        labelLower === aiWordLower ||
        targetLower === aiWordLower ||
        (aiWordLower.length >= 3 && (labelLower.includes(aiWordLower) || aiWordLower.includes(labelLower)));
      return isMatch ? { ...t, claimedBy: "ai" as const, claimedWord: aiEntry.word } : t;
    });
    setBingoTiles(updatedTiles);
    const newAiBingos = calculateBingos(updatedTiles, "ai");
    if (newAiBingos > aiBingos) {
      setAiBingos(newAiBingos);
      setAiScore((prev) => prev + (newAiBingos - aiBingos) * 50);
    }

    setLatestAiTurnData(null);

    // Turn transition check
    if (maxTurns > 0 && maxTurns < 999 && currentTurn >= maxTurns) {
      setTimeout(() => setGameStep("results"), 1200);
    } else {
      setCurrentTurn((prev) => prev + 1);
      setIsStudentTurn(true);
    }
  };

  // Fetch hint
  const handleGetHint = async () => {
    const usedWords = wordHistory.map((w) => w.word);
    if (engineMode === "offline") {
      setCurrentHint(getOfflineHint(topic, usedWords));
      return;
    }
    try {
      const headers: Record<string, string> = { "Content-Type": "application/json" };
      if (apiKey.trim()) {
        headers["x-gemini-api-key"] = apiKey.trim();
      }

      const res = await fetch("/api/get-hint", {
        method: "POST",
        headers,
        body: JSON.stringify({ topic, usedWords, customApiKey: apiKey }),
      });
      const data = await res.json();
      setCurrentHint(data.hint || getOfflineHint(topic, usedWords));
    } catch {
      setCurrentHint(getOfflineHint(topic, usedWords));
    }
  };

  // Compute final statistics for results
  const computeStats = (): GameStats => {
    const studentWords = wordHistory.filter((w) => w.playedBy === "student");
    const aiWords = wordHistory.filter((w) => w.playedBy === "ai");

    const studentTotalChars = studentWords.reduce((acc, w) => acc + w.word.length, 0);
    const aiTotalChars = aiWords.reduce((acc, w) => acc + w.word.length, 0);

    const longestStudent = studentWords.reduce(
      (max, w) => (w.word.length > max.length ? w.word : max),
      ""
    );
    const longestAi = aiWords.reduce(
      (max, w) => (w.word.length > max.length ? w.word : max),
      ""
    );

    return {
      studentScore,
      aiScore,
      studentWordCount: studentWords.length,
      aiWordCount: aiWords.length,
      studentTotalLetters: studentTotalChars,
      aiTotalLetters: aiTotalChars,
      studentBingos,
      aiBingos,
      totalTurns: wordHistory.length,
      longestStudentWord: longestStudent,
      longestAiWord: longestAi,
      streak: studentWords.length,
      strikes,
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-sky-50/40 to-white text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header
        topicName={topic}
        studentScore={studentScore}
        aiScore={aiScore}
        currentTurn={currentTurn}
        maxTurns={maxTurns}
        strikes={strikes}
        gameMode={gameMode}
        soundEnabled={soundEnabled}
        hasCustomKey={!!apiKey.trim()}
        academicHonesty={academicHonesty}
        engineMode={engineMode}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        onChangeTopic={() => setGameStep("setup")}
        onResetGame={() => handleStartGame(topic, gameMode, maxTurns)}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        onEndGame={() => setGameStep("results")}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
        {gameStep === "setup" && (
          <TopicSelector
            onStartGame={handleStartGame}
            academicHonesty={academicHonesty}
            onToggleAcademicHonesty={handleToggleAcademicHonesty}
            hasCustomKey={!!apiKey.trim()}
            onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
            engineMode={engineMode}
            onChangeEngineMode={handleToggleEngineMode}
          />
        )}

        {gameStep === "playing" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Word Battle Duel Arena */}
            <div className={gameMode === "bingo-battle" ? "lg:col-span-7" : "lg:col-span-12"}>
              <WordBattle
                topic={topic}
                currentTurn={currentTurn}
                maxTurns={maxTurns}
                strikes={strikes}
                isStudentTurn={isStudentTurn}
                isAiThinking={isAiThinking}
                academicHonesty={academicHonesty}
                latestAiWord={latestAiTurnData}
                wordHistory={wordHistory}
                soundEnabled={soundEnabled}
                onSubmitStudentWord={handleSubmitStudentWord}
                onPassTurn={handlePassTurn}
                onGetHint={handleGetHint}
                currentHint={currentHint}
                errorMessage={errorMessage}
                onAiTypingComplete={handleAiTypingComplete}
                stats={computeStats()}
                gameMode={gameMode}
              />
            </div>

            {/* Interactive Bingo Grid (shown in Bingo Battle or side view) */}
            {gameMode === "bingo-battle" && (
              <div className="lg:col-span-5">
                <BingoCard
                  tiles={bingoTiles}
                  studentBingos={studentBingos}
                  aiBingos={aiBingos}
                />
              </div>
            )}
          </div>
        )}

        {gameStep === "results" && (
          <GameResults
            topic={topic}
            stats={computeStats()}
            wordHistory={wordHistory}
            onRestartSameTopic={() => handleStartGame(topic, gameMode, maxTurns)}
            onChangeTopic={() => setGameStep("setup")}
          />
        )}
      </main>

      {/* Glossary Modal */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
        topic={topic}
        wordHistory={wordHistory}
      />

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
      />

      {/* Academic Honesty Violation Alert Modal */}
      <AcademicHonestyModal
        isOpen={isAcademicHonestyModalOpen}
        onAcknowledgeAndRestart={() => {
          setIsAcademicHonestyModalOpen(false);
          setGameStep("setup");
        }}
      />
    </div>
  );
}

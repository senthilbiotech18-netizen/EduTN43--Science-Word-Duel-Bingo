import React, { useState, useRef, useEffect } from "react";
import { WordEntry, GameStats } from "../types";
import { AITypingWord } from "./AITypingWord";
import { generatePdfReport } from "../utils/pdfGenerator";
import { getEtymologyFallback } from "../utils/etymologyHelper";
import {
  Send,
  Sparkles,
  Bot,
  User,
  Lightbulb,
  AlertCircle,
  FileDown,
  Zap,
  CheckCircle2,
  Columns,
  Layers,
} from "lucide-react";

interface WordBattleProps {
  topic: string;
  currentTurn: number;
  maxTurns: number;
  strikes: number;
  isStudentTurn: boolean;
  isAiThinking: boolean;
  academicHonesty?: boolean;
  latestAiWord: {
    word: string;
    definition: string;
    funFact?: string;
    score: number;
  } | null;
  wordHistory: WordEntry[];
  soundEnabled: boolean;
  onSubmitStudentWord: (word: string) => void;
  onPassTurn: () => void;
  onGetHint: () => void;
  currentHint: string | null;
  errorMessage: string | null;
  onAiTypingComplete: () => void;
  stats: GameStats;
  gameMode: string;
}

export const WordBattle: React.FC<WordBattleProps> = ({
  topic,
  currentTurn,
  maxTurns,
  strikes,
  isStudentTurn,
  isAiThinking,
  academicHonesty = true,
  latestAiWord,
  wordHistory,
  soundEnabled,
  onSubmitStudentWord,
  onPassTurn,
  onGetHint,
  currentHint,
  errorMessage,
  onAiTypingComplete,
  stats,
  gameMode,
}) => {
  const [inputWord, setInputWord] = useState("");
  const [showAiDetails, setShowAiDetails] = useState(false);

  const studentScrollRef = useRef<HTMLDivElement>(null);
  const aiScrollRef = useRef<HTMLDivElement>(null);

  // Separate word histories into Student side and AI side
  const studentWords = wordHistory.filter((w) => w.playedBy === "student");
  const aiWords = wordHistory.filter((w) => w.playedBy === "ai");

  useEffect(() => {
    if (studentScrollRef.current) {
      studentScrollRef.current.scrollTop = studentScrollRef.current.scrollHeight;
    }
  }, [studentWords]);

  useEffect(() => {
    if (aiScrollRef.current) {
      aiScrollRef.current.scrollTop = aiScrollRef.current.scrollHeight;
    }
  }, [aiWords, latestAiWord, isAiThinking]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputWord.trim() || !isStudentTurn || isAiThinking) return;
    onSubmitStudentWord(inputWord.trim());
    setInputWord("");
    setShowAiDetails(false);
  };

  const handleDownloadPdf = () => {
    generatePdfReport(topic, stats, wordHistory, gameMode);
  };

  return (
    <div className="bg-white border border-blue-100/80 rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col justify-between h-full min-h-[580px]">
      {/* Top Banner Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-blue-100 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <div
            className={`w-3 h-3 rounded-full ${
              isStudentTurn ? "bg-blue-600 animate-ping" : "bg-indigo-600 animate-ping"
            }`}
          />
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <Columns className="w-4 h-4 text-blue-600" />
            Split Arena:{" "}
            {isStudentTurn ? (
              <span className="text-blue-700 font-extrabold">Student Active Turn</span>
            ) : (
              <span className="text-indigo-700 font-extrabold">AI Challenger Typing...</span>
            )}
          </h3>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200" title="Score is count-based: both student and AI receive exactly 20 points per valid word, not based on speed">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Fair Points: 20 pts / Word
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onGetHint}
            disabled={!isStudentTurn || isAiThinking}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition-colors disabled:opacity-50"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>Get Clue</span>
          </button>

          <button
            onClick={handleDownloadPdf}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 transition-colors"
            title="Download PDF Scorecard"
          >
            <FileDown className="w-3.5 h-3.5 text-blue-600" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Hint Alert */}
      {currentHint && (
        <div className="mt-3 p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block text-amber-900">AI Clue:</strong>
            {currentHint}
          </div>
        </div>
      )}

      {/* Error Message Alert */}
      {errorMessage && (
        <div className="mt-3 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 animate-shake">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span className="font-medium">{errorMessage}</span>
        </div>
      )}

      {/* SPLIT SCREEN CANVAS: Left Side = Student | Right Side = AI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 flex-1 min-h-[380px]">
        {/* LEFT SIDE: STUDENT ARENA */}
        <div className="bg-blue-50/40 border border-blue-200/80 rounded-2xl p-4 flex flex-col justify-between shadow-inner">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-blue-200/80 mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-600 text-white shadow-sm">
                <User className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-blue-900">
                  Student Deck
                </h4>
                <p className="text-[10px] text-blue-700 font-medium">
                  {studentWords.length} {studentWords.length === 1 ? "word" : "words"} • 20 pts each
                </p>
              </div>
            </div>

            <span className="text-xs font-mono font-bold text-blue-800 bg-blue-100 px-2.5 py-1 rounded-full border border-blue-200">
              {stats.studentScore} pts
            </span>
          </div>

          {/* Student Word History Stream */}
          <div
            ref={studentScrollRef}
            className="flex-1 overflow-y-auto space-y-3 pr-1 max-h-[300px] scrollbar-thin scrollbar-thumb-blue-200"
          >
            {studentWords.length === 0 ? (
              <div className="text-center py-10 text-blue-400">
                <User className="w-8 h-8 mx-auto mb-2 opacity-40 text-blue-600" />
                <p className="text-xs font-bold text-slate-600">Your side is ready!</p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Type a science term on "{topic}" below.
                </p>
              </div>
            ) : (
              studentWords.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-white border border-blue-200 shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-slate-400 font-bold">
                      Turn #{item.turnNumber}
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-700 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-amber-500" />
                      +{item.score} pts
                    </span>
                  </div>

                  <h5 className="text-base font-black font-mono text-blue-950 tracking-wide">
                    {item.word}
                  </h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.definition}
                  </p>
                  <p className="text-[11px] text-blue-900 mt-1.5 font-medium bg-blue-50/90 px-2.5 py-1 rounded-md border border-blue-200 flex items-start gap-1">
                    <span className="text-xs">📜</span>
                    <span><strong className="font-bold text-blue-950">Origin / Etymology:</strong> {item.etymology || getEtymologyFallback(item.word, topic)}</span>
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Student Input Form attached at bottom of Student Column */}
          <form onSubmit={handleSubmit} className="mt-3 pt-3 border-t border-blue-200/80">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
                onPaste={(e) => {
                  if (academicHonesty) {
                    e.preventDefault();
                    alert("🚫 Copy-pasting is disabled in Academic Honesty Mode! Please type the science term.");
                  }
                }}
                disabled={!isStudentTurn || isAiThinking}
                placeholder={
                  isStudentTurn
                    ? `Type science word for "${topic}"...`
                    : "Waiting for AI..."
                }
                className="w-full bg-white border border-blue-300 focus:border-blue-600 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none pr-24 font-mono shadow-sm disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!inputWord.trim() || !isStudentTurn || isAiThinking}
                className="absolute right-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-lg flex items-center gap-1 shadow transition-all disabled:opacity-40"
              >
                <span>Type</span>
                <Send className="w-3 h-3" />
              </button>
            </div>

            {/* Input Action Bar */}
            <div className="flex items-center justify-between mt-2 gap-2">
              <button
                type="button"
                onClick={onPassTurn}
                disabled={!isStudentTurn || isAiThinking}
                className="text-[11px] font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors disabled:opacity-40"
                title="If you cannot think of a word, pass turn (+1 Strike)"
              >
                <AlertCircle className="w-3 h-3 text-rose-600" />
                <span>I'm Stuck (Pass Turn)</span>
              </button>

              <div className="text-[10px] text-slate-500 font-medium">
                {maxTurns === 0 || maxTurns >= 999 ? (
                  <span className="text-blue-700 font-bold">Endless Duel • 3 Strikes Max</span>
                ) : (
                  <span>Turns Left: {maxTurns - currentTurn}</span>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE: AI CHALLENGER ARENA */}
        <div className="bg-indigo-50/40 border border-indigo-200/80 rounded-2xl p-4 flex flex-col justify-between shadow-inner">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-indigo-200/80 mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-600 text-white shadow-sm">
                <Bot className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-indigo-900">
                  AI Challenger Deck
                </h4>
                <p className="text-[10px] text-indigo-700 font-medium">
                  {aiWords.length} {aiWords.length === 1 ? "word" : "words"} • 20 pts each
                </p>
              </div>
            </div>

            <span className="text-xs font-mono font-bold text-indigo-800 bg-indigo-100 px-2.5 py-1 rounded-full border border-indigo-200">
              {stats.aiScore} pts
            </span>
          </div>

          {/* AI Word History Stream */}
          <div
            ref={aiScrollRef}
            className="flex-1 overflow-y-auto space-y-3 pr-1 max-h-[300px] scrollbar-thin scrollbar-thumb-indigo-200"
          >
            {aiWords.length === 0 && !isAiThinking && !latestAiWord && (
              <div className="text-center py-10 text-indigo-400">
                <Bot className="w-8 h-8 mx-auto mb-2 opacity-40 text-indigo-600" />
                <p className="text-xs font-bold text-slate-600">AI is waiting for your move</p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  AI will generate its response immediately after your turn.
                </p>
              </div>
            )}

            {/* AI Played Words */}
            {aiWords.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-white border border-indigo-200 shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-slate-400 font-bold">
                    Turn #{item.turnNumber}
                  </span>
                  <span className="text-xs font-mono font-bold text-indigo-700 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-500" />
                    +{item.score} pts
                  </span>
                </div>

                <h5 className="text-base font-black font-mono text-indigo-950 tracking-wide">
                  {item.word}
                </h5>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.definition}
                </p>
                <p className="text-[11px] text-indigo-900 mt-1.5 font-medium bg-indigo-50/90 px-2.5 py-1 rounded-md border border-indigo-200 flex items-start gap-1">
                  <span className="text-xs">📜</span>
                  <span><strong className="font-bold text-indigo-950">Origin / Etymology:</strong> {item.etymology || getEtymologyFallback(item.word, topic)}</span>
                </p>
                {item.funFact && (
                  <p className="text-[11px] text-indigo-900 mt-1 italic font-medium">
                    💡 {item.funFact}
                  </p>
                )}
              </div>
            ))}

            {/* AI Thinking State */}
            {isAiThinking && (
              <div className="p-3.5 rounded-xl bg-indigo-100/80 border border-indigo-300 animate-pulse flex items-center gap-3">
                <Bot className="w-5 h-5 text-indigo-600 animate-spin" />
                <div>
                  <p className="text-xs font-bold text-indigo-900">AI Challenger thinking...</p>
                  <p className="text-[10px] text-indigo-700">Analyzing science dictionary for "{topic}"</p>
                </div>
              </div>
            )}

            {/* Live AI Letter-By-Letter Typing Turn */}
            {latestAiWord && !isAiThinking && (
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-100 border border-indigo-300 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-indigo-900 flex items-center gap-1">
                    <Bot className="w-3.5 h-3.5 text-indigo-600" /> AI Typing Live:
                  </span>
                  <span className="text-xs font-mono font-bold text-indigo-800">
                    +{latestAiWord.score} pts
                  </span>
                </div>

                <div className="py-1">
                  <AITypingWord
                    fullWord={latestAiWord.word}
                    speedMs={90}
                    soundEnabled={soundEnabled}
                    onComplete={() => {
                      setShowAiDetails(true);
                      onAiTypingComplete();
                    }}
                  />
                </div>

                <div className="mt-2 pt-2 border-t border-indigo-200/80">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {latestAiWord.definition}
                  </p>
                  <p className="text-[11px] text-indigo-900 mt-1.5 font-medium bg-indigo-50/90 px-2.5 py-1 rounded-md border border-indigo-200 flex items-start gap-1">
                    <span className="text-xs">📜</span>
                    <span><strong className="font-bold text-indigo-950">Origin / Etymology:</strong> {latestAiWord.etymology || getEtymologyFallback(latestAiWord.word, topic)}</span>
                  </p>
                  {latestAiWord.funFact && (
                    <p className="text-[11px] text-indigo-900 mt-1 italic font-medium">
                      💡 {latestAiWord.funFact}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="mt-3 pt-3 border-t border-indigo-200/80 text-center">
            <p className="text-[10px] text-indigo-800 font-medium">
              AI responds word-for-word in real-time letter animation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

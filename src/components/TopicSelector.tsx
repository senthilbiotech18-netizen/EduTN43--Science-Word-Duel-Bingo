import React, { useState } from "react";
import { PRESET_TOPICS } from "../data/topics";
import { Topic, GameMode } from "../types";
import { EduTN43Logo } from "./EduTN43Logo";
import {
  Dna,
  Binary,
  Trees,
  Activity,
  FlaskConical,
  Zap,
  Sparkles,
  ArrowRight,
  Sparkle,
  Grid,
  Swords,
  Layers,
  Search,
  ShieldCheck,
  ShieldAlert,
  Key,
} from "lucide-react";

interface TopicSelectorProps {
  onStartGame: (topic: string, gameMode: GameMode, maxTurns: number) => void;
  academicHonesty: boolean;
  onToggleAcademicHonesty: () => void;
  hasCustomKey: boolean;
  onOpenApiKeyModal: () => void;
  engineMode: "offline" | "gemini";
  onChangeEngineMode: (mode: "offline" | "gemini") => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Dna,
  Binary,
  Trees,
  Activity,
  FlaskConical,
  Zap,
  Sparkles,
};

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  onStartGame,
  academicHonesty,
  onToggleAcademicHonesty,
  hasCustomKey,
  onOpenApiKeyModal,
  engineMode,
  onChangeEngineMode,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>("cell-biology");
  const [customTopic, setCustomTopic] = useState<string>("");
  const [gameMode, setGameMode] = useState<GameMode>("turn-duel");
  const [maxTurns, setMaxTurns] = useState<number>(0); // 0 = Endless

  const handleStart = () => {
    let chosenTopicName = "";
    if (selectedTopicId === "custom") {
      chosenTopicName = customTopic.trim() || "Biology & General Science";
    } else {
      const found = PRESET_TOPICS.find((t) => t.id === selectedTopicId);
      chosenTopicName = found ? found.name : "Cell Biology & Organelles";
    }
    onStartGame(chosenTopicName, gameMode, maxTurns);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title Hero */}
      <div className="text-center mb-8 flex flex-col items-center">
        <div className="mb-4">
          <EduTN43Logo size="lg" variant="full" showTagline />
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-xs font-bold mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" /> EduTN43 Science & Biology Learning Tech
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          <span className="text-blue-600 font-black mr-2">EduTN43</span>Science Word Battle & Bingo
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          Challenge the AI word-for-word on any science topic! Type one word, AI types one word. Track total scores, claim Bingo tiles, and explore comprehensive biology dictionaries.
        </p>
      </div>

      {/* Step 1: Topic Selection */}
      <div className="bg-white border border-blue-100/80 rounded-3xl p-6 mb-6 shadow-sm">
        <h3 className="text-xs uppercase font-extrabold tracking-wider text-blue-600 mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-600" />
          1. Choose Your Science Topic
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-4">
          {PRESET_TOPICS.map((topic) => {
            const IconComponent = ICON_MAP[topic.iconName] || Dna;
            const isSelected = selectedTopicId === topic.id;

            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden group ${
                  isSelected
                    ? "bg-blue-50/90 border-blue-500 shadow-md ring-2 ring-blue-500/20"
                    : "bg-white border-slate-200 hover:bg-blue-50/40 hover:border-blue-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{topic.name}</h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{topic.description}</p>
                  </div>
                </div>
              </button>
            );
          })}

          {/* Custom Topic Option */}
          <button
            onClick={() => setSelectedTopicId("custom")}
            className={`text-left p-4 rounded-2xl border transition-all ${
              selectedTopicId === "custom"
                ? "bg-indigo-50/90 border-indigo-500 shadow-md ring-2 ring-indigo-500/20"
                : "bg-white border-slate-200 hover:bg-indigo-50/40 hover:border-indigo-300"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
                <Search className="w-5 h-5" />
              </div>
              <div className="w-full">
                <h4 className="text-sm font-bold text-slate-900">Custom Science Topic</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Type any custom biology or science subject.
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Custom Topic Input */}
        {selectedTopicId === "custom" && (
          <div className="mt-3 p-4 bg-slate-50 border border-blue-200 rounded-2xl">
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Enter Custom Topic Name:
            </label>
            <input
              type="text"
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              placeholder="e.g. Reproduction in plants, Neuroscience, Quantum Physics..."
              className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600 shadow-sm"
            />
            <div className="mt-2.5 flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] text-slate-500 font-medium">Quick Topic Ideas:</span>
              {[
                "Reproduction in Plants",
                "Human Heart & Circulation",
                "Neuroscience & Brain",
                "Quantum Physics",
                "Organic Chemistry",
                "Plate Tectonics",
                "Microbiology"
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setCustomTopic(suggestion)}
                  className="px-2.5 py-1 text-xs bg-white border border-blue-200 hover:border-blue-500 hover:bg-blue-50 text-blue-700 font-medium rounded-lg transition-colors shadow-2xs"
                >
                  + {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Step 2: Game Mode & Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Game Mode */}
        <div className="bg-white border border-blue-100/80 rounded-3xl p-6 shadow-sm">
          <h3 className="text-xs uppercase font-extrabold tracking-wider text-blue-600 mb-4 flex items-center gap-2">
            <Swords className="w-4 h-4 text-blue-600" />
            2. Choose Game Mode
          </h3>

          <div className="space-y-3">
            <button
              onClick={() => setGameMode("turn-duel")}
              className={`w-full p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-all ${
                gameMode === "turn-duel"
                  ? "bg-blue-50/90 border-blue-500 shadow-sm ring-2 ring-blue-500/20"
                  : "bg-white border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                <Swords className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Word-for-Word Duel</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Strict turn-by-turn. Student 1 word, AI 1 word (letter-by-letter typing animation).
                </p>
              </div>
            </button>

            <button
              onClick={() => setGameMode("bingo-battle")}
              className={`w-full p-4 rounded-2xl border text-left flex items-center gap-3.5 transition-all ${
                gameMode === "bingo-battle"
                  ? "bg-indigo-50/90 border-indigo-500 shadow-sm ring-2 ring-indigo-500/20"
                  : "bg-white border-slate-200 hover:bg-slate-50"
              }`}
            >
              <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700">
                <Grid className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Bingo Card Battle</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Type words to claim 5x5 Bingo tiles and get bonus lines against the AI!
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Match Length / Challenge Rules */}
        <div className="bg-white border border-blue-100/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-blue-600 mb-4 flex items-center gap-2">
              <Sparkle className="w-4 h-4 text-blue-600" />
              3. Match Limit & Challenge Rules
            </h3>

            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <button
                onClick={() => setMaxTurns(0)}
                className={`col-span-2 p-3.5 rounded-2xl border text-left font-bold transition-all ${
                  maxTurns === 0
                    ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm">∞ Endless Challenge</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${maxTurns === 0 ? "bg-white/20 text-white" : "bg-blue-100 text-blue-800"}`}>
                    Recommended
                  </span>
                </div>
                <p className={`text-xs mt-1 font-normal ${maxTurns === 0 ? "text-blue-100" : "text-slate-500"}`}>
                  No turn limits! Challenge AI as long as you can. Match ends if you duplicate words or fail 3 times.
                </p>
              </button>

              {[8, 12, 16].map((num) => (
                <button
                  key={num}
                  onClick={() => setMaxTurns(num)}
                  className={`py-2.5 rounded-2xl border text-center font-mono font-bold text-xs transition-all ${
                    maxTurns === num
                      ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-blue-50/50"
                  }`}
                >
                  {num} <span className="font-normal opacity-80">Fixed Turns</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              In Endless Challenge, keep typing science terms to test how deep your vocabulary goes against the AI!
            </p>
          </div>

          <button
            onClick={handleStart}
            className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all transform active:scale-95"
          >
            Start Word Battle <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Step 3: Engine Selection (Offline Fast vs Gemini AI) */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-6 shadow-xl border border-blue-800 mb-6">
        <h3 className="text-xs uppercase font-extrabold tracking-wider text-blue-300 mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          Game Engine Mode
        </h3>
        <p className="text-xs text-blue-200 mb-4 leading-relaxed">
          Choose how the game validates words and generates opponent turns:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => onChangeEngineMode("offline")}
            className={`p-4 rounded-2xl border text-left transition-all relative ${
              engineMode === "offline"
                ? "bg-blue-800/90 border-amber-400 ring-2 ring-amber-400/50 shadow-lg"
                : "bg-blue-950/50 border-blue-800 hover:bg-blue-800/40 text-blue-200"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-black text-sm text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" /> ⚡ Offline Fast Glossary Engine
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-extrabold text-[10px]">
                Instant • 0 Lag
              </span>
            </div>
            <p className="text-xs text-blue-200 leading-relaxed">
              Uses built-in extensive science dictionary. Works 100% offline with instant 0ms responses, zero internet required, no rate limits!
            </p>
          </button>

          <button
            type="button"
            onClick={() => onChangeEngineMode("gemini")}
            className={`p-4 rounded-2xl border text-left transition-all relative ${
              engineMode === "gemini"
                ? "bg-blue-800/90 border-blue-400 ring-2 ring-blue-400/50 shadow-lg"
                : "bg-blue-950/50 border-blue-800 hover:bg-blue-800/40 text-blue-200"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-black text-sm text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-300" /> 🤖 Gemini AI Cloud Engine
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-300 font-extrabold text-[10px]">
                Generative AI
              </span>
            </div>
            <p className="text-xs text-blue-200 leading-relaxed">
              Uses Gemini Cloud AI for dynamic word discovery. Requires active internet connection and API key.
            </p>
          </button>
        </div>
      </div>

      {/* Step 4: Academic Integrity & Custom API Key Settings */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
        {/* Academic Honesty Toggle */}
        <div className="flex items-start gap-4 w-full md:w-1/2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-black text-white">Academic Honesty Mode</h4>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                Tab Switch Protection
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Resets match if a student leaves or switches tabs to prevent copy-pasting or searching answers.
            </p>
            <label className="inline-flex items-center gap-2 mt-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={academicHonesty}
                onChange={onToggleAcademicHonesty}
                className="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400"
              />
              <span className="text-xs font-bold text-emerald-400">
                {academicHonesty ? "Active (Switching tabs resets progress)" : "Disabled"}
              </span>
            </label>
          </div>
        </div>

        <div className="w-full md:w-px h-px md:h-20 bg-slate-800" />

        {/* Custom API Key Config */}
        <div className="flex items-start gap-4 w-full md:w-1/2">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
            <Key className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-black text-white">Personal Gemini API Key</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {hasCustomKey
                ? "⚡ Custom API key active for high speed and no rate limits!"
                : "Optionally enter your own Gemini API key for fast, unlimited play."}
            </p>
            <button
              onClick={onOpenApiKeyModal}
              className="mt-3 px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all inline-flex items-center gap-1.5"
            >
              <Key className="w-3.5 h-3.5" />
              <span>{hasCustomKey ? "Manage Saved Key" : "Add Custom API Key"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

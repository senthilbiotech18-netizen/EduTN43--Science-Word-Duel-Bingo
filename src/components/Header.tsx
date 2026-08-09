import React from "react";
import { Volume2, VolumeX, RefreshCw, Award, BookOpen, Key, ShieldCheck, Zap } from "lucide-react";
import { GameMode } from "../types";
import { InstallPwaButton } from "./InstallPwaButton";
import { EduTN43Logo } from "./EduTN43Logo";

interface HeaderProps {
  topicName: string;
  studentScore: number;
  aiScore: number;
  currentTurn: number;
  maxTurns: number;
  strikes: number;
  gameMode: GameMode;
  soundEnabled: boolean;
  hasCustomKey: boolean;
  academicHonesty: boolean;
  engineMode?: "offline" | "gemini";
  onToggleSound: () => void;
  onChangeTopic: () => void;
  onResetGame: () => void;
  onOpenGlossary: () => void;
  onOpenApiKeyModal: () => void;
  onEndGame: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  topicName,
  studentScore,
  aiScore,
  currentTurn,
  maxTurns,
  strikes,
  gameMode,
  soundEnabled,
  hasCustomKey,
  academicHonesty,
  engineMode = "offline",
  onToggleSound,
  onChangeTopic,
  onResetGame,
  onOpenGlossary,
  onOpenApiKeyModal,
  onEndGame,
}) => {
  const isEndless = maxTurns === 0 || maxTurns >= 999;

  return (
    <header className="bg-white/90 border-b border-blue-100/80 shadow-sm backdrop-blur-md sticky top-0 z-40 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Topic */}
        <div className="flex items-center gap-3">
          <EduTN43Logo size="md" variant="icon" />
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight flex items-center gap-1.5 flex-wrap">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent font-black">
                  EduTN43
                </span>
                <span className="text-slate-900">Science Word Battle</span>
              </h1>
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                {isEndless
                  ? "Endless Challenge"
                  : gameMode === "bingo-battle"
                  ? "Bingo Mode"
                  : "Turn Battle"}
              </span>
              {academicHonesty && (
                <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1" title="Tab-Switch Reset Prevention Active">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Academic Honesty
                </span>
              )}
              {engineMode === "offline" ? (
                <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1" title="0ms Latency Instant Offline Dictionary Engine">
                  <Zap className="w-3 h-3 text-amber-600 fill-amber-500" /> Offline Engine
                </span>
              ) : (
                <span className="px-2 py-0.5 text-[11px] font-bold rounded-full bg-indigo-100 text-indigo-900 border border-indigo-200 flex items-center gap-1" title="Live Gemini Cloud AI Engine">
                  🤖 Gemini AI Engine
                </span>
              )}
            </div>
            {topicName && (
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                Topic: <span className="text-slate-800 font-bold">{topicName}</span>
              </p>
            )}
          </div>
        </div>

        {/* Live Scoreboard */}
        <div className="flex items-center gap-4 bg-slate-50 border border-blue-100 rounded-2xl px-5 py-2 shadow-inner">
          {/* Student Score */}
          <div className="text-center px-2">
            <div className="text-[10px] uppercase font-black tracking-wider text-blue-600">
              Student
            </div>
            <div className="text-xl font-black text-blue-900 font-mono">
              {studentScore} <span className="text-xs text-slate-400 font-normal">pts</span>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          {/* Turn Counter */}
          <div className="text-center px-2">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
              Turn
            </div>
            <div className="text-sm font-black text-slate-700 font-mono">
              {currentTurn} {isEndless ? <span className="text-xs text-blue-600 font-semibold">(∞ Endless)</span> : <span className="text-xs text-slate-400 font-normal">/ {maxTurns}</span>}
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          {/* Strikes Counter */}
          <div className="text-center px-2">
            <div className="text-[10px] uppercase font-black tracking-wider text-rose-600">
              Strikes
            </div>
            <div className="text-sm font-black text-rose-600 font-mono flex items-center gap-1 justify-center">
              <span>{strikes}/3</span>
              <span className="text-xs">
                {strikes === 0 ? "⚪⚪⚪" : strikes === 1 ? "🔴⚪⚪" : strikes === 2 ? "🔴🔴⚪" : "🔴🔴🔴"}
              </span>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          {/* AI Score */}
          <div className="text-center px-2">
            <div className="text-[10px] uppercase font-black tracking-wider text-indigo-600">
              AI Challenger
            </div>
            <div className="text-xl font-black text-indigo-900 font-mono">
              {aiScore} <span className="text-xs text-slate-400 font-normal">pts</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <InstallPwaButton />

          <button
            onClick={onOpenApiKeyModal}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl border transition-colors ${
              hasCustomKey
                ? "bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300"
                : "bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200"
            }`}
            title="Configure Personal Gemini API Key"
          >
            <Key className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline">{hasCustomKey ? "Key Saved" : "API Key"}</span>
          </button>

          <button
            onClick={onToggleSound}
            title={soundEnabled ? "Mute Sounds" : "Unmute Sounds"}
            className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          <button
            onClick={onOpenGlossary}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 transition-colors"
            title="View Word Glossary"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Glossary</span>
          </button>

          <button
            onClick={onChangeTopic}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Change Topic</span>
          </button>

          <button
            onClick={onEndGame}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 transition-colors"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Finish Match</span>
          </button>
        </div>
      </div>
    </header>
  );
};

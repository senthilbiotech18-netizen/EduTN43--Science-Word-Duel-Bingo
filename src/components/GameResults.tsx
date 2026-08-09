import React, { useState } from "react";
import { GameStats, WordEntry } from "../types";
import { generatePdfReport } from "../utils/pdfGenerator";
import { getEtymologyFallback } from "../utils/etymologyHelper";
import {
  Trophy,
  Award,
  BarChart3,
  BookOpen,
  RotateCcw,
  RefreshCw,
  Copy,
  Check,
  Zap,
  Sparkles,
  User,
  Bot,
  Hash,
  Type,
  Maximize2,
  FileDown,
} from "lucide-react";

interface GameResultsProps {
  topic: string;
  stats: GameStats;
  wordHistory: WordEntry[];
  onRestartSameTopic: () => void;
  onChangeTopic: () => void;
}

export const GameResults: React.FC<GameResultsProps> = ({
  topic,
  stats,
  wordHistory,
  onRestartSameTopic,
  onChangeTopic,
}) => {
  const [copied, setCopied] = useState(false);

  const studentWon = stats.studentScore > stats.aiScore;
  const isTie = stats.studentScore === stats.aiScore;

  const handleDownloadPdf = () => {
    generatePdfReport(topic, stats, wordHistory, "Match Scorecard");
  };

  // Copy vocabulary report to clipboard
  const handleCopySummary = () => {
    const summaryText = `Science Word Battle Summary (${topic})
-----------------------------------------
Final Score: Student (${stats.studentScore} pts) vs AI (${stats.aiScore} pts)
Words Typed: Student (${stats.studentWordCount} words) vs AI (${stats.aiWordCount} words)
Longest Student Word: ${stats.longestStudentWord || "N/A"}
Longest AI Word: ${stats.longestAiWord || "N/A"}

Vocabulary Words Played:
${wordHistory
  .map(
    (w, i) =>
      `${i + 1}. [${w.playedBy.toUpperCase()}] ${w.word} (+${w.score}pts) - ${w.definition}${w.etymology ? ` (Origin: ${w.etymology})` : ""}`
  )
  .join("\n")}`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Winner Header Banner */}
      <div className="text-center mb-8 bg-white border border-blue-100 rounded-3xl p-8 shadow-sm relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-4">
          <Trophy className="w-4 h-4 text-blue-600" /> Match Completed: {topic}
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
          {studentWon ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Student Victory! 🎉
            </span>
          ) : isTie ? (
            <span className="text-amber-600">Honorable Science Tie! 🤝</span>
          ) : (
            <span className="text-indigo-600">AI Challenger Wins! 🤖</span>
          )}
        </h2>

        {/* Big Score Displays */}
        <div className="flex items-center justify-center gap-8 mt-6">
          <div className="text-center">
            <div className="text-xs uppercase font-extrabold tracking-widest text-blue-600">
              Student Score
            </div>
            <div className="text-5xl sm:text-6xl font-black text-blue-900 font-mono mt-1">
              {stats.studentScore}
            </div>
          </div>

          <div className="text-2xl font-bold text-slate-300">VS</div>

          <div className="text-center">
            <div className="text-xs uppercase font-extrabold tracking-widest text-indigo-600">
              AI Score
            </div>
            <div className="text-5xl sm:text-6xl font-black text-indigo-900 font-mono mt-1">
              {stats.aiScore}
            </div>
          </div>
        </div>

        {/* Prominent PDF Download Button in Hero Header */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleDownloadPdf}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all transform active:scale-95"
          >
            <FileDown className="w-5 h-5" />
            <span>Download PDF Match Scorecard</span>
          </button>
        </div>
      </div>

      {/* Word Count Comparison Section */}
      <div className="bg-white border border-blue-100 rounded-3xl p-6 mb-8 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          Word Count & Vocabulary Performance Comparison
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Words */}
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className="flex items-center gap-1">
                <Hash className="w-3.5 h-3.5 text-blue-600" /> Total Words Typed
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-blue-700 block font-bold">Student</span>
                <span className="text-2xl font-black font-mono text-blue-900">
                  {stats.studentWordCount}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-indigo-700 block font-bold">AI</span>
                <span className="text-2xl font-black font-mono text-indigo-900">
                  {stats.aiWordCount}
                </span>
              </div>
            </div>
          </div>

          {/* Total Letters */}
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className="flex items-center gap-1">
                <Type className="w-3.5 h-3.5 text-blue-600" /> Total Letters
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-blue-700 block font-bold">Student</span>
                <span className="text-2xl font-black font-mono text-slate-800">
                  {stats.studentTotalLetters}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-indigo-700 block font-bold">AI</span>
                <span className="text-2xl font-black font-mono text-slate-800">
                  {stats.aiTotalLetters}
                </span>
              </div>
            </div>
          </div>

          {/* Average Word Length */}
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> Avg Word Length
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-blue-700 block font-bold">Student</span>
                <span className="text-2xl font-black font-mono text-slate-800">
                  {stats.studentWordCount > 0
                    ? (stats.studentTotalLetters / stats.studentWordCount).toFixed(1)
                    : 0}{" "}
                  <span className="text-xs font-normal text-slate-400">chars</span>
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-indigo-700 block font-bold">AI</span>
                <span className="text-2xl font-black font-mono text-slate-800">
                  {stats.aiWordCount > 0
                    ? (stats.aiTotalLetters / stats.aiWordCount).toFixed(1)
                    : 0}{" "}
                  <span className="text-xs font-normal text-slate-400">chars</span>
                </span>
              </div>
            </div>
          </div>

          {/* Longest Words */}
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-blue-600" /> Longest Terms
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-xs">
                <span className="text-blue-700 font-bold">Student: </span>
                <span className="font-mono font-bold text-slate-800">
                  {stats.longestStudentWord || "N/A"}
                </span>
              </div>
              <div className="text-xs">
                <span className="text-indigo-700 font-bold">AI: </span>
                <span className="font-mono font-bold text-slate-800">
                  {stats.longestAiWord || "N/A"}
                </span>
              </div>
            </div>
            {stats.strikes > 0 && (
              <div className="mt-2 text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 flex items-center justify-between">
                <span>Recorded Strikes:</span>
                <span>{stats.strikes}/3</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Vocabulary Glossary & Match Log */}
      <div className="bg-white border border-blue-100 rounded-3xl p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Match Vocabulary Glossary ({wordHistory.length} Terms)
          </h3>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin">
          {wordHistory.map((entry, idx) => {
            const isStudent = entry.playedBy === "student";

            return (
              <div
                key={entry.id || idx}
                className={`p-3.5 rounded-2xl border ${
                  isStudent
                    ? "bg-blue-50/60 border-blue-200"
                    : "bg-indigo-50/60 border-indigo-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                      isStudent
                        ? "bg-blue-200 text-blue-900"
                        : "bg-indigo-200 text-indigo-900"
                    }`}
                  >
                    {isStudent ? "Student" : "AI"}
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-700">
                    +{entry.score} pts
                  </span>
                </div>
                <h4 className="text-base font-bold font-mono text-slate-900">{entry.word}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {entry.definition}
                </p>
                <p className="text-[11px] text-blue-900 mt-1 font-medium bg-white/80 px-2 py-0.5 rounded border border-blue-100 flex items-start gap-1">
                  <span>📜</span>
                  <span><strong className="font-bold text-blue-950">Origin / Etymology:</strong> {entry.etymology || getEtymologyFallback(entry.word, topic)}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onRestartSameTopic}
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-sm flex items-center justify-center gap-2 border border-blue-200 transition-colors"
        >
          <RotateCcw className="w-4 h-4 text-blue-600" />
          <span>Rematch ({topic})</span>
        </button>

        <button
          onClick={onChangeTopic}
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Choose New Topic</span>
        </button>
      </div>
    </div>
  );
};

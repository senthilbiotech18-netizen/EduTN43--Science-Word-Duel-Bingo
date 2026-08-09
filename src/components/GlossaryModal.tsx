import React from "react";
import { WordEntry } from "../types";
import { BookOpen, X, Search, User, Bot, Zap } from "lucide-react";
import { getEtymologyFallback } from "../utils/etymologyHelper";

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: string;
  wordHistory: WordEntry[];
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({
  isOpen,
  onClose,
  topic,
  wordHistory,
}) => {
  const [search, setSearch] = React.useState("");

  if (!isOpen) return null;

  const filteredHistory = wordHistory.filter(
    (w) =>
      w.word.toLowerCase().includes(search.toLowerCase()) ||
      w.definition.toLowerCase().includes(search.toLowerCase()) ||
      (w.etymology && w.etymology.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-blue-100 rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-blue-100">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Match Glossary & Word Definitions
              </h3>
              <p className="text-xs text-slate-500">
                Topic: <span className="text-slate-800 font-bold">{topic}</span> ({wordHistory.length} words played)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="my-4 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search word or definition..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 shadow-inner"
          />
        </div>

        {/* Glossary List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
          {filteredHistory.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs font-medium">
              No matching vocabulary entries found.
            </div>
          ) : (
            filteredHistory.map((entry, idx) => {
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
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 ${
                        isStudent
                          ? "bg-blue-200 text-blue-900"
                          : "bg-indigo-200 text-indigo-900"
                      }`}
                    >
                      {isStudent ? (
                        <>
                          <User className="w-3 h-3" /> Student
                        </>
                      ) : (
                        <>
                          <Bot className="w-3 h-3" /> AI
                        </>
                      )}
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-700">
                      +{entry.score} pts
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-mono text-slate-900">
                    {entry.word}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {entry.definition}
                  </p>
                  <p className="text-[11px] text-blue-900 mt-1 font-medium bg-white/80 px-2 py-0.5 rounded border border-blue-100 flex items-start gap-1">
                    <span>📜</span>
                    <span><strong className="font-bold text-blue-950">Origin / Etymology:</strong> {entry.etymology || getEtymologyFallback(entry.word, topic)}</span>
                  </p>
                  {entry.funFact && (
                    <p className="text-[11px] text-indigo-900 mt-1 italic font-medium">
                      💡 {entry.funFact}
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-blue-100 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs font-bold border border-blue-200 transition-colors"
          >
            Close Glossary
          </button>
        </div>
      </div>
    </div>
  );
};

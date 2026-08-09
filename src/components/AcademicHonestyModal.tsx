import React from "react";
import { ShieldAlert, AlertTriangle, RefreshCw, XCircle } from "lucide-react";

interface AcademicHonestyModalProps {
  isOpen: boolean;
  onAcknowledgeAndRestart: () => void;
}

export const AcademicHonestyModal: React.FC<AcademicHonestyModalProps> = ({
  isOpen,
  onAcknowledgeAndRestart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-2 border-rose-300 text-center relative animate-bounce-short">
        <div className="w-16 h-16 rounded-3xl bg-rose-100 text-rose-600 border-2 border-rose-200 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-rose-500/20">
          <ShieldAlert className="w-9 h-9 animate-pulse" />
        </div>

        <h2 className="text-xl font-black text-rose-900 mb-1">
          Academic Honesty Violation!
        </h2>
        <p className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-4">
          Tab Switch / Focus Loss Detected
        </p>

        <div className="p-4 bg-rose-50 rounded-2xl border border-rose-200 text-left text-xs text-rose-900 space-y-2 mb-6">
          <div className="flex items-center gap-1.5 font-bold text-rose-950">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>Game Progress Reset</span>
          </div>
          <p className="leading-relaxed">
            You left or switched away from the game tab while a battle was active. In <strong>Academic Honesty Mode</strong>, leaving the screen resets the match to prevent web searching and copy-pasting answers.
          </p>
          <p className="text-[11px] font-semibold text-rose-800 bg-white/80 p-2 rounded-lg border border-rose-200">
            💡 <em>Rule: Keep the game tab active throughout the entire match to maintain academic integrity!</em>
          </p>
        </div>

        <button
          onClick={onAcknowledgeAndRestart}
          className="w-full py-3 px-6 text-sm font-black text-white bg-rose-600 hover:bg-rose-700 active:bg-rose-800 rounded-2xl shadow-lg shadow-rose-500/30 transition-all flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" /> Start New Fresh Match
        </button>
      </div>
    </div>
  );
};

import React from "react";
import { BingoTile } from "../types";
import { Grid, Check, Bot, Sparkles } from "lucide-react";

interface BingoCardProps {
  tiles: BingoTile[];
  studentBingos: number;
  aiBingos: number;
  onSelectTileHint?: (tile: BingoTile) => void;
}

export const BingoCard: React.FC<BingoCardProps> = ({
  tiles,
  studentBingos,
  aiBingos,
  onSelectTileHint,
}) => {
  return (
    <div className="bg-white border border-blue-100/80 rounded-3xl p-4 sm:p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Grid className="w-5 h-5 text-indigo-600" />
          <h3 className="text-sm font-bold text-slate-900">5x5 Science Bingo Grid</h3>
        </div>
        <div className="flex items-center gap-3 text-xs font-bold">
          <span className="text-blue-700 flex items-center gap-1">
            Student: <strong className="font-mono text-sm text-blue-900">{studentBingos}</strong> Bingos
          </span>
          <span className="text-indigo-700 flex items-center gap-1">
            AI: <strong className="font-mono text-sm text-indigo-900">{aiBingos}</strong> Bingos
          </span>
        </div>
      </div>

      <p className="text-xs text-slate-500 mb-3">
        Enter science terms matching grid concepts to claim tiles. Complete rows or columns for +50 Bonus Points!
      </p>

      {/* 5x5 Grid */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {tiles.slice(0, 25).map((tile, idx) => {
          const isStudent = tile.claimedBy === "student";
          const isAI = tile.claimedBy === "ai";

          return (
            <button
              key={tile.id || `tile-${idx}`}
              onClick={() => onSelectTileHint && onSelectTileHint(tile)}
              className={`p-1.5 sm:p-2.5 rounded-2xl border text-left flex flex-col justify-between h-20 sm:h-24 transition-all relative overflow-hidden ${
                isStudent
                  ? "bg-blue-600 border-blue-700 text-white shadow-md shadow-blue-500/20"
                  : isAI
                  ? "bg-indigo-600 border-indigo-700 text-white shadow-md shadow-indigo-500/20"
                  : "bg-slate-50 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 text-slate-800"
              }`}
              title={`${tile.targetTermOrCategory}: ${tile.description}`}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`text-[10px] sm:text-xs font-bold line-clamp-1 ${
                    isStudent || isAI ? "text-white" : "text-slate-800"
                  }`}
                >
                  {tile.label}
                </span>
                {isStudent && (
                  <span className="p-0.5 rounded bg-white/20 text-white">
                    <Check className="w-3 h-3" />
                  </span>
                )}
                {isAI && (
                  <span className="p-0.5 rounded bg-white/20 text-white">
                    <Bot className="w-3 h-3" />
                  </span>
                )}
              </div>

              <div className="mt-1">
                <p
                  className={`text-[9px] sm:text-[10px] line-clamp-2 leading-tight ${
                    isStudent || isAI ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {tile.claimedWord ? (
                    <span className="font-mono font-bold text-white">
                      "{tile.claimedWord}"
                    </span>
                  ) : (
                    tile.targetTermOrCategory
                  )}
                </p>
              </div>

              {/* Status Indicator Bar */}
              <div
                className={`h-1 w-full rounded-full mt-1 ${
                  isStudent ? "bg-blue-300" : isAI ? "bg-indigo-300" : "bg-slate-200"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

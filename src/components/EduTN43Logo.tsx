import React from "react";

interface EduTN43LogoProps {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "full" | "icon" | "badge";
  theme?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
}

export const EduTN43Logo: React.FC<EduTN43LogoProps> = ({
  size = "md",
  variant = "full",
  theme = "light",
  className = "",
  showTagline = false,
}) => {
  // Dimensions
  const sizeClasses = {
    xs: { icon: "w-6 h-6", text: "text-sm", badge: "text-[10px] px-1.5 py-0.5", gap: "gap-1.5" },
    sm: { icon: "w-8 h-8", text: "text-base", badge: "text-xs px-2 py-0.5", gap: "gap-2" },
    md: { icon: "w-10 h-10", text: "text-xl", badge: "text-xs px-2.5 py-0.5", gap: "gap-2.5" },
    lg: { icon: "w-14 h-14", text: "text-3xl", badge: "text-sm px-3 py-1", gap: "gap-3" },
  }[size];

  const textColor = theme === "dark" ? "text-white" : "text-slate-900";
  const taglineColor = theme === "dark" ? "text-blue-200" : "text-slate-500";

  return (
    <div className={`inline-flex items-center ${sizeClasses.gap} ${className}`}>
      {/* Icon Emblem Badge */}
      <div className={`relative ${sizeClasses.icon} rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0 overflow-hidden group`}>
        {/* Subtle orbit ring animation inside badge */}
        <div className="absolute inset-0 opacity-30 flex items-center justify-center">
          <div className="w-full h-2/3 border border-white rounded-[50%] rotate-45 transform" />
          <div className="w-full h-2/3 border border-white rounded-[50%] -rotate-45 transform absolute" />
        </div>

        {/* Cap + Atom Crest */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-1/2 h-1/2 text-white z-10 relative"
        >
          {/* Cap path */}
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
        </svg>

        {/* Cyan accent dot */}
        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-cyan-400 ring-2 ring-blue-700" />
      </div>

      {/* Text Part */}
      {variant !== "icon" && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 font-black tracking-tight leading-none">
            <span className={`${sizeClasses.text} ${textColor} font-black tracking-tight`}>
              Edu
            </span>
            <span className={`rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold uppercase tracking-wider ${sizeClasses.badge} shadow-sm shadow-cyan-500/20`}>
              TN43
            </span>
          </div>
          {showTagline && (
            <span className={`text-[10px] font-bold uppercase tracking-widest ${taglineColor} mt-1`}>
              Learning Tech
            </span>
          )}
        </div>
      )}
    </div>
  );
};

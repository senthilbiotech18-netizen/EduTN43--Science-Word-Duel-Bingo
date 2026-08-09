import React, { useState, useEffect } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface AITypingWordProps {
  fullWord: string;
  speedMs?: number;
  soundEnabled?: boolean;
  onComplete?: () => void;
  className?: string;
}

export const AITypingWord: React.FC<AITypingWordProps> = ({
  fullWord,
  speedMs = 90,
  soundEnabled = true,
  onComplete,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Play subtle synth typing click sound using Web Audio API
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(600 + Math.random() * 200, ctx.currentTime);
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // ignore audio context restrictions
    }
  };

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);

    if (!fullWord) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < fullWord.length) {
        setDisplayedText((prev) => prev + fullWord[index]);
        playClickSound();
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        if (onComplete) {
          onComplete();
        }
      }
    }, speedMs);

    return () => clearInterval(interval);
  }, [fullWord, speedMs]);

  return (
    <div className={`inline-flex items-center gap-2 font-mono ${className}`}>
      <span className="tracking-wider font-black text-blue-700 text-2xl sm:text-3xl">
        {displayedText}
      </span>
      {isTyping ? (
        <span className="w-2 h-7 bg-blue-600 animate-pulse rounded-sm" />
      ) : (
        <CheckCircle2 className="w-5 h-5 text-blue-600 animate-bounce" />
      )}
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Download, Monitor, CheckCircle2 } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export const InstallPwaButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already running in standalone display mode (installed)
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // If no prompt event yet, show instructions modal or alert
      alert(
        "To install on Chrome Desktop:\n1. Click the Install icon in your browser address bar (top right) or the Chrome menu ⋮\n2. Select 'Install Science Word Duel & Bingo'\n3. Launch as a standalone desktop app!"
      );
    }
  };

  if (isInstalled) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-teal-50 text-teal-800 border border-teal-200" title="Desktop App Installed">
        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
        <span className="hidden md:inline">Desktop App</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleInstallClick}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-extrabold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-sm shadow-blue-500/20 transition-all transform active:scale-95"
      title="Install as Chrome Desktop App"
    >
      <Download className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">Install Desktop App</span>
    </button>
  );
};

import React, { useState } from "react";
import { Key, X, ExternalLink, Check, Sparkles, ShieldCheck, AlertCircle } from "lucide-react";

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  apiKey: string;
  onSaveApiKey: (key: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  apiKey,
  onSaveApiKey,
}) => {
  const [inputKey, setInputKey] = useState(apiKey);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveApiKey(inputKey.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleClear = () => {
    setInputKey("");
    onSaveApiKey("");
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-blue-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shadow-sm">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900">Personal Gemini API Key</h2>
            <p className="text-xs text-slate-500">
              Use your own key for ultra-fast, unlimited science word validation
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Gemini API Key
            </label>
            <input
              type="password"
              value={inputKey}
              onChange={(e) => setInputKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm font-mono outline-none transition-all"
            />
            <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Keys are stored locally in your browser and never shared with third parties.</span>
            </p>
          </div>

          <div className="p-3 bg-amber-50/80 rounded-2xl border border-amber-200/80 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-amber-950">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>How to get a Free Gemini API Key:</span>
            </div>
            <ol className="list-decimal list-inside space-y-1 text-amber-900/90 leading-relaxed text-[11px]">
              <li>Visit Google AI Studio key generator page.</li>
              <li>Sign in with your Google account and click <strong>Create API key</strong>.</li>
              <li>Copy your key starting with <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">AIza...</code> and paste it above!</li>
            </ol>
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950 underline mt-1"
            >
              Get Free Key at Google AI Studio <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {savedSuccess && (
            <div className="p-2.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 animate-bounce">
              <Check className="w-4 h-4 text-emerald-600" /> API Key saved successfully!
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            {apiKey && (
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Clear Custom Key
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5"
            >
              <Key className="w-3.5 h-3.5" /> Save API Key
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

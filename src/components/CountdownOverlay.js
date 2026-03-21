"use client";

import { useState, useEffect, useCallback } from "react";

export default function CountdownOverlay({ duration = 10, onComplete }) {
  const [remaining, setRemaining] = useState(duration);

  useEffect(() => {
    if (remaining <= 0) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(timer);
  }, [remaining, onComplete]);

  const progress = ((duration - remaining) / duration) * 100;
  const circumference = 2 * Math.PI * 54;
  const strokeOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" style={{ animation: "fadeIn 0.3s ease" }}>
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 max-w-sm w-full mx-4" style={{ animation: "scaleIn 0.3s ease" }}>
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="8" />
            <circle
              cx="60" cy="60" r="54" fill="none"
              stroke="url(#countdownGrad)" strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
            <defs>
              <linearGradient id="countdownGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums">{remaining}</span>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">sec</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
            {remaining > 3 ? "Analyzing your text…" : "Almost ready!"}
          </p>
        </div>

        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
            style={{ width: `${progress}%`, transition: "width 1s linear" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </div>
  );
}

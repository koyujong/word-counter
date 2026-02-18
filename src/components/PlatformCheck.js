"use client";

/**
 * PlatformCheck.js - 플랫폼별 글자수 실시간 체크
 *
 * 주요 SNS·플랫폼의 글자 수 제한에 대해
 * 현재 텍스트가 초과하는지 실시간으로 ✅/❌ 표시합니다.
 */

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// 플랫폼 데이터: 이름, 제한, 기준(chars/words), 아이콘 색상
const PLATFORMS = [
    { id: "twitter", name: "Twitter / X", limit: 280, type: "chars", color: "bg-sky-500" },
    { id: "instagram", name: "Instagram", limit: 2200, type: "chars", color: "bg-pink-500" },
    { id: "linkedin", name: "LinkedIn", limit: 3000, type: "chars", color: "bg-blue-600" },
    { id: "youtube", name: "YouTube Title", limit: 100, type: "chars", color: "bg-red-500" },
    { id: "tiktok", name: "TikTok Caption", limit: 2200, type: "chars", color: "bg-gray-800 dark:bg-gray-600" },
    { id: "meta-desc", name: "SEO Meta Desc", limit: 160, type: "chars", color: "bg-emerald-500" },
    { id: "seo-title", name: "SEO Title", limit: 60, type: "chars", color: "bg-amber-500" },
    { id: "facebook", name: "Facebook", limit: 63206, type: "chars", color: "bg-blue-500" },
];

export default function PlatformCheck({ stats }) {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-5">
            {/* 토글 버튼 */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn-action inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.platformTitle || "Platform Check"}
                </button>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    {t.platformDesc}
                </p>
            </div>

            {/* 체크 패널 */}
            {isOpen && (
                <div className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                        {PLATFORMS.map((platform) => {
                            const currentCount = platform.type === "chars"
                                ? stats.characters
                                : stats.words;
                            const isOver = currentCount > platform.limit;
                            const percentage = Math.min((currentCount / platform.limit) * 100, 100);

                            return (
                                <div
                                    key={platform.id}
                                    className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${isOver
                                        ? "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10"
                                        : "border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-750"
                                        }`}
                                >
                                    {/* 플랫폼 색상 도트 */}
                                    <div className={`w-2.5 h-2.5 rounded-full ${platform.color} flex-shrink-0`} />

                                    {/* 플랫폼 이름 */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">
                                                {platform.name}
                                            </span>
                                            <span className={`text-xs font-bold ${isOver ? "text-red-500" : "text-gray-500 dark:text-gray-400"}`}>
                                                {currentCount.toLocaleString()}/{platform.limit.toLocaleString()}
                                            </span>
                                        </div>
                                        {/* 미니 프로그레스바 */}
                                        <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-300 ${isOver ? "bg-red-500" : percentage >= 80 ? "bg-amber-500" : "bg-emerald-500"
                                                    }`}
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* 상태 아이콘 */}
                                    <span className="text-base flex-shrink-0">
                                        {isOver ? "❌" : "✅"}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

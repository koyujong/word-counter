"use client";

/**
 * SeoKeywordAnalysis.js - 타겟 키워드 밀도 분석
 *
 * 사용자가 입력한 특정 키워드의 등장 횟수와 
 * 전체 단어 수 대비 밀도(%)를 계산하여 시각적으로 보여줍니다.
 */

import { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function SeoKeywordAnalysis({ text, stats }) {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [targetKeyword, setTargetKeyword] = useState("");

    // 키워드 분석 로직
    const analysis = useMemo(() => {
        if (!targetKeyword.trim() || !text) {
            return { count: 0, density: 0, status: "empty" };
        }

        const keyword = targetKeyword.trim().toLowerCase();
        const content = text.toLowerCase();

        // 정규식을 사용해 키워드 단순 매칭 (부분 매칭 포함)
        // 한국어와 같은 교착어 분석을 위해 단어 단위(\b)가 아닌 전체 문자열 검색 사용
        const regex = new RegExp(keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
        const matches = content.match(regex);
        const count = matches ? matches.length : 0;

        // 기준이 되는 전체 단어 수 (글자수 툴의 Word count 기준으로 계산하는 것이 일반적)
        const totalWords = stats.words || 1;

        // 밀도 계산 (%)
        const density = (count / totalWords) * 100;

        // 밀도 상태 판별 (1~3%가 SEO에 이상적이라 가정)
        let status = "low";
        if (density >= 1 && density <= 3) status = "good";
        if (density > 3) status = "high";
        if (count === 0) status = "empty";

        return { count, density, status };
    }, [text, targetKeyword, stats.words]);

    // 상태에 따른 UI 색상
    const getStatusColor = (status) => {
        switch (status) {
            case "good": return "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800";
            case "high": return "text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/30 border-rose-200 dark:border-rose-800";
            case "low": return "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800";
            default: return "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700";
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case "good": return t.seoDensityGood || "Optimal";
            case "high": return t.seoDensityHigh || "Too High";
            case "low": return t.seoDensityLow || "Too Low";
            default: return "";
        }
    };

    return (
        <div className="mb-5">
            {/* 토글 버튼 */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn-action inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-700 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-200 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    {t.seoDensityTitle || "SEO Keyword Density"}
                </button>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    {t.seoDensityDesc || "Target 1-3% density for optimal SEO performance."}
                </p>
            </div>

            {/* 메인 패널 */}
            {isOpen && (
                <div className="p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                        <input
                            type="text"
                            value={targetKeyword}
                            onChange={(e) => setTargetKeyword(e.target.value)}
                            placeholder={t.seoDensityInput || "Enter target keyword..."}
                            className="w-full sm:w-64 px-4 py-2 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 focus:border-emerald-400 dark:focus:border-emerald-500 outline-none text-gray-800 dark:text-gray-100 transition-colors"
                        />

                        {analysis.status !== "empty" && (
                            <div className={`px-3 py-1.5 rounded-md text-xs font-bold border ${getStatusColor(analysis.status)}`}>
                                {getStatusText(analysis.status)}
                            </div>
                        )}
                    </div>

                    {!targetKeyword.trim() ? (
                        <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-2">
                            {t.seoDensityEmpty || "Enter a keyword above to analyze density."}
                        </p>
                    ) : (
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{t.seoDensityResult || "Density:"}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-3xl font-black tracking-tighter ${analysis.status === 'good' ? 'text-emerald-500' :
                                                analysis.status === 'high' ? 'text-rose-500' : 'text-amber-500'
                                            }`}>
                                            {analysis.density.toFixed(1)}
                                        </span>
                                        <span className="text-sm font-bold text-gray-400">%</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1">{t.seoDensityCount || "Count:"}</p>
                                    <span className="text-xl font-bold text-gray-700 dark:text-gray-200">
                                        {analysis.count}
                                    </span>
                                </div>
                            </div>

                            {/* Visual Progress Bar (Target Zone 1% ~ 3%) */}
                            <div className="relative h-3 mt-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                {/* Optimal Zone Indicator (background) */}
                                <div className="absolute top-0 bottom-0 left-[2%] right-[94%] bg-emerald-100 dark:bg-emerald-900/40 z-0"></div>

                                <div
                                    className={`absolute top-0 bottom-0 left-0 rounded-full z-10 transition-all duration-500 ${analysis.status === 'good' ? 'bg-emerald-500' :
                                            analysis.status === 'high' ? 'bg-rose-500' : 'bg-amber-500'
                                        }`}
                                    style={{ width: `${Math.min(analysis.density * 20, 100)}%` }} // 시각화를 위해 너비 조정 (5%가 화면 끝이 되도록)
                                ></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-medium">
                                <span>0%</span>
                                <span className="text-emerald-500 ml-6">1% ~ 3% Target</span>
                                <span>5%+</span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

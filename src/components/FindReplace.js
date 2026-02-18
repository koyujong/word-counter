"use client";

/**
 * FindReplace.js - 찾기 & 바꾸기
 *
 * 텍스트 내에서 특정 문자열을 검색하고 일괄 치환합니다.
 * - 기본 검색 (문자열 매칭)
 * - 대소문자 구분 옵션
 * - 정규표현식 지원 옵션
 * - 일치 항목 수 표시
 */

import { useState, useMemo, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FindReplace({ text, onTextChange }) {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [findText, setFindText] = useState("");
    const [replaceText, setReplaceText] = useState("");
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [useRegex, setUseRegex] = useState(false);

    // 일치 항목 수 계산
    const matchCount = useMemo(() => {
        if (!findText || !text) return 0;

        try {
            const flags = caseSensitive ? "g" : "gi";
            const pattern = useRegex ? findText : findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regex = new RegExp(pattern, flags);
            const matches = text.match(regex);
            return matches ? matches.length : 0;
        } catch {
            return 0; // 잘못된 정규식일 때
        }
    }, [text, findText, caseSensitive, useRegex]);

    // 전체 바꾸기
    const handleReplaceAll = useCallback(() => {
        if (!findText || !text) return;

        try {
            const flags = caseSensitive ? "g" : "gi";
            const pattern = useRegex ? findText : findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regex = new RegExp(pattern, flags);
            const newText = text.replace(regex, replaceText);
            onTextChange(newText);
        } catch {
            // 잘못된 정규식 — 무시
        }
    }, [text, findText, replaceText, caseSensitive, useRegex, onTextChange]);

    return (
        <div className="mb-5">
            {/* 토글 버튼 */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn-action inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {t.findReplaceTitle || "Find & Replace"}
                </button>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    {t.findReplaceDesc}
                </p>
            </div>

            {/* 패널 */}
            {isOpen && (
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3">
                    {/* 찾기 입력 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:w-12 flex-shrink-0">
                            {t.findLabel || "Find"}
                        </label>
                        <input
                            type="text"
                            value={findText}
                            onChange={(e) => setFindText(e.target.value)}
                            placeholder={t.findPlaceholder || "Search text..."}
                            className="flex-1 px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                        />
                        {/* 매칭 수 뱃지 */}
                        {findText && (
                            <span className={`text-xs font-bold px-2 py-1 rounded-md ${matchCount > 0 ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" : "bg-gray-100 dark:bg-gray-700 text-gray-400"}`}>
                                {matchCount}
                            </span>
                        )}
                    </div>

                    {/* 바꾸기 입력 */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:w-12 flex-shrink-0">
                            {t.replaceLabel || "Replace"}
                        </label>
                        <input
                            type="text"
                            value={replaceText}
                            onChange={(e) => setReplaceText(e.target.value)}
                            placeholder={t.replacePlaceholder || "Replace with..."}
                            className="flex-1 px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                        />
                    </div>

                    {/* 옵션 + 실행 */}
                    <div className="flex flex-wrap items-center gap-3">
                        {/* 대소문자 구분 토글 */}
                        <label className="inline-flex items-center gap-1.5 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={caseSensitive}
                                onChange={(e) => setCaseSensitive(e.target.checked)}
                                className="w-3.5 h-3.5 text-indigo-600 rounded border-gray-300 dark:border-gray-600"
                            />
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {t.findCaseSensitive || "Case sensitive"}
                            </span>
                        </label>

                        {/* 정규식 토글 */}
                        <label className="inline-flex items-center gap-1.5 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={useRegex}
                                onChange={(e) => setUseRegex(e.target.checked)}
                                className="w-3.5 h-3.5 text-indigo-600 rounded border-gray-300 dark:border-gray-600"
                            />
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {t.findRegex || "Regex"}
                            </span>
                        </label>

                        {/* 전체 바꾸기 버튼 */}
                        <button
                            onClick={handleReplaceAll}
                            disabled={!findText || matchCount === 0}
                            className="ml-auto px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        >
                            {t.replaceAllBtn || "Replace All"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

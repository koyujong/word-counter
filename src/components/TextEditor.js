"use client";

/**
 * TextEditor.js - 대형 텍스트 입력 영역 + 액션 버튼
 *
 * - 화면의 50% 이상을 차지하는 큰 textarea
 * - onChange 이벤트로 실시간 텍스트 업데이트
 * - 전체 지우기 버튼 (쓰레기통 아이콘)
 * - 복사하기 버튼 (클립보드 아이콘)
 */

import { useState, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TextEditor({ text, onTextChange, stats }) {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false); // 복사 완료 상태

    // 전체 지우기 핸들러
    const handleClear = useCallback(() => {
        onTextChange("");
    }, [onTextChange]);

    // 클립보드에 복사 핸들러
    const handleCopy = useCallback(async () => {
        if (!text) return;

        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            // 2초 후 "복사됨!" 표시 해제
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // 클립보드 API 실패 시 대안 (fallback)
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }, [text]);

    // 통계 포함 복사 핸들러
    const handleCopyWithStats = useCallback(async () => {
        if (!text || !stats) return;

        const statsText = `\n\n---\n📊 Words: ${stats.words} | Characters: ${stats.characters} | Sentences: ${stats.sentences} | Reading Time: ${stats.readingTime.minutes}m ${stats.readingTime.seconds}s`;
        const fullText = text + statsText;

        try {
            await navigator.clipboard.writeText(fullText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = fullText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    }, [text, stats]);

    return (
        <div className="w-full">
            {/* 액션 버튼 바 */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex flex-wrap items-center gap-2">
                    {/* 전체 지우기 버튼 */}
                    <button
                        id="btn-clear"
                        onClick={handleClear}
                        disabled={!text}
                        className="btn-action inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 hover:border-red-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        {/* 쓰레기통 아이콘 */}
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                        <span className="hidden sm:inline">{t.clearBtn}</span>
                    </button>

                    {/* 복사하기 버튼 */}
                    <button
                        id="btn-copy"
                        onClick={handleCopy}
                        disabled={!text}
                        className={`btn-action inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${copied
                            ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800"
                            : "text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 hover:border-indigo-200"
                            } disabled:opacity-40 disabled:cursor-not-allowed`}
                    >
                        {copied ? (
                            /* 체크 아이콘 (복사 완료) */
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        ) : (
                            /* 클립보드 아이콘 */
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                        )}
                        <span className="hidden sm:inline">{copied ? t.copiedBtn : t.copyBtn}</span>
                    </button>

                    {/* 통계 포함 복사 버튼 */}
                    <button
                        id="btn-copy-stats"
                        onClick={handleCopyWithStats}
                        disabled={!text}
                        className="btn-action inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 hover:border-violet-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        title={t.copyWithStatsBtn}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="hidden sm:inline">{t.copyWithStatsBtn || "Copy with Stats"}</span>
                    </button>
                </div>
            </div>

            {/* 대형 텍스트 입력 영역 */}
            <textarea
                id="text-input"
                value={text}
                onChange={(e) => onTextChange(e.target.value)}
                placeholder={t.placeholder}
                className="w-full min-h-[35vh] sm:min-h-[50vh] p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl resize-y shadow-sm focus:border-indigo-400 transition-colors placeholder:text-gray-400 dark:placeholder:text-gray-600"
                spellCheck={false}
                autoFocus
            />
        </div>
    );
}

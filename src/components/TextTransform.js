"use client";

/**
 * TextTransform.js - 텍스트 변환 도구 모음
 *
 * 사용자가 텍스트를 한 클릭으로 변환할 수 있는 버튼들:
 * - UPPERCASE (대문자)
 * - lowercase (소문자)
 * - Title Case (첫글자 대문자)
 * - Remove Line Breaks (줄바꿈 제거)
 * - Remove Extra Spaces (중복 공백 제거)
 */

import { useLanguage } from "@/context/LanguageContext";

export default function TextTransform({ text, onTextChange }) {
    const { t } = useLanguage();

    // 변환 함수들
    const transforms = [
        {
            id: "uppercase",
            label: t.transformUpper || "UPPER",
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            ),
            action: () => onTextChange(text.toUpperCase()),
        },
        {
            id: "lowercase",
            label: t.transformLower || "lower",
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            ),
            action: () => onTextChange(text.toLowerCase()),
        },
        {
            id: "titlecase",
            label: t.transformTitle || "Title",
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8" />
                </svg>
            ),
            action: () => {
                const titleCased = text.replace(
                    /\b\w+/g,
                    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                );
                onTextChange(titleCased);
            },
        },
        {
            id: "remove-linebreaks",
            label: t.transformRemoveBreaks || "No Breaks",
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            ),
            action: () => onTextChange(text.replace(/\n/g, " ")),
        },
        {
            id: "remove-spaces",
            label: t.transformRemoveSpaces || "Trim",
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ),
            action: () => onTextChange(text.replace(/  +/g, " ").trim()),
        },
    ];

    return (
        <div>
            <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500 mr-1">
                    {t.transformLabel || "Transform:"}
                </span>
                {transforms.map((tf) => (
                    <button
                        key={tf.id}
                        onClick={tf.action}
                        disabled={!text}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-600 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        title={tf.label}
                    >
                        {tf.icon}
                        <span className="hidden sm:inline">{tf.label}</span>
                    </button>
                ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1.5">{t.transformDesc}</p>
        </div>
    );
}

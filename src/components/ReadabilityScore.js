"use client";

/**
 * ReadabilityScore.js - 가독성 점수 (Readability)
 *
 * Flesch Reading Ease 공식을 기반으로 텍스트의 가독성을 측정합니다.
 * 0~100점 척도로 "매우 쉬움" ~ "매우 어려움" 등급을 표시합니다.
 *
 * 공식: 206.835 - 1.015 × (총 단어수 / 총 문장수) - 84.6 × (총 음절수 / 총 단어수)
 * → CJK 언어에는 정확도가 떨어지지만 참고용으로 유용합니다.
 */

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// 음절 수 추정 (영어 기준)
function countSyllables(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, "");
    if (word.length <= 2) return 1;

    // 기본 규칙: 모음 그룹 카운트
    let count = word.match(/[aeiouy]+/g)?.length || 1;

    // 보정: 끝의 'e'는 보통 무음
    if (word.endsWith("e") && count > 1) count--;
    // 보정: -le 끝은 음절 추가
    if (word.endsWith("le") && word.length > 2 && !/[aeiouy]/.test(word[word.length - 3])) count++;

    return Math.max(1, count);
}

// 가독성 등급 정의
function getReadabilityLevel(score, t) {
    if (score >= 90) return { label: t.readabilityVeryEasy || "Very Easy", color: "text-emerald-500", bg: "bg-emerald-500" };
    if (score >= 70) return { label: t.readabilityEasy || "Easy", color: "text-green-500", bg: "bg-green-500" };
    if (score >= 50) return { label: t.readabilityNormal || "Average", color: "text-amber-500", bg: "bg-amber-500" };
    if (score >= 30) return { label: t.readabilityHard || "Hard", color: "text-orange-500", bg: "bg-orange-500" };
    return { label: t.readabilityVeryHard || "Very Hard", color: "text-red-500", bg: "bg-red-500" };
}

export default function ReadabilityScore({ text, stats }) {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const readability = useMemo(() => {
        if (!text || stats.words < 3 || stats.sentences < 1) {
            return null;
        }

        // 영어 단어만 추출하여 음절 계산
        const englishWords = text.match(/[a-zA-Z]+/g) || [];
        const totalSyllables = englishWords.reduce((sum, w) => sum + countSyllables(w), 0);

        // CJK 문자가 포함되어 있는지 확인
        const hasCJK = /[\u3131-\uD79D\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(text);

        if (englishWords.length < 3 && !hasCJK) return null;

        // Flesch Reading Ease 계산
        const wordsPerSentence = stats.words / stats.sentences;
        const syllablesPerWord = englishWords.length > 0
            ? totalSyllables / englishWords.length
            : 1.5; // CJK 기본값

        const score = Math.max(0, Math.min(100,
            206.835 - (1.015 * wordsPerSentence) - (84.6 * syllablesPerWord)
        ));

        return {
            score: Math.round(score),
            wordsPerSentence: wordsPerSentence.toFixed(1),
            syllablesPerWord: syllablesPerWord.toFixed(2),
            hasCJK,
        };
    }, [text, stats]);

    const level = readability ? getReadabilityLevel(readability.score, t) : null;

    return (
        <div className="mb-5">
            {/* 토글 버튼 */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn-action inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t.readabilityTitle || "Readability"}
                </button>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    {t.readabilityDesc}
                </p>
            </div>

            {/* 점수 패널 */}
            {isOpen && (
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    {!readability ? (
                        <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-4">
                            {t.readabilityEmpty || "Need at least 3 words and 1 sentence to analyze"}
                        </p>
                    ) : (
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            {/* 점수 원형 */}
                            <div className="flex flex-col items-center">
                                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 ${level.color.replace("text-", "border-")} flex items-center justify-center`}>
                                    <span className={`text-xl sm:text-2xl font-bold ${level.color}`}>
                                        {readability.score}
                                    </span>
                                </div>
                                <span className={`text-sm font-semibold mt-2 ${level.color}`}>
                                    {level.label}
                                </span>
                            </div>

                            {/* 상세 지표 */}
                            <div className="flex-1 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">
                                        {t.readabilityWordsPerSentence || "Words/Sentence"}
                                    </span>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">
                                        {readability.wordsPerSentence}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">
                                        {t.readabilitySyllablesPerWord || "Syllables/Word"}
                                    </span>
                                    <span className="font-medium text-gray-700 dark:text-gray-300">
                                        {readability.syllablesPerWord}
                                    </span>
                                </div>

                                {/* 가독성 바 */}
                                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mt-2">
                                    <div
                                        className={`h-full ${level.bg} rounded-full transition-all duration-500`}
                                        style={{ width: `${readability.score}%` }}
                                    />
                                </div>

                                {/* CJK 경고 */}
                                {readability.hasCJK && (
                                    <p className="text-xs text-amber-500 mt-1">
                                        ⚠️ {t.readabilityCJKWarning || "Readability score is optimized for English. CJK results are approximate."}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

"use client";

/**
 * KeywordFrequency.js - 키워드 빈도 분석 (Top 10)
 *
 * 텍스트에서 가장 많이 사용된 단어를 추출하여
 * 수평 바 차트로 시각화합니다.
 * → 블로거, SEO 전문가에게 유용
 */

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// 불용어(stopwords) — 의미 없는 단어를 제외
const STOPWORDS = new Set([
    // 영어
    "the", "a", "an", "is", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did", "will", "would", "could",
    "should", "may", "might", "shall", "can", "need", "dare", "ought",
    "used", "to", "of", "in", "for", "on", "with", "at", "by", "from",
    "as", "into", "through", "during", "before", "after", "above", "below",
    "between", "out", "off", "over", "under", "again", "further", "then",
    "once", "here", "there", "when", "where", "why", "how", "all", "both",
    "each", "few", "more", "most", "other", "some", "such", "no", "nor",
    "not", "only", "own", "same", "so", "than", "too", "very", "just",
    "but", "and", "or", "if", "it", "its", "this", "that", "these", "those",
    "i", "me", "my", "we", "our", "you", "your", "he", "him", "his",
    "she", "her", "they", "them", "their", "what", "which", "who", "whom",
    // 한국어 조사/어미
    "은", "는", "이", "가", "을", "를", "에", "의", "도", "로", "와", "과",
    "하고", "이나", "나", "든지", "만", "까지", "부터", "에서", "으로",
    // 일본어 조사
    "の", "に", "は", "を", "た", "が", "で", "て", "と", "し", "れ", "さ",
    "ある", "いる", "も", "する", "から", "な", "こと", "として", "い",
    // 스페인어
    "el", "la", "los", "las", "un", "una", "de", "en", "y", "que",
    "es", "por", "con", "para", "se", "del", "al", "lo", "como",
]);

export default function KeywordFrequency({ text }) {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    // 단어 빈도 계산
    const keywords = useMemo(() => {
        if (!text || text.trim().length === 0) return [];

        // 단어 추출 (알파벳, 한글, 일본어, 중국어 포함)
        const words = text
            .toLowerCase()
            .match(/[\w\u3131-\uD79D\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]+/g);

        if (!words) return [];

        // 빈도 집계 (불용어 & 1글자 제외)
        const freq = {};
        words.forEach((word) => {
            if (word.length <= 1 || STOPWORDS.has(word)) return;
            freq[word] = (freq[word] || 0) + 1;
        });

        // 상위 10개 정렬
        return Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([word, count]) => ({ word, count }));
    }, [text]);

    const maxCount = keywords.length > 0 ? keywords[0].count : 0;

    // 바 색상 배열
    const BAR_COLORS = [
        "bg-indigo-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500", "bg-sky-500",
        "bg-violet-500", "bg-teal-500", "bg-orange-500", "bg-pink-500", "bg-cyan-500",
    ];

    return (
        <div className="mb-5">
            {/* 토글 버튼 */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn-action inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    {t.keywordTitle || "Keyword Frequency"}
                </button>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    {t.keywordDesc}
                </p>
            </div>

            {/* 차트 패널 */}
            {isOpen && (
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    {keywords.length === 0 ? (
                        <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-4">
                            {t.keywordEmpty || "Type some text to see keyword analysis"}
                        </p>
                    ) : (
                        <div className="space-y-2">
                            {keywords.map((kw, index) => (
                                <div key={kw.word} className="flex items-center gap-3">
                                    {/* 순위 */}
                                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500 w-5 text-right">
                                        {index + 1}
                                    </span>
                                    {/* 단어 */}
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-24 truncate" title={kw.word}>
                                        {kw.word}
                                    </span>
                                    {/* 바 */}
                                    <div className="flex-1 h-5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${BAR_COLORS[index]} rounded-full transition-all duration-500`}
                                            style={{ width: `${(kw.count / maxCount) * 100}%` }}
                                        />
                                    </div>
                                    {/* 횟수 */}
                                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 w-8 text-right">
                                        {kw.count}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

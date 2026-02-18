"use client";

/**
 * StatsPanel.js - 실시간 통계 대시보드
 *
 * 6개 통계 카드를 그리드로 배치합니다:
 * - Words (단어 수)
 * - Characters (공백 포함 글자 수)
 * - Characters no spaces (공백 제외 글자 수)
 * - Sentences (문장 수)
 * - Paragraphs (문단 수)
 * - Reading Time (예상 읽기 시간)
 */

import { useLanguage } from "@/context/LanguageContext";

// 각 통계 카드에 사용할 아이콘 (SVG path)
const STAT_ICONS = {
    words: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5h12M3 10h18M3 15h12M3 20h18"
        />
    ),
    characters: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 6h16M4 12h16M4 18h8"
        />
    ),
    charactersNoSpaces: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
        />
    ),
    sentences: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
    ),
    paragraphs: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
    ),
    readingTime: (
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    ),
};

// 각 카드의 배경 악센트 색상
const STAT_COLORS = [
    { bg: "bg-indigo-50", text: "text-indigo-600", icon: "text-indigo-500" },
    { bg: "bg-emerald-50", text: "text-emerald-600", icon: "text-emerald-500" },
    { bg: "bg-amber-50", text: "text-amber-600", icon: "text-amber-500" },
    { bg: "bg-rose-50", text: "text-rose-600", icon: "text-rose-500" },
    { bg: "bg-sky-50", text: "text-sky-600", icon: "text-sky-500" },
    { bg: "bg-violet-50", text: "text-violet-600", icon: "text-violet-500" },
];

export default function StatsPanel({ stats }) {
    const { t } = useLanguage();

    // 읽기 시간 포맷팅
    const readingTimeDisplay =
        stats.readingTime.minutes > 0
            ? `${stats.readingTime.minutes} ${t.statMinutes} ${stats.readingTime.seconds} ${t.statSeconds}`
            : `${stats.readingTime.seconds} ${t.statSeconds}`;

    // 통계 데이터 배열 구성
    const statItems = [
        {
            label: t.statWords,
            value: stats.words.toLocaleString(),
            icon: STAT_ICONS.words,
        },
        {
            label: t.statCharacters,
            value: stats.characters.toLocaleString(),
            icon: STAT_ICONS.characters,
        },
        {
            label: t.statCharsNoSpaces,
            value: stats.charactersNoSpaces.toLocaleString(),
            icon: STAT_ICONS.charactersNoSpaces,
        },
        {
            label: t.statSentences,
            value: stats.sentences.toLocaleString(),
            icon: STAT_ICONS.sentences,
        },
        {
            label: t.statParagraphs,
            value: stats.paragraphs.toLocaleString(),
            icon: STAT_ICONS.paragraphs,
        },
        {
            label: t.statReadingTime,
            value: readingTimeDisplay,
            icon: STAT_ICONS.readingTime,
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {statItems.map((item, index) => (
                <div
                    key={item.label}
                    className={`stat-card rounded-xl p-3 sm:p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm`}
                >
                    {/* 아이콘 + 라벨 */}
                    <div className="flex items-center gap-2 mb-2">
                        <div
                            className={`w-8 h-8 rounded-lg ${STAT_COLORS[index].bg} flex items-center justify-center`}
                        >
                            <svg
                                className={`w-4 h-4 ${STAT_COLORS[index].icon}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {item.icon}
                            </svg>
                        </div>
                    </div>

                    {/* 숫자 값 */}
                    <p className={`text-xl sm:text-2xl font-bold ${STAT_COLORS[index].text} mb-1`}>
                        {item.value}
                    </p>

                    {/* 라벨 */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
}

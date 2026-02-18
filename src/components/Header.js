"use client";

/**
 * Header.js - 사이트 헤더 + 언어 선택 + 다크 모드 토글
 *
 * 사이트 제목과 부제목을 표시하고,
 * 우측 상단에 언어 변경 드롭다운과 다크 모드 토글을 제공합니다.
 */

import { useLanguage } from "@/context/LanguageContext";

export default function Header({ isDark, onToggleDark }) {
    const { locale, t, changeLanguage, availableLocales } = useLanguage();

    return (
        <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                {/* 좌측: 사이트 로고 + 제목 */}
                <div className="flex items-center gap-3">
                    {/* 아이콘: 연필 모양 SVG */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md shadow-indigo-200 dark:shadow-indigo-900">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                            {t.siteTitle}
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                            {t.siteSubtitle}
                        </p>
                    </div>
                </div>

                {/* 우측: 다크 모드 토글 + 언어 선택 */}
                <div className="flex items-center gap-2">
                    {/* 다크 모드 토글 버튼 */}
                    <button
                        onClick={onToggleDark}
                        className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label={t.darkModeLabel}
                        title={t.darkModeLabel}
                    >
                        {isDark ? (
                            // 밝은 모드 아이콘 (해)
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        ) : (
                            // 다크 모드 아이콘 (달)
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        )}
                    </button>

                    {/* 언어 선택 드롭다운 */}
                    <select
                        id="language-selector"
                        value={locale}
                        onChange={(e) => changeLanguage(e.target.value)}
                        className="pl-2 pr-6 sm:pl-3 sm:pr-10 py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-colors cursor-pointer"
                    >
                        {availableLocales.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.flag} {lang.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </header>
    );
}

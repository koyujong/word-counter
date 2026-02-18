"use client";

/**
 * GoalMode.js - 글자 수 목표 설정 + 프로그레스바
 *
 * 사용자가 목표 글자 수(또는 단어 수)를 설정하면
 * 현재 진행률을 프로그레스바로 시각적으로 보여줍니다.
 * → 게이미피케이션 효과로 체류 시간 증가
 */

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function GoalMode({ stats }) {
    const { t } = useLanguage();
    const [goalType, setGoalType] = useState("characters"); // characters | charactersNoSpaces | words
    const [goalValue, setGoalValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // 현재 값 계산
    const currentValue = goalType === "words"
        ? stats.words
        : goalType === "charactersNoSpaces"
            ? stats.charactersNoSpaces
            : stats.characters;

    // 진행률 (0-100)
    const goalNum = parseInt(goalValue) || 0;
    const percentage = goalNum > 0 ? Math.min((currentValue / goalNum) * 100, 100) : 0;
    const isComplete = goalNum > 0 && currentValue >= goalNum;

    // 프로그레스바 색상
    const barColor = isComplete
        ? "bg-emerald-500"
        : percentage >= 80
            ? "bg-amber-500"
            : "bg-indigo-500";

    // 목표 타입 라벨 매핑
    const goalTypeLabels = {
        characters: t.statCharacters,
        charactersNoSpaces: t.statCharsNoSpaces,
        words: t.statWords,
    };

    return (
        <div className="mb-4">
            {/* 토글 버튼 + 설명 */}
            <div className="flex flex-wrap items-center gap-3">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn-action inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {t.goalToggle || "Set Goal"}
                </button>
                <p className="text-xs text-gray-400 dark:text-gray-500">{t.goalDesc}</p>
            </div>

            {/* 목표 설정 패널 */}
            {isOpen && (
                <div className="mt-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                        {/* 목표 타입 선택 */}
                        <select
                            value={goalType}
                            onChange={(e) => setGoalType(e.target.value)}
                            className="px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-lg"
                        >
                            <option value="characters">{t.statCharacters}</option>
                            <option value="charactersNoSpaces">{t.statCharsNoSpaces}</option>
                            <option value="words">{t.statWords}</option>
                        </select>

                        {/* 목표 값 입력 */}
                        <input
                            type="number"
                            min="1"
                            value={goalValue}
                            onChange={(e) => setGoalValue(e.target.value)}
                            placeholder={t.goalPlaceholder || "e.g. 500"}
                            className="w-32 px-3 py-2 text-sm bg-gray-50 dark:bg-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                        />

                        {/* 현재 / 목표 텍스트 */}
                        {goalNum > 0 && (
                            <span className={`text-sm font-medium ${isComplete ? "text-emerald-600" : "text-gray-600 dark:text-gray-400"}`}>
                                {currentValue.toLocaleString()} / {goalNum.toLocaleString()}
                                {isComplete && " ✅"}
                            </span>
                        )}
                    </div>

                    {/* 프로그레스바 */}
                    {goalNum > 0 && (
                        <div className="w-full h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${barColor} rounded-full transition-all duration-500 ease-out`}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    )}

                    {/* 퍼센트 표시 */}
                    {goalNum > 0 && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                            {Math.round(percentage)}%
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

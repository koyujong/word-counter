"use client";

/**
 * useDarkMode.js - 다크 모드 커스텀 훅
 *
 * localStorage에 사용자 선호도를 저장하고,
 * html 요소에 'dark' 클래스를 토글합니다.
 * Tailwind CSS의 class 기반 다크 모드와 연동됩니다.
 */

import { useState, useEffect, useCallback } from "react";

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false);

    // 마운트 시 localStorage에서 저장된 설정 로드
    useEffect(() => {
        const saved = localStorage.getItem("darkMode");
        if (saved === "true") {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    // 다크 모드 토글 핸들러
    const toggleDarkMode = useCallback(() => {
        setIsDark((prev) => {
            const next = !prev;
            localStorage.setItem("darkMode", String(next));
            if (next) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return next;
        });
    }, []);

    return { isDark, toggleDarkMode };
}

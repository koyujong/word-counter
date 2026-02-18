"use client";

/**
 * useAutoSave.js - 텍스트 자동 저장 훅
 *
 * localStorage에 텍스트를 자동 저장하고,
 * 페이지 로드 시 저장된 텍스트를 복원합니다.
 * 500ms 디바운스로 저장 성능을 최적화합니다.
 */

import { useEffect, useRef, useCallback } from "react";

const STORAGE_KEY = "wordcounter_text";
const DEBOUNCE_MS = 500;

/**
 * 저장된 텍스트를 로드합니다.
 * @returns {string} 저장된 텍스트 또는 빈 문자열
 */
export function loadSavedText() {
    if (typeof window === "undefined") return "";
    try {
        return localStorage.getItem(STORAGE_KEY) || "";
    } catch {
        return "";
    }
}

/**
 * 텍스트 자동 저장 훅
 * @param {string} text - 저장할 텍스트
 */
export function useAutoSave(text) {
    const timerRef = useRef(null);

    // 디바운스된 저장
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            try {
                localStorage.setItem(STORAGE_KEY, text);
            } catch (e) {
                // localStorage가 꽉 찬 경우 무시
            }
        }, DEBOUNCE_MS);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [text]);

    // 텍스트 지우기 시 저장소도 클리어
    const clearSaved = useCallback(() => {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch { }
    }, []);

    return { clearSaved };
}

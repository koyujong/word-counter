"use client";

/**
 * LanguageContext.js - 다국어 전환을 위한 React Context
 *
 * 전역 언어 상태를 관리하는 Context와 Provider를 제공합니다.
 * useLanguage() 훅으로 어느 컴포넌트에서든 현재 언어와 번역을 가져올 수 있습니다.
 */

import { createContext, useContext, useState, useCallback } from "react";
import translations from "@/lib/translations";

// Context 생성: 기본값은 영어('en')
const LanguageContext = createContext();

/**
 * LanguageProvider - 언어 상태를 자식 컴포넌트에 공급하는 Provider
 * layout.js에서 전체 앱을 감싸 사용합니다.
 */
export function LanguageProvider({ children }) {
    // 현재 선택된 언어 코드 (기본: 영어)
    const [locale, setLocale] = useState("en");

    // 언어 변경 핸들러 (useCallback으로 불필요한 리렌더 방지)
    const changeLanguage = useCallback((newLocale) => {
        if (translations[newLocale]) {
            setLocale(newLocale);
        }
    }, []);

    // 현재 언어에 해당하는 번역 객체
    const t = translations[locale];

    // 사용 가능한 언어 목록 (드롭다운에 표시)
    const availableLocales = Object.keys(translations).map((key) => ({
        code: key,
        name: translations[key].langName,
        flag: translations[key].langFlag,
    }));

    return (
        <LanguageContext.Provider
            value={{ locale, t, changeLanguage, availableLocales }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

/**
 * useLanguage - 언어 관련 데이터를 가져오는 커스텀 훅
 * @returns {{ locale, t, changeLanguage, availableLocales }}
 */
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

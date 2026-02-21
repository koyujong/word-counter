"use client";

/**
 * page.js - 메인 페이지 (전체 기능 통합)
 *
 * 기존 기능: 통계, 목표 설정, 텍스트 변환, 다크 모드, 자동 저장
 * 추가 기능: 키워드 빈도, 플랫폼 체크, 가독성 점수, 찾기&바꾸기, 텍스트 히스토리
 */

import { useState, useMemo, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { analyzeText } from "@/lib/textAnalyzer";
import { useAutoSave, loadSavedText } from "@/hooks/useAutoSave";
import Header from "@/components/Header";
import StatsPanel from "@/components/StatsPanel";
import TextEditor from "@/components/TextEditor";
import GoalMode from "@/components/GoalMode";
import TextTransform from "@/components/TextTransform";
import KeywordFrequency from "@/components/KeywordFrequency";
import PlatformCheck from "@/components/PlatformCheck";
import ReadabilityScore from "@/components/ReadabilityScore";
import FindReplace from "@/components/FindReplace";
import TextHistory from "@/components/TextHistory";
import AdBanner from "@/components/AdBanner";
import SeoContent from "@/components/SeoContent";

export default function HomePage() {
    const { t } = useLanguage();

    // 텍스트 입력 상태 — 마운트 시 localStorage에서 복원
    const [text, setText] = useState("");
    const [isRestored, setIsRestored] = useState(false);

    // 마운트 시 저장된 텍스트 로드
    useEffect(() => {
        const saved = loadSavedText();
        if (saved) {
            setText(saved);
            setIsRestored(true);
            setTimeout(() => setIsRestored(false), 3000);
        }
    }, []);

    // 자동 저장 훅
    const { clearSaved } = useAutoSave(text);

    // 텍스트 변경 핸들러
    const handleTextChange = (newText) => {
        setText(newText);
        if (newText === "") {
            clearSaved();
        }
    };

    // 통계 계산 (useMemo로 텍스트가 변경될 때만 재계산)
    const stats = useMemo(() => analyzeText(text), [text]);

    return (
        <div className="min-h-screen bg-[#FAFAFA] dark:bg-gray-950 flex flex-col transition-colors duration-300">
            {/* ===== 헤더 ===== */}
            <Header />

            {/* ===== 메인 콘텐츠 영역 ===== */}
            <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6" role="main">
                {/* 복원 알림 토스트 */}
                {isRestored && (
                    <div className="mb-4 px-4 py-2.5 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 rounded-lg text-sm text-indigo-700 dark:text-indigo-300 flex items-center gap-2 animate-fade-in">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t.autoSaveRestored}
                    </div>
                )}

                {/* 광고 영역 ① */}
                <AdBanner position="Top Banner" />

                {/* 도구 영역 */}
                <article aria-label="Text analysis tool">
                    {/* 통계 대시보드 */}
                    <section aria-label="Text statistics" className="mb-5">
                        <StatsPanel stats={stats} />
                    </section>

                    {/* 🎯 글자 수 목표 모드 */}
                    <GoalMode stats={stats} />

                    {/* 📱 플랫폼 글자수 체크 */}
                    <PlatformCheck stats={stats} />

                    {/* 텍스트 입력 영역 */}
                    <section aria-label="Text editor" className="mb-2">
                        <TextEditor text={text} onTextChange={handleTextChange} stats={stats} />
                    </section>

                    {/* 💾 자동 저장 안내 */}
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-4 flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        {t.autoSaveDesc}
                    </p>

                    {/* 🔄 텍스트 변환 도구 */}
                    <section aria-label="Text transformation tools" className="mb-6">
                        <TextTransform text={text} onTextChange={handleTextChange} />
                    </section>

                    {/* 🔍 찾기 & 바꾸기 */}
                    <FindReplace text={text} onTextChange={handleTextChange} />

                    {/* 🔢 키워드 빈도 분석 */}
                    <KeywordFrequency text={text} />

                    {/* 📊 가독성 점수 */}
                    <ReadabilityScore text={text} stats={stats} />

                    {/* 📝 텍스트 히스토리 */}
                    <TextHistory text={text} onTextChange={handleTextChange} />
                </article>

                {/* 광고 영역 ② */}
                <AdBanner position="Middle Banner" />

                {/* SEO 콘텐츠 */}
                <article aria-label="About this tool" className="py-10">
                    <SeoContent />
                </article>

                {/* 광고 영역 ③ */}
                <AdBanner position="Bottom Banner" />
            </main>

            {/* ===== 푸터 ===== */}
            <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8 transition-colors" role="contentinfo">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.footerText}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                        © {new Date().getFullYear()} Word Counter. {t.footerCopyright}
                    </p>
                </div>
            </footer>
        </div>
    );
}

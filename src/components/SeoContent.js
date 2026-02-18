"use client";

/**
 * SeoContent.js - SEO 최적화 콘텐츠 섹션 (확장판)
 *
 * 구글봇 품질 필터 통과를 위한 풍부한 콘텐츠:
 * 1. "이 툴을 사용해야 하는 이유" — 4개 장점 카드
 * 2. "사용 방법" — Step-by-step 가이드
 * 3. "플랫폼별 글자 수 제한" — 비교표
 * 4. "글자 수 세기가 왜 중요한가?" — 설명 텍스트
 * 5. "활용 사례" — 구체적인 사용 시나리오
 * 6. "효과적인 글쓰기 팁" — 실용 조언
 * 7. "FAQ" — 확장된 자주 묻는 질문 (10개)
 */

import { useLanguage } from "@/context/LanguageContext";
import seoTranslations from "@/lib/seoTranslations";

// 장점 카드 아이콘들
const FEATURE_ICONS = [
    <svg key="fast" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    <svg key="shield" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg key="globe" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="pro" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
];

const FEATURE_COLORS = [
    { bg: "bg-amber-50", icon: "text-amber-500", border: "border-amber-100" },
    { bg: "bg-emerald-50", icon: "text-emerald-500", border: "border-emerald-100" },
    { bg: "bg-sky-50", icon: "text-sky-500", border: "border-sky-100" },
    { bg: "bg-violet-50", icon: "text-violet-500", border: "border-violet-100" },
];

export default function SeoContent() {
    const { locale, t } = useLanguage();
    const st = seoTranslations[locale];

    // 기존 FAQ + 확장 FAQ 합치기
    const allFaqItems = [...t.faqItems, ...st.extraFaqItems];

    return (
        <div className="space-y-20">
            {/* ===== 섹션 1: 이 툴을 사용해야 하는 이유 ===== */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {t.seoWhyTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {t.seoWhyItems.map((item, index) => (
                        <div key={index} className={`p-6 rounded-xl border ${FEATURE_COLORS[index].border} ${FEATURE_COLORS[index].bg} dark:bg-gray-800 dark:border-gray-700 transition-all hover:shadow-md`}>
                            <div className={`w-12 h-12 rounded-xl ${FEATURE_COLORS[index].bg} ${FEATURE_COLORS[index].icon} flex items-center justify-center mb-4`}>
                                {FEATURE_ICONS[index]}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== 섹션 2: 사용 방법 ===== */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {st.howToUseTitle}
                </h2>
                <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {st.howToUseSteps.map((step, index) => (
                        <div key={index} className="flex gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                                {step.step}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== 섹션 3: 플랫폼별 글자 수 제한 비교표 ===== */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {st.platformLimitsTitle}
                </h2>
                <div className="max-w-3xl mx-auto overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                                <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Platform</th>
                                <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Limit</th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 hidden sm:table-cell">Note</th>
                            </tr>
                        </thead>
                        <tbody>
                            {st.platformLimits.map((item, index) => (
                                <tr key={index} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                    <td className="py-3 px-4 font-medium text-gray-800 dark:text-gray-200">{item.platform}</td>
                                    <td className="py-3 px-4 text-right">
                                        <span className="font-bold text-indigo-600 dark:text-indigo-400">{item.limit}</span>
                                        <span className="text-gray-500 dark:text-gray-400 ml-1 text-xs">{item.type}</span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-500 dark:text-gray-400 text-xs hidden sm:table-cell">{item.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ===== 섹션 4: 글자 수 세기가 왜 중요한가? ===== */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {t.seoImportanceTitle}
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {t.seoImportanceContent.map((paragraph, index) => (
                        <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">{paragraph}</p>
                    ))}
                </div>
            </section>

            {/* ===== 섹션 5: 활용 사례 ===== */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {st.useCasesTitle}
                </h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    {st.useCases.map((uc, index) => (
                        <div key={index} className="p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold">{index + 1}</span>
                                {uc.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{uc.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== 섹션 6: 효과적인 글쓰기 팁 ===== */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {st.writingTipsTitle}
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {st.writingTips.map((tip, index) => (
                        <div key={index} className="p-5 bg-gradient-to-r from-white to-indigo-50/30 dark:from-gray-800 dark:to-indigo-950/20 rounded-xl border border-gray-100 dark:border-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                {tip.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pl-7">{tip.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== 섹션 7: FAQ (확장 — 10개) ===== */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                    {t.faqTitle}
                </h2>
                <div className="max-w-3xl mx-auto space-y-3">
                    {allFaqItems.map((faq, index) => (
                        <details key={index} className="faq-item group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                            <summary className="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <span className="font-medium text-gray-900 dark:text-white pr-4">{faq.q}</span>
                                <svg className="faq-chevron w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>
        </div>
    );
}

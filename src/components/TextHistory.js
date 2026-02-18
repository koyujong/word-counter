"use client";

/**
 * TextHistory.js - 텍스트 히스토리 (스냅샷 관리)
 *
 * 텍스트 변경 시 타임스탬프와 함께 자동 스냅샷을 저장합니다.
 * 사용자가 이전 버전으로 복원할 수 있습니다.
 * → Ctrl+Z 이상의 강력한 되돌리기 기능
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";

// 최대 저장 스냅샷 수
const MAX_SNAPSHOTS = 20;
// 스냅샷 생성 간격 (ms) — 5초마다
const SNAPSHOT_INTERVAL = 5000;

export default function TextHistory({ text, onTextChange }) {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [snapshots, setSnapshots] = useState([]);
    const lastSnapshotRef = useRef("");
    const timerRef = useRef(null);

    // 스냅샷 자동 저장 — 5초마다 텍스트가 변경되었으면 저장
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            if (text && text !== lastSnapshotRef.current && text.trim().length > 0) {
                const newSnapshot = {
                    id: Date.now(),
                    text: text,
                    preview: text.substring(0, 80).replace(/\n/g, " "),
                    charCount: text.length,
                    time: new Date().toLocaleTimeString(),
                };

                setSnapshots((prev) => {
                    const updated = [newSnapshot, ...prev].slice(0, MAX_SNAPSHOTS);
                    return updated;
                });
                lastSnapshotRef.current = text;
            }
        }, SNAPSHOT_INTERVAL);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [text]);

    // 스냅샷 복원
    const handleRestore = useCallback((snapshot) => {
        onTextChange(snapshot.text);
    }, [onTextChange]);

    // 히스토리 전체 삭제
    const handleClearAll = useCallback(() => {
        setSnapshots([]);
    }, []);

    return (
        <div className="mb-5">
            {/* 토글 버튼 */}
            <div className="flex flex-wrap items-center gap-3 mb-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn-action inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.historyTitle || "Text History"}
                    {snapshots.length > 0 && (
                        <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-1.5 py-0.5 rounded-md">
                            {snapshots.length}
                        </span>
                    )}
                </button>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    {t.historyDesc}
                </p>
            </div>

            {/* 히스토리 패널 */}
            {isOpen && (
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    {snapshots.length === 0 ? (
                        <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-4">
                            {t.historyEmpty || "No snapshots yet. Keep typing and snapshots will be saved automatically."}
                        </p>
                    ) : (
                        <>
                            {/* 삭제 버튼 */}
                            <div className="flex justify-end mb-3">
                                <button
                                    onClick={handleClearAll}
                                    className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    {t.historyClearAll || "Clear All"}
                                </button>
                            </div>

                            {/* 스냅샷 리스트 */}
                            <div className="space-y-2 max-h-60 overflow-y-auto">
                                {snapshots.map((snapshot) => (
                                    <div
                                        key={snapshot.id}
                                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-750 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors group"
                                    >
                                        {/* 시간 */}
                                        <span className="text-xs text-gray-400 dark:text-gray-500 font-mono w-16 flex-shrink-0">
                                            {snapshot.time}
                                        </span>

                                        {/* 미리보기 */}
                                        <p className="flex-1 text-xs text-gray-600 dark:text-gray-400 truncate">
                                            {snapshot.preview}{snapshot.text.length > 80 ? "..." : ""}
                                        </p>

                                        {/* 글자 수 */}
                                        <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">
                                            {snapshot.charCount.toLocaleString()}
                                        </span>

                                        {/* 복원 버튼 */}
                                        <button
                                            onClick={() => handleRestore(snapshot)}
                                            className="text-xs px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-md opacity-0 group-hover:opacity-100 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all flex-shrink-0"
                                        >
                                            {t.historyRestore || "Restore"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

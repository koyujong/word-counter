/**
 * textAnalyzer.js - 순수 함수 기반 텍스트 분석 모듈
 *
 * 모든 통계 계산을 담당하는 유틸리티 함수들을 모아둔 파일입니다.
 * 백엔드 요청 없이 브라우저에서 즉시 계산됩니다.
 */

// ===== CJK(한중일) 문자 판별 정규식 =====
// 한국어, 중국어, 일본어 문자를 개별 "단어"로 카운트하기 위한 유니코드 범위
const CJK_REGEX = /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uAC00-\uD7AF]/g;

/**
 * 단어 수를 계산합니다.
 * - 영어: 공백으로 분리한 단어 수
 * - CJK 문자: 각 문자를 1단어로 카운트
 * @param {string} text - 분석할 텍스트
 * @returns {number} 단어 수
 */
export function countWords(text) {
    if (!text || !text.trim()) return 0;

    // CJK 문자들을 추출하고 원본에서 제거
    const cjkMatches = text.match(CJK_REGEX) || [];
    const textWithoutCjk = text.replace(CJK_REGEX, ' ');

    // 남은 텍스트에서 영어/숫자 단어 카운트
    const words = textWithoutCjk
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0);

    return words.length + cjkMatches.length;
}

/**
 * 글자 수를 계산합니다 (공백 포함).
 * @param {string} text - 분석할 텍스트
 * @returns {number} 공백 포함 글자 수
 */
export function countCharacters(text) {
    if (!text) return 0;
    return text.length;
}

/**
 * 글자 수를 계산합니다 (공백 제외).
 * 한국어 이력서 작성 시 필수 기능입니다.
 * @param {string} text - 분석할 텍스트
 * @returns {number} 공백 제외 글자 수
 */
export function countCharactersNoSpaces(text) {
    if (!text) return 0;
    return text.replace(/\s/g, '').length;
}

/**
 * 문장 수를 계산합니다.
 * 마침표(.), 느낌표(!), 물음표(?) 기준으로 분리합니다.
 * @param {string} text - 분석할 텍스트
 * @returns {number} 문장 수
 */
export function countSentences(text) {
    if (!text || !text.trim()) return 0;

    // 문장 종결 부호로 분리 후 빈 문자열 제거
    const sentences = text
        .split(/[.!?。！？]+/)
        .filter((s) => s.trim().length > 0);

    return sentences.length;
}

/**
 * 문단 수를 계산합니다.
 * 빈 줄(연속된 줄바꿈)로 구분합니다.
 * @param {string} text - 분석할 텍스트
 * @returns {number} 문단 수
 */
export function countParagraphs(text) {
    if (!text || !text.trim()) return 0;

    const paragraphs = text
        .split(/\n\s*\n/)
        .filter((p) => p.trim().length > 0);

    return Math.max(paragraphs.length, 1);
}

/**
 * 예상 읽기 시간을 계산합니다.
 * - 영어 기준: 약 200 단어/분 (WPM)
 * - CJK 문자 기준: 약 500 글자/분 (CPM)
 * @param {string} text - 분석할 텍스트
 * @returns {string} "X min Y sec" 형태의 문자열
 */
export function calculateReadingTime(text) {
    if (!text || !text.trim()) return { minutes: 0, seconds: 0 };

    const cjkMatches = text.match(CJK_REGEX) || [];
    const textWithoutCjk = text.replace(CJK_REGEX, ' ');
    const englishWords = textWithoutCjk
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0).length;

    // 영어: 200WPM, CJK: 500CPM
    const englishMinutes = englishWords / 200;
    const cjkMinutes = cjkMatches.length / 500;
    const totalMinutes = englishMinutes + cjkMinutes;

    const minutes = Math.floor(totalMinutes);
    const seconds = Math.round((totalMinutes - minutes) * 60);

    return { minutes, seconds };
}

/**
 * 모든 통계를 한 번에 계산하여 객체로 반환합니다.
 * @param {string} text - 분석할 텍스트
 * @returns {object} 모든 통계 결과
 */
export function analyzeText(text) {
    return {
        words: countWords(text),
        characters: countCharacters(text),
        charactersNoSpaces: countCharactersNoSpaces(text),
        sentences: countSentences(text),
        paragraphs: countParagraphs(text),
        readingTime: calculateReadingTime(text),
    };
}

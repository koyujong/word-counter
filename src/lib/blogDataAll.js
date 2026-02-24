/**
 * blogDataAll.js - 다국어 블로그 데이터 통합 모듈
 *
 * 모든 언어의 블로그 포스트를 하나로 합치고,
 * hreflang 태그와 사이트맵에 필요한 헬퍼 함수들을 제공합니다.
 */

import { blogPosts } from './blogData';
import { blogPostsKo } from './blogData_ko';
import { blogPostsJa } from './blogData_ja';
import { blogPostsEs } from './blogData_es';

export const allBlogPosts = [
    ...blogPosts,
    ...blogPostsKo,
    ...blogPostsJa,
    ...blogPostsEs,
];

/**
 * 특정 slug의 포스트와 같은 translationGroupId를 가진
 * 모든 다국어 버전 포스트 목록을 반환합니다.
 * hreflang 태그 생성에 사용됩니다.
 */
export function getTranslations(slug) {
    const post = allBlogPosts.find((p) => p.slug === slug);
    if (!post) return [];
    return allBlogPosts.filter(
        (p) => p.translationGroupId === post.translationGroupId
    );
}

/**
 * 특정 translationGroupId에 속한 모든 언어 버전의 slug를 반환합니다.
 * { language: slug } 형태의 객체를 반환합니다.
 */
export function getAlternateLanguages(slug) {
    const translations = getTranslations(slug);
    const alternates = {};
    for (const t of translations) {
        alternates[t.language] = t.slug;
    }
    return alternates;
}

/**
 * 특정 언어의 블로그 포스트 목록을 반환합니다.
 */
export function getPostsByLanguage(lang) {
    return allBlogPosts.filter((p) => p.language === lang);
}

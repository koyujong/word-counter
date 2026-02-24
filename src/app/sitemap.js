/**
 * sitemap.js - Next.js App Router 동적 사이트맵 (다국어 지원)
 *
 * 구글 서치 콘솔에 제출할 사이트맵을 자동 생성합니다.
 * 각 블로그 포스트에 hreflang alternates가 포함되어
 * 구글봇이 다국어 버전을 인식할 수 있습니다.
 */

import { allBlogPosts, getAlternateLanguages } from '@/lib/blogDataAll';

export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ct.4kdrivewalk.com";

    const blogRoutes = allBlogPosts.map((post) => {
        const alternates = getAlternateLanguages(post.slug);
        const languages = {};
        for (const [lang, altSlug] of Object.entries(alternates)) {
            languages[lang] = `${baseUrl}/blog/${encodeURIComponent(altSlug)}`;
        }

        const enSlug = alternates['en'];
        if (enSlug) {
            languages['x-default'] = `${baseUrl}/blog/${encodeURIComponent(enSlug)}`;
        }

        return {
            url: `${baseUrl}/blog/${encodeURIComponent(post.slug)}`,
            lastModified: new Date(post.date),
            changeFrequency: "monthly",
            priority: 0.8,
            alternates: {
                languages,
            },
        };
    });

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...blogRoutes,
    ];
}

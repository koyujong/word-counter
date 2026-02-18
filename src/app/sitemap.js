/**
 * sitemap.js - Next.js App Router 동적 사이트맵
 *
 * 구글 서치 콘솔에 제출할 사이트맵을 자동 생성합니다.
 * 배포 시 도메인을 실제 URL로 변경하세요.
 */

export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wordcounter.example.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];
}

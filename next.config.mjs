/** @type {import('next').NextConfig} */
const nextConfig = {
    // 네이버/구글 검색 로봇이 접근할 수 있도록 HTTP 헤더 설정
    async headers() {
        return [
            {
                // 모든 경로에 적용
                source: "/:path*",
                headers: [
                    {
                        // 검색 로봇에게 색인 허용 명시
                        key: "X-Robots-Tag",
                        value: "index, follow",
                    },
                ],
            },
            {
                // robots.txt에 캐시 방지 (크롤러가 최신 파일을 읽도록)
                source: "/robots.txt",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=0, must-revalidate",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;

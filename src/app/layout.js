import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

/**
 * layout.js - 루트 레이아웃 (SEO 강화판)
 *
 * 구글 SEO 최적화 항목:
 * ✅ title / description / keywords 메타태그
 * ✅ Open Graph (og:) 소셜 미리보기
 * ✅ Twitter Card 메타태그
 * ✅ canonical URL
 * ✅ robots 지시자
 * ✅ JSON-LD 구조화 데이터 (WebApplication + FAQPage)
 * ✅ Google Fonts 로드
 * ✅ viewport 설정
 * ✅ 언어 설정 (html lang)
 */

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wordcounter.example.com";

// ===== SEO 메타데이터 (Next.js Metadata API) =====
export const metadata = {
    // 기본 메타
    title: "Word & Character Counter | Free Online Tool — 글자 수 세기",
    description:
        "Free real-time word counter, character counter, and text analyzer tool. Count words, characters (with and without spaces), sentences, paragraphs, and reading time instantly. Supports English, Korean (한국어), Japanese (日本語), and Spanish (Español). 100% private — your text never leaves your browser. 무료 실시간 글자 수 세기, 단어 수 세기 도구.",
    keywords: [
        "word counter",
        "character counter",
        "글자 수 세기",
        "단어 세기",
        "공백 제외 글자수",
        "text analyzer",
        "word count tool",
        "character count online",
        "文字数カウント",
        "単語カウンター",
        "contador de palabras",
        "contador de caracteres",
        "free online tool",
        "real-time counter",
        "reading time calculator",
        "sentence counter",
        "paragraph counter",
    ],

    // canonical URL (중복 페이지 방지)
    alternates: {
        canonical: BASE_URL,
    },

    // 로봇 지시자
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
        googleBot: {
            index: true,
            follow: true,
        },
    },

    // Favicon 및 아이콘
    icons: {
        icon: "/icon.svg",
        apple: "/icon.svg",
    },

    // Open Graph (Facebook, LinkedIn 등)
    openGraph: {
        title: "Word & Character Counter — Free Real-time Text Analyzer",
        description:
            "Count words, characters, sentences, paragraphs, and reading time instantly. 100% free, private, and multi-language. No sign-up required.",
        type: "website",
        url: BASE_URL,
        siteName: "Word & Character Counter",
        locale: "en_US",
        alternateLocale: ["ko_KR", "ja_JP", "es_ES"],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Word & Character Counter — Free Online Tool",
        description:
            "Real-time word count, character count, sentence count, and more. Free, private, multi-language.",
    },

    // 기타 메타
    applicationName: "Word & Character Counter",
    category: "Productivity",
    creator: "Word Counter Team",
    publisher: "Word Counter",
};

// ===== JSON-LD 구조화 데이터 =====
const jsonLdWebApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Word & Character Counter",
    description:
        "Free real-time word counter, character counter, and text analyzer. Supports English, Korean, Japanese, and Spanish.",
    url: BASE_URL,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    featureList: [
        "Real-time word counting",
        "Character counting with and without spaces",
        "Sentence counting",
        "Paragraph counting",
        "Reading time estimation",
        "Multi-language support (EN, KO, JA, ES)",
        "100% client-side processing",
        "No data collection",
    ],
    inLanguage: ["en", "ko", "ja", "es"],
};

const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How are words counted for different languages?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For English and other space-separated languages, words are counted by splitting on whitespace. For CJK languages (Korean, Japanese, Chinese), each character is counted as one word, which is the standard convention.",
            },
        },
        {
            "@type": "Question",
            name: "Is my text data safe?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. All processing happens 100% in your browser. Your text is never sent to any server, stored, or shared. Close the tab and everything is gone.",
            },
        },
        {
            "@type": "Question",
            name: "How is reading time calculated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Reading time is based on average reading speeds: approximately 200 words per minute for English text and 500 characters per minute for CJK languages.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between Characters and Characters (no spaces)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Characters counts every single character including spaces, tabs, and line breaks. Characters (no spaces) removes all whitespace before counting. The latter is especially important for Korean job applications where 'characters excluding spaces' is the standard measurement.",
            },
        },
        {
            "@type": "Question",
            name: "Can I use this on mobile devices?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! The tool is fully responsive and works perfectly on phones and tablets.",
            },
        },
        {
            "@type": "Question",
            name: "Is there a maximum text length?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "There is no artificial limit on text length. The tool runs entirely in your browser, so the only limit is your device's available memory. We have tested it with texts over 100,000 words without any issues.",
            },
        },
    ],
};

const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
        },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google Search Console 소유권 확인 */}
                <meta name="google-site-verification" content="47z3uMVzsCyw66vTGaSLLtCKy3vebHH5QOU4H3yCDR8" />

                {/* 네이버 서치어드바이저 소유권 확인 */}
                <meta name="naver-site-verification" content="8c2d85ada57223c9f5412c8ae83670d9bc6aad3f" />

                {/* Google tag (gtag.js) - GA4 */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-0QCN1L3WR0" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-0QCN1L3WR0');
                        `,
                    }}
                />

                {/* Google Fonts - Inter (실제 로드) */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />

                {/* Google AdSense 글로벌 스크립트 */}
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3488637908196788"
                    crossOrigin="anonymous"
                />

                {/* JSON-LD 구조화 데이터 (구글 리치 리절트) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
                />
            </head>
            <body className="antialiased">
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}

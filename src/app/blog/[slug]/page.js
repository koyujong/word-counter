import { allBlogPosts, getAlternateLanguages } from '@/lib/blogDataAll';
import { notFound } from 'next/navigation';
import { parseMarkdownToReact } from '@/lib/parseMarkdown';
import Link from 'next/link';
import BlogLanguageRedirect from '@/components/BlogLanguageRedirect';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ct.4kdrivewalk.com";

export function generateStaticParams() {
    return allBlogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const post = allBlogPosts.find((p) => p.slug === decodedSlug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const alternates = getAlternateLanguages(slug);
    const languages = {};
    for (const [lang, altSlug] of Object.entries(alternates)) {
        languages[lang] = `${BASE_URL}/blog/${encodeURIComponent(altSlug)}`;
    }
    const enSlug = alternates['en'];
    if (enSlug) {
        languages['x-default'] = `${BASE_URL}/blog/${encodeURIComponent(enSlug)}`;
    }

    return {
        title: `${post.title} | Text Counter Blog`,
        description: post.description,
        keywords: post.keywords.join(', '),
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            locale: post.language === 'ko' ? 'ko_KR' : post.language === 'ja' ? 'ja_JP' : post.language === 'es' ? 'es_ES' : 'en_US',
        },
        alternates: {
            canonical: `${BASE_URL}/blog/${encodeURIComponent(post.slug)}`,
            languages,
        },
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const post = allBlogPosts.find((p) => p.slug === decodedSlug);

    if (!post) {
        notFound();
    }

    const dateLocale = post.language === 'ko' ? 'ko-KR' : post.language === 'ja' ? 'ja-JP' : post.language === 'es' ? 'es-ES' : 'en-US';
    const backText = post.language === 'ko' ? '블로그로 돌아가기' : post.language === 'ja' ? 'ブログに戻る' : post.language === 'es' ? 'Volver al Blog' : 'Back to Blog';
    const ctaText = post.language === 'ko' ? '무료 글자 수 세기 도구 사용하기' : post.language === 'ja' ? '無料文字カウンターを使う' : post.language === 'es' ? 'Usar el Contador Gratis' : 'Use the Free Word Counter';
    const ctaDesc = post.language === 'ko' ? '텍스트 길이를 완벽하게 맞춰보세요' : post.language === 'ja' ? 'テキストの長さを完璧に調整しましょう' : post.language === 'es' ? '¿Listo para perfeccionar la longitud de tu texto?' : 'Ready to perfect your text length?';

    const alternates = getAlternateLanguages(decodedSlug);

    return (
        <article className="min-h-screen bg-white dark:bg-gray-900 py-12 sm:py-20 transition-colors">
            <BlogLanguageRedirect postLanguage={post.language} alternates={alternates} />
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Back Link */}
                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                        <svg className="mr-2 w-4 h-4" transform="rotate(180)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        {backText}
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-14 border-b border-gray-100 dark:border-gray-800 pb-10">
                    <div className="flex items-center gap-4 mb-4 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString(dateLocale, { month: "long", day: "numeric", year: "numeric" })}
                        </time>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                        <span>5 min read</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-8">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap gap-2">
                        {post.keywords.map(kw => (
                            <span key={kw} className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-bold rounded-full lowercase shadow-sm">
                                #{kw.replace(/ /g, '-')}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Content */}
                <div className="max-w-none text-left">
                    {parseMarkdownToReact(post.content)}
                </div>

                {/* Footer / CTA */}
                <div className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">{ctaDesc}</p>
                    <Link href="/" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900 transition-all hover:-translate-y-1">
                        {ctaText}
                    </Link>
                </div>
            </div>
        </article>
    );
}

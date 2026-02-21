import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import { parseMarkdownToReact } from '@/lib/parseMarkdown';
import Link from 'next/link';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
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
        }
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white dark:bg-gray-900 py-12 sm:py-20 transition-colors">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Back Link */}
                <div className="mb-10">
                    <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                        <svg className="mr-2 w-4 h-4" transform="rotate(180)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        Back to Blog
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-14 border-b border-gray-100 dark:border-gray-800 pb-10">
                    <div className="flex items-center gap-4 mb-4 text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
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
                    <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Ready to perfect your text length?</p>
                    <Link href="/" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900 transition-all hover:-translate-y-1">
                        Use the Free Word Counter
                    </Link>
                </div>
            </div>
        </article>
    );
}

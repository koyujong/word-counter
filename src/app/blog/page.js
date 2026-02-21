import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';

export const metadata = {
    title: 'Blog | SEO & Text Analysis Guide 2026',
    description: 'Read our latest articles on character limits, SEO optimization, and digital text strategies.',
};

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 sm:py-20 transition-colors">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Our Blog
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Deep dives into text analytics, SEO length optimization, and character strategies for every platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex-1">
                                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase mb-3 text-left">
                                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                </p>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-3 text-left">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 text-sm leading-relaxed mb-6 text-left">
                                    {post.description}
                                </p>
                            </div>
                            <div className="mt-auto flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                                Read Article
                                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

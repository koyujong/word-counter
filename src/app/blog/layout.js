import Header from "@/components/Header";

export default function BlogLayout({ children }) {
    return (
        <div className="min-h-[100dvh] flex flex-col transition-colors duration-300">
            <Header />
            <div className="flex-1">
                {children}
            </div>
            <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-8 transition-colors mt-auto" role="contentinfo">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Word Counter Blog - Expert advice on character limits and text analysis.</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                        © {new Date().getFullYear()} Word Counter. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

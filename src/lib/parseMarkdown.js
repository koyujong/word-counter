import React from 'react';

export function parseMarkdownToReact(text) {
    if (!text) return null;

    const lines = text.trim().split('\n');
    const elements = [];
    let currentList = [];
    let listKeyCounter = 0;

    lines.forEach((line, index) => {
        line = line.trim();
        if (line === '') return;

        // Bold parsing
        const processBold = (str) => {
            const parts = str.split(/(\*\*.*?\*\*)/g);
            return parts.map((part, i) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="font-bold text-gray-900 dark:text-gray-100">{part.slice(2, -2)}</strong>;
                }
                return part;
            });
        };

        if (line.startsWith('# ')) {
            // Treat Markdown # as H2 for SEO since Page H1 already exists
            elements.push(<h2 key={index} className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-8 mb-6 tracking-tight leading-tight font-sans">{processBold(line.slice(2))}</h2>);
        } else if (line.startsWith('## ')) {
            elements.push(<h2 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-5 border-b border-gray-200 dark:border-gray-700 pb-2 font-sans">{processBold(line.slice(3))}</h2>);
        } else if (line.startsWith('### ')) {
            elements.push(<h3 key={index} className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4 font-sans">{processBold(line.slice(4))}</h3>);
        } else if (line.startsWith('- ')) {
            currentList.push(<li key={index} className="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed pl-2 font-serif">{processBold(line.slice(2))}</li>);
        } else {
            // Flush list if it was open
            if (currentList.length > 0) {
                elements.push(<ul key={`ul-${listKeyCounter++}`} className="list-disc list-inside mb-6 space-y-1 ml-4 marker:text-indigo-500 font-serif">{currentList}</ul>);
                currentList = [];
            }
            elements.push(<p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed text-[1.05rem] sm:text-[1.1rem] font-serif">{processBold(line)}</p>);
        }
    });

    if (currentList.length > 0) {
        elements.push(<ul key={`ul-final`} className="list-disc list-inside mb-6 space-y-1 ml-4 marker:text-indigo-500 font-serif">{currentList}</ul>);
    }

    return <>{elements}</>;
}

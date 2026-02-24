"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogLanguageRedirect({ postLanguage, alternates }) {
    const { locale } = useLanguage();
    const router = useRouter();

    useEffect(() => {
        if (locale !== postLanguage && alternates[locale]) {
            router.push(`/blog/${alternates[locale]}`);
        }
    }, [locale, postLanguage, alternates, router]);

    return null;
}

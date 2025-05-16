'use server';

import { cookies } from 'next/headers';

export async function setThemeCookie(theme: 'light' | 'dark') {
    (await cookies()).set('theme', theme, {
        path: '/',
    });
}
'use server';

import { cookies } from 'next/headers';

export async function setThemeCookie(theme: 'light' | 'dark') {
    (await cookies()).set('theme', theme, {
        path: '/',
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'lax', // CSRF protection
    });
}
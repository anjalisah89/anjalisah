'use client';

import { useEffect, useState } from 'react';
import { setThemeCookie } from '@/app/utils/actions';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // useEffect to read the initial theme from the ssr data-theme attribute
  useEffect(() => {
    const initialTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'dark';
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Don't show the button until the component render
  if (!mounted) {
    return null;
  }

  // Function to update data-theme
  const toggleTheme = async () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);

    // Call the server action to update the cookie
    await setThemeCookie(newTheme);
  };

  return (
    <button className='secondary' onClick={toggleTheme}>
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}

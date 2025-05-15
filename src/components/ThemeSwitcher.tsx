"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme(); 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="primary" aria-hidden="true" style={{ opacity: 0 }} disabled>
        Loading...
      </button>
    );
  }

  const isDarkMode = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="secondary"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? (
        <>
          <span role="img" aria-label="Sun icon" style={{ marginRight: '0.5em' }}>🌞</span>
          Light Mode
        </>
      ) : (
        <>
          <span role="img" aria-label="Moon icon" style={{ marginRight: '0.5em' }}>🌙</span>
          Dark Mode
        </>
      )}
    </button>
  );
};

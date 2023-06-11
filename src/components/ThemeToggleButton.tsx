import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const themes = ['light', 'dark'];

const ThemeToggleButton = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    // If it's executed in the server, return undefined
    if (typeof window === 'undefined') {
      return undefined;
    }

    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? (
    <div className="inline-flex items-center rounded-3xl bg-orange-200 p-[1px] dark:bg-zinc-600">
      {themes.map((t) => {
        const checked = t === theme;

        return (
          <button
            id="theme-toggle"
            role="button"
            key={t}
            className={`${
              checked ? 'bg-white text-black' : ''
            } cursor-pointer rounded-3xl p-2`}
            onClick={toggleTheme}
            arial-label="Theme toggle"
          >
            {t === 'light' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default ThemeToggleButton;

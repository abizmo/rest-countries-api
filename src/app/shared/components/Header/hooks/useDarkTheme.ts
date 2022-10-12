import { useEffect, useState } from 'react';

const prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const body = document.body;

export const useDarkTheme = (): {
  isDark: boolean;
  toggleTheme: () => void;
} => {
  const [isDark, setIsDark] = useState(prefersTheme);

  useEffect(() => {
    body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = (): void => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return { isDark, toggleTheme };
};

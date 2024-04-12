'use client';
// Button.jsx
import React from 'react';
import { useTheme } from 'next-themes';



const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-1 py-1 text-2-sm md:text-sm rounded-lg justify-center  "
    >
      TM
    </button>
  );
};

export default Button;

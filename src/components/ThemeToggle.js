import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

 
  return (
    <div className="fixed right-4 top-20 z-50">
      <button
        onClick={() => setDark(!dark)}
        className="p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white transition"
        title="Toggle Dark Mode"
      >
        {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>
    </div>
  );
}
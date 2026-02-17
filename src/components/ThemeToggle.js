import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const PALETTES = [
  { id: 'aurora', label: 'Aurora', colors: ['#818cf8', '#c084fc', '#f472b6'] },
  { id: 'sage', label: 'Sage', colors: ['#86efac', '#34d399', '#fbbf24'] },
  { id: 'frost', label: 'Frost', colors: ['#60a5fa', '#818cf8', '#fb923c'] },
];

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'dark');
  const [palette, setPalette] = useState(() => localStorage.getItem('palette') || 'aurora');
  const [showPalettes, setShowPalettes] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', palette);
    root.setAttribute('data-mode', mode);
    localStorage.setItem('mode', mode);
    localStorage.setItem('palette', palette);
  }, [mode, palette]);

  const toggleMode = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Palette Picker */}
      <AnimatePresence>
        {showPalettes && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 p-3 rounded-2xl"
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border)',
              boxShadow: '0 8px 32px var(--shadow)',
            }}
          >
            {PALETTES.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setPalette(p.id);
                  setShowPalettes(false);
                }}
                className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 group"
                style={{
                  background: palette === p.id ? 'rgba(var(--accent-rgb), 0.1)' : 'transparent',
                }}
                title={p.label}
              >
                {/* Color dots */}
                <div className="flex -space-x-1">
                  {p.colors.map((c, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: c,
                        borderColor: 'var(--bg-primary)',
                        zIndex: 3 - i,
                      }}
                    />
                  ))}
                </div>
                <span
                  className="text-xs font-medium"
                  style={{
                    color: palette === p.id ? 'var(--accent)' : 'var(--text-secondary)',
                  }}
                >
                  {p.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Row: Palette button + Mode toggle */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
      >
        {/* Palette button */}
        <button
          onClick={() => setShowPalettes(!showPalettes)}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 group"
          style={{
            background: 'var(--card-bg)',
            border: '1.5px solid var(--border)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px var(--shadow)',
          }}
          title="Change color theme"
          aria-label="Change color palette"
        >
          <div className="flex -space-x-0.5">
            {PALETTES.find((p) => p.id === palette)?.colors.map((c, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full group-hover:scale-110 transition-transform"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </button>

        {/* Dark/Light toggle */}
        <button
          onClick={toggleMode}
          className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: 'var(--card-bg)',
            border: '1.5px solid var(--border)',
            color: 'var(--accent)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px var(--shadow)',
          }}
          title={mode === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          aria-label="Toggle dark/light mode"
        >
          <motion.span
            key={mode}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex"
          >
            {mode === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </motion.span>
        </button>
      </motion.div>
    </div>
  );
}

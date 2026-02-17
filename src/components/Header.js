import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setToggleMenu(false);
    };
    if (toggleMenu) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [toggleMenu]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
      style={{ boxShadow: scrolled ? '0 4px 30px var(--shadow)' : 'none' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tight relative group">
          <span style={{ color: 'var(--text-muted)' }}>&lt;</span>
          <span className="gradient-text">Sumanth</span>
          <span style={{ color: 'var(--text-muted)' }}> /&gt;</span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
            style={{ background: `linear-gradient(90deg, var(--gradient-from), var(--gradient-to))` }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <a
                    href={link.href}
                    className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                      background: isActive ? 'rgba(var(--accent-rgb), 0.08)' : 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.target.style.color = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: 'var(--accent)' }}
                      />
                    )}
                  </a>
                </motion.li>
              );
            })}
            <li className="ml-2">
              <a href="#contact" className="btn-outline !text-xs !px-5 !py-2.5">
                Let's Talk
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden z-50"
          style={{ color: 'var(--accent)' }}
          aria-label="Toggle menu"
        >
          {toggleMenu ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {toggleMenu && (
          <>
            {/* Overlay — closes menu on click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 md:hidden"
              style={{ background: 'rgba(0,0,0,0.5)' }}
              onClick={() => setToggleMenu(false)}
              aria-hidden="true"
            />
            <motion.nav
              ref={menuRef}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 w-4/5 h-screen flex items-center justify-center md:hidden"
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(24px)',
                borderLeft: '1px solid var(--border)',
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <ul className="flex flex-col items-center gap-6">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setToggleMenu(false)}
                      className="text-lg font-medium transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <li>
                  <a
                    href="#contact"
                    onClick={() => setToggleMenu(false)}
                    className="btn-outline text-sm"
                  >
                    Let's Talk
                  </a>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

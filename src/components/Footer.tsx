import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com/jebin-joel', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/jebin-joel', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:jebinjoel17y@gmail.com', label: 'Email' },
];

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0);
      setShowScrollTop(scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <footer
      className="relative pt-16 pb-8 px-6"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Brand */}
          <div>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-xl font-heading mb-3"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}
            >
              JJ
            </div>
            <p className="text-sm max-w-xs" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              AI/ML Engineer building intelligent systems that ship real impact.
            </p>
            <div className="flex gap-3 mt-4">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                  whileHover={{ scale: 1.1, color: '#7C3AED' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-sm transition-colors duration-200 hover:text-violet-500"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact snippet */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>
              Contact
            </p>
            <div className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <p>jebinjoel17y@gmail.com</p>
              <p>Thoothukudi, India</p>
              <p>Open to Work</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              © {new Date().getFullYear()} Jebin Joel. All rights reserved.
            </p>
            <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
              Designed &amp; Built by{' '}
              <span className="gradient-text font-semibold">Jebin Joel</span>
              <span style={{ color: '#EF4444' }}>♥</span>
            </p>
          </div>
        </div>
      </div>

      {/* Back to top with scroll progress */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center z-40"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              color: 'var(--accent-violet)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            {/* Progress ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r={radius}
                fill="none"
                stroke="var(--border)"
                strokeWidth="2"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                fill="none"
                stroke="url(#footerGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
              />
              <defs>
                <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
            <ArrowUp size={16} className="relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

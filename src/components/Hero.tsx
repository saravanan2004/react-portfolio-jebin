import { motion } from 'framer-motion';
import { Download, ArrowDown, ExternalLink } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import NeuralCanvas from './NeuralCanvas';

const roles = [
  'Generative AI Engineer',
  'RAG Architect',
  'ML Pipeline Builder',
  'Full-Stack AI Developer',
];

const floatingBadges = [
  { label: 'GPT-4o', style: { top: '18%', left: '8%' } },
  { label: 'LangChain', style: { top: '28%', right: '7%' } },
  { label: 'RAG', style: { bottom: '30%', left: '5%' } },
  { label: 'FastAPI', style: { bottom: '20%', right: '8%' } },
  { label: 'Python', style: { top: '60%', left: '12%' } },
  { label: 'Qdrant', style: { top: '45%', right: '5%' } },
];

export default function Hero() {
  const text = useTypewriter(roles, 80, 40, 2200);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <NeuralCanvas />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Floating badges */}
      {floatingBadges.map((badge, i) => (
        <motion.div
          key={badge.label}
          className="absolute hidden md:block glass rounded-full px-3 py-1 text-xs font-mono pointer-events-none"
          style={{ ...badge.style, color: 'var(--accent-cyan)', borderColor: 'rgba(6,182,212,0.3)' }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        >
          {badge.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-24 pb-16">
        {/* Profile photo placeholder with ring */}
        <motion.div
          className="relative inline-block mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'backOut' }}
        >
          <div
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto overflow-hidden"
            style={{
              border: '3px solid transparent',
              background: 'linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, linear-gradient(135deg, #7C3AED, #06B6D4) border-box',
              boxShadow: '0 0 40px rgba(124, 58, 237, 0.4)',
            }}
          >
            <img
              src="/1768796069071.jpg.jpeg"
              alt="Jebin Joel"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rotating ring */}
          <motion.div
            className="absolute inset-[-6px] rounded-full pointer-events-none"
            style={{
              border: '2px dashed rgba(124, 58, 237, 0.5)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />

          {/* Available dot */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-green-500 rounded-full px-2 py-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white text-[10px] font-medium">Open to Work</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading leading-none mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span style={{ color: 'var(--text-primary)' }}>Jebin </span>
          <span className="gradient-text">Joel</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          className="h-8 md:h-10 flex items-center justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span
            className="text-lg md:text-xl lg:text-2xl font-mono font-medium"
            style={{ color: 'var(--accent-cyan)' }}
          >
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10"
          style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Building Intelligent Systems.{' '}
          <span className="gradient-text font-semibold">Shipping Real Impact.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            onClick={e => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            View Projects
          </motion.a>

          <motion.a
            href="#"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10 mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[
            { value: '8.037', label: 'CGPA' },
            { value: '73.75%', label: 'Query Accuracy' },
            { value: '<1s', label: 'Latency' },
            { value: '3+', label: 'Awards' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading gradient-text">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--accent-violet)' }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

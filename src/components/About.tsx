import { motion } from 'framer-motion';
import { GraduationCap, Brain, Zap, Trophy } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stats = [
  {
    icon: GraduationCap,
    value: '8.037',
    label: 'CGPA',
    sub: 'B.Tech AI & Data Science',
    color: '#7C3AED',
  },
  {
    icon: Brain,
    value: '73.75%',
    label: 'Query Accuracy',
    sub: 'NL-to-SQL RAG System',
    color: '#06B6D4',
  },
  {
    icon: Zap,
    value: '<1s',
    label: 'Latency',
    sub: 'Real-time AI Processing',
    color: '#10B981',
  },
  {
    icon: Trophy,
    value: '3+',
    label: 'Awards',
    sub: 'Recognitions & Honours',
    color: '#F59E0B',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative" style={{ background: 'var(--bg-surface)' }}>
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #7C3AED 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="tag-badge-cyan mb-3 inline-block">Who I Am</span>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Left - Abstract circuit illustration */}
          <motion.div
            className="relative flex items-center justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '2px solid rgba(124, 58, 237, 0.3)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              {/* Middle ring */}
              <motion.div
                className="absolute inset-8 rounded-full"
                style={{
                  border: '2px solid rgba(6, 182, 212, 0.3)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              {/* Inner ring */}
              <motion.div
                className="absolute inset-16 rounded-full"
                style={{
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center brain icon */}
              <div
                className="absolute inset-0 m-auto w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  boxShadow: '0 0 40px rgba(124, 58, 237, 0.2)',
                }}
              >
                <Brain size={40} style={{ color: '#7C3AED' }} />
              </div>

              {/* Orbit dots */}
              {[0, 1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: i % 2 === 0 ? '#7C3AED' : '#06B6D4',
                    top: '50%',
                    left: '50%',
                    boxShadow: `0 0 8px ${i % 2 === 0 ? '#7C3AED' : '#06B6D4'}`,
                  }}
                  animate={{
                    rotate: [i * 90, i * 90 + 360],
                    x: [Math.cos(i * 1.57) * 120 - 6, Math.cos(i * 1.57 + 6.28) * 120 - 6],
                    y: [Math.sin(i * 1.57) * 120 - 6, Math.sin(i * 1.57 + 6.28) * 120 - 6],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold font-heading mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              AI/ML Engineer &amp;{' '}
              <span className="gradient-text">GenAI Specialist</span>
            </h3>
            <div className="space-y-4 text-base md:text-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <p>
                I'm a performance-driven AI/ML Engineer pursuing my B.Tech in Artificial Intelligence
                and Data Science at Sethu Institute of Technology, graduating in 2026.
              </p>
              <p>
                I specialize in{' '}
                <span style={{ color: 'var(--accent-violet)' }} className="font-semibold">
                  Generative AI, Retrieval-Augmented Generation (RAG)
                </span>{' '}
                architectures, and end-to-end ML pipelines — turning complex AI capabilities
                into real-world, production-ready solutions.
              </p>
              <p>
                From building NL-to-SQL systems that achieve{' '}
                <span style={{ color: 'var(--accent-cyan)' }} className="font-semibold">
                  73.75% query accuracy
                </span>{' '}
                to deploying wellness AI ecosystems with sub-second latency, I thrive at
                the intersection of intelligent systems and impactful engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {['Python', 'LangChain', 'GPT-4o', 'FastAPI', 'RAG', 'Vector DBs'].map(skill => (
                <span key={skill} className="tag-badge">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {stats.map(stat => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-5 md:p-6 text-center group hover:scale-[1.03] transition-transform duration-300"
              variants={fadeUp}
              style={{ boxShadow: `0 4px 20px ${stat.color}15` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${stat.color}20`, color: stat.color }}
              >
                <stat.icon size={22} />
              </div>
              <div
                className="text-2xl md:text-3xl font-bold font-heading mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {stat.label}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

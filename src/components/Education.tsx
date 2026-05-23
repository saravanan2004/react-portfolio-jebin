import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const certificates = [
  { name: 'AI for Data Engineers', org: 'Skill India', color: '#7C3AED' },
  { name: 'Internet of Things', org: 'NPTEL', color: '#06B6D4' },
  { name: 'Cloud Computing', org: 'NPTEL', color: '#10B981' },
  { name: 'Software Testing', org: 'NPTEL', color: '#F59E0B' },
  { name: 'E-Yantra Teachers Competition', org: 'IIT Bombay', color: '#EF4444' },
  { name: 'Robotics Internship I & II', org: 'E-Yantra', color: '#8B5CF6' },
];

function CircularProgress({ value, max, label }: { value: number; max: number; label: string }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const percentage = value / max;

  return (
    <div className="relative flex flex-col items-center">
      <svg width="130" height="130" viewBox="0 0 130 130" className="-rotate-90">
        {/* Background circle */}
        <circle
          cx="65"
          cy="65"
          r={radius}
          fill="none"
          stroke="var(--border)"
          strokeWidth="6"
        />
        {/* Progress circle */}
        <motion.circle
          cx="65"
          cy="65"
          r={radius}
          fill="none"
          stroke="url(#cgpaGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - percentage) }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="cgpaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold font-heading gradient-text">{value}</span>
        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{label}</span>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="tag-badge mb-3 inline-block">Academic Background</span>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education card */}
          <motion.div
            className="glass rounded-2xl p-7 md:p-8"
            style={{ boxShadow: '0 4px 24px rgba(124, 58, 237, 0.12)' }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}
              >
                <GraduationCap size={26} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading" style={{ color: 'var(--text-primary)' }}>
                  B.Tech — AI & Data Science
                </h3>
                <p className="text-sm mt-0.5" style={{ color: 'var(--accent-violet)' }}>
                  Sethu Institute of Technology
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6" style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
              <CircularProgress value={8.037} max={10} label="CGPA / 10" />
              <div className="flex-1">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Duration</span>
                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>2022 – 2026</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Specialization</span>
                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>Artificial Intelligence<br />& Data Science</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2 p-3 rounded-xl" style={{ background: 'rgba(124, 58, 237, 0.08)' }}>
              <BookOpen size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#7C3AED' }} />
              <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Coursework: Machine Learning, Deep Learning, NLP, Computer Vision, Data Structures, Cloud Computing, IoT Systems
              </p>
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Award size={22} style={{ color: '#7C3AED' }} />
              <h3 className="text-xl font-bold font-heading" style={{ color: 'var(--text-primary)' }}>
                Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="glass flex items-center gap-4 p-4 rounded-xl hover:scale-[1.01] transition-transform duration-200"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{ boxShadow: `0 2px 12px ${cert.color}10` }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: `${cert.color}18`, color: cert.color }}
                  >
                    <Award size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>
                      {cert.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: cert.color }}>
                      {cert.org}
                    </p>
                  </div>
                  <div
                    className="text-xs font-mono px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: `${cert.color}15`, color: cert.color }}
                  >
                    Verified
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

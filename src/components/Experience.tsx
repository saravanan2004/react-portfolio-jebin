import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const experiences = [
  {
    role: 'Data Analyst',
    company: 'Standard Insights',
    duration: 'Jan 2026 – Present',
    type: 'Current',
    color: '#7C3AED',
    highlights: [
      'Developed NL-to-SQL RAG pipeline using GPT-4o and Qdrant vector database',
      'Automated real-time ERP data retrieval via plain English queries',
      'Achieved 73.75% query accuracy with self-healing logic and conversational memory',
      'Reduced manual SQL query time by 60% through intelligent natural language interface',
    ],
    techStack: ['GPT-4o', 'Qdrant', 'Python', 'FastAPI', 'LangChain', 'SQL', 'RAG'],
  },
  {
    role: 'AI Engineer',
    company: 'Actech',
    duration: 'Aug 2025 – Jan 2026',
    type: 'Completed',
    color: '#06B6D4',
    highlights: [
      'Built comprehensive wellness ecosystem using FastAPI and GPT for real-time AI coaching',
      'Integrated health telemetry with localized sync achieving sub-second processing latency',
      'Designed conversational AI flows for personalized wellness recommendations',
      'Deployed scalable microservices architecture handling concurrent user sessions',
    ],
    techStack: ['FastAPI', 'GPT', 'Python', 'Health Telemetry', 'REST APIs', 'Docker'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="tag-badge-cyan mb-3 inline-block">Work History</span>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            Journey <span className="gradient-text">So Far</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              className="w-full timeline-line rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.2 }}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${exp.color}, ${i === 0 ? '#06B6D4' : '#7C3AED'})`,
                      boxShadow: `0 0 20px ${exp.color}50`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 200 }}
                    whileInView-second={{ boxShadow: [`0 0 10px ${exp.color}50`, `0 0 30px ${exp.color}80`, `0 0 10px ${exp.color}50`] }}
                  >
                    <Briefcase size={20} className="text-white" />
                  </motion.div>
                </div>

                {/* Spacer for center alignment on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content card */}
                <div className="ml-16 md:ml-0 md:w-1/2">
                  <motion.div
                    className="glass rounded-2xl p-6 md:p-7 hover:scale-[1.01] transition-transform duration-300"
                    style={{ boxShadow: `0 4px 24px ${exp.color}15` }}
                    whileHover={{ boxShadow: `0 8px 40px ${exp.color}25` }}
                  >
                    {/* Role & company */}
                    <div className="flex flex-wrap items-start gap-3 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className="text-xl font-bold font-heading"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {exp.role}
                          </h3>
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{
                              background: `${exp.color}20`,
                              color: exp.color,
                              border: `1px solid ${exp.color}30`,
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <p
                          className="text-base font-semibold"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div
                        className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full"
                        style={{
                          background: 'var(--bg-primary)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border)',
                        }}
                      >
                        <Calendar size={12} />
                        {exp.duration}
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map(h => (
                        <li key={h} className="flex gap-2 text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map(tech => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-full"
                          style={{
                            background: `${exp.color}12`,
                            color: exp.color,
                            border: `1px solid ${exp.color}25`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

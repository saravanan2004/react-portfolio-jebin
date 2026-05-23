import { motion } from 'framer-motion';
import { Brain, Code2, Server, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const skillGroups = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED, #a855f7)',
    skills: [
      'RAG Architectures', 'LLMs (GPT / Llama)', 'LangChain', 'Prompt Engineering',
      'Hugging Face', 'Scikit-learn', 'Pandas', 'NumPy', 'NLP', 'Computer Vision',
      'Feature Engineering',
    ],
    featured: [
      { name: 'LangChain', level: 90 },
      { name: 'Prompt Engineering', level: 88 },
      { name: 'RAG', level: 92 },
    ],
  },
  {
    icon: Code2,
    title: 'Languages & Data',
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4, #0ea5e9)',
    skills: [
      'Python', 'SQL', 'C++', 'JavaScript',
      'Pinecone', 'Chroma', 'Qdrant', 'MySQL', 'MongoDB',
    ],
    featured: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 85 },
      { name: 'Vector DBs', level: 88 },
    ],
  },
  {
    icon: Server,
    title: 'Full-Stack & Deployment',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    skills: [
      'FastAPI', 'Flask', 'Node.js', 'REST APIs', 'React.js',
      'Tailwind CSS', 'Docker', 'Git/GitHub', 'CI/CD', 'MLOps Basics',
    ],
    featured: [
      { name: 'FastAPI', level: 90 },
      { name: 'Docker', level: 78 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    icon: Star,
    title: 'Others',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #d97706)',
    skills: [
      'Technical Writing', 'Data-Driven Problem Solving',
      'Technical Blogging', 'Open Source Contribution',
      'System Design', 'Agile / Scrum',
    ],
    featured: [],
  },
];

function ProgressBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <motion.div
      className="mb-3"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'var(--border)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="tag-badge mb-3 inline-block">Technical Stack</span>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            The tools, frameworks, and technologies I wield to build intelligent systems.
          </p>
        </motion.div>

        {/* Skill groups grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {skillGroups.map(group => (
            <motion.div
              key={group.title}
              className="glass rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 group"
              variants={fadeUp}
              style={{ boxShadow: `0 4px 24px ${group.color}15` }}
            >
              {/* Card header */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: group.gradient, opacity: 0.95 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                  <group.icon size={20} />
                </div>
                <h3 className="font-bold text-lg text-white font-heading">{group.title}</h3>
              </div>

              {/* Card body */}
              <div className="p-5 md:p-6">
                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {group.skills.map(skill => (
                    <motion.span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                      style={{
                        background: `${group.color}12`,
                        color: group.color,
                        border: `1px solid ${group.color}25`,
                      }}
                      whileHover={{
                        background: `${group.color}25`,
                        boxShadow: `0 0 10px ${group.color}30`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Progress bars */}
                {group.featured.length > 0 && (
                  <div className="pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                    {group.featured.map(feat => (
                      <ProgressBar key={feat.name} {...feat} color={group.color} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

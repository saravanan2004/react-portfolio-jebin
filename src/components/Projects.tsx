import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Heart, Shield, Plane, Bot, BarChart2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const projects = [
  {
    icon: Brain,
    title: 'NL-to-SQL RAG Pipeline',
    company: 'Standard Insights',
    description:
      'Production-grade natural language to SQL system using GPT-4o and Qdrant vector database. Features self-healing query logic, conversational memory, and automated ERP data retrieval.',
    highlight: '73.75% query accuracy',
    tech: ['GPT-4o', 'Qdrant', 'Python', 'FastAPI', 'LangChain', 'RAG'],
    color: '#7C3AED',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Heart,
    title: 'Wellness AI Ecosystem',
    company: 'Actech',
    description:
      'Comprehensive AI-powered wellness platform with real-time coaching, health telemetry integration, and personalized recommendations. Built for scale with sub-second response times.',
    highlight: 'Sub-second latency',
    tech: ['FastAPI', 'GPT', 'Python', 'Health Telemetry', 'Docker', 'REST APIs'],
    color: '#06B6D4',
    image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Shield,
    title: 'AcadLedger',
    company: 'Blockchain Document Verification',
    description:
      'Tamper-proof academic certificate verification system built on Polygon blockchain. Uses AI similarity analysis to detect document fraud and verify authenticity in real-time.',
    highlight: 'Tamper-proof verification',
    tech: ['Polygon Blockchain', 'Python', 'AI/ML', 'Solidity', 'Web3.js'],
    color: '#10B981',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Plane,
    title: 'TraBud — AI Travel Bot',
    company: 'Personal Project',
    description:
      'Intelligent AI travel companion that provides personalized trip planning, tourist spot recommendations, itinerary generation, and budget estimation using advanced LLMs.',
    highlight: 'Smart trip planning',
    tech: ['LLMs', 'NLP', 'Python', 'LangChain', 'FastAPI'],
    color: '#F59E0B',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Bot,
    title: 'EnviroBot',
    company: 'Smart Waste Segregation Robot',
    description:
      'Autonomous waste segregation robot using computer vision and IoT. Capable of real-time environment mapping, obstacle navigation, and multi-category waste classification. SIH shortlisted.',
    highlight: 'SIH 2023 shortlisted',
    tech: ['C', 'ATMEGA 2560', 'IoT', 'Computer Vision', 'Robotics'],
    color: '#EF4444',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: BarChart2,
    title: 'Amazon ML Challenge 2025',
    company: 'Hackathon',
    description:
      'Large-scale ML pipeline for the Amazon ML Challenge. Built comprehensive feature engineering, ensemble models, and optimized inference pipeline to compete on the official leaderboard.',
    highlight: 'Leaderboard ranking',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Feature Engineering'],
    color: '#8B5CF6',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2) * -8;
    const y = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2) * 8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden group"
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        boxShadow: hovered ? `0 20px 50px ${project.color}25` : `0 4px 24px ${project.color}10`,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
      }}
      variants={fadeUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 40%, ${project.color}cc 100%)`,
          }}
        />

        {/* Icon */}
        <div
          className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${project.color}20`, backdropFilter: 'blur(8px)', border: `1px solid ${project.color}40` }}
        >
          <project.icon size={20} style={{ color: project.color }} />
        </div>

        {/* Highlight badge */}
        <div
          className="absolute bottom-3 right-3 text-xs font-mono px-2.5 py-1 rounded-full text-white"
          style={{ background: `${project.color}cc`, backdropFilter: 'blur(8px)' }}
        >
          {project.highlight}
        </div>

        {/* Hover overlay with links */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ background: `${project.color}cc`, backdropFilter: 'blur(4px)' }}
        >
          <motion.button
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
          </motion.button>
          <motion.button
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-1">
          <h3 className="text-lg font-bold font-heading" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
          <p className="text-xs font-mono mt-0.5" style={{ color: project.color }}>
            {project.company}
          </p>
        </div>
        <p className="text-sm mt-2 mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full"
              style={{
                background: `${project.color}12`,
                color: project.color,
                border: `1px solid ${project.color}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="tag-badge-green mb-3 inline-block">Portfolio</span>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            From RAG pipelines to blockchain systems — projects that push the boundaries of AI.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

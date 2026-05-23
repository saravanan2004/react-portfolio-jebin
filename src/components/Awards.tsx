import { motion } from 'framer-motion';
import { Trophy, Medal, Users, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const awards = [
  {
    icon: Trophy,
    title: 'Best First Impression Award',
    org: 'Sethu Institute of Technology',
    description: 'Recognized for exceptional first impression and outstanding contributions during academic activities.',
    color: '#F59E0B',
    type: 'Gold',
  },
  {
    icon: Medal,
    title: 'Third Prize',
    org: 'Henosis Symposium, Dr. N.G.P. College of Education',
    description: 'Achieved third place in the technical symposium competition, demonstrating strong technical acumen and problem-solving skills.',
    color: '#CD7F32',
    type: 'Bronze',
  },
];

const leadership = [
  { icon: Users, title: 'Association President', org: 'Student Technical Body', color: '#7C3AED' },
  { icon: Star, title: 'E-Yantra Coordinator', org: "E-Yantra '23 Initiative", color: '#06B6D4' },
  { icon: Trophy, title: 'Hexaivita Symposium', org: "Coordinator '25", color: '#10B981' },
  { icon: Users, title: 'Maa Madurai Event', org: 'Event Coordinator', color: '#F59E0B' },
  { icon: Star, title: 'Happy Street', org: 'Community Coordinator', color: '#EF4444' },
];

export default function Awards() {
  return (
    <>
      {/* Awards Section */}
      <section id="awards" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="tag-badge-cyan mb-3 inline-block">Recognition</span>
            <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
              Honors &amp; <span className="gradient-text">Awards</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {awards.map(award => (
              <motion.div
                key={award.title}
                className="glass rounded-2xl p-6 md:p-7 hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden"
                variants={fadeUp}
                style={{ boxShadow: `0 4px 24px ${award.color}20` }}
                whileHover={{ boxShadow: `0 8px 40px ${award.color}30` }}
              >
                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 40%, ${award.color}08 50%, transparent 60%)`,
                  }}
                />

                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${award.color}20, ${award.color}30)`,
                      border: `2px solid ${award.color}30`,
                      boxShadow: `0 0 20px ${award.color}20`,
                    }}
                    animate={{ boxShadow: [`0 0 15px ${award.color}20`, `0 0 30px ${award.color}40`, `0 0 15px ${award.color}20`] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <award.icon size={26} style={{ color: award.color }} />
                  </motion.div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold font-heading" style={{ color: 'var(--text-primary)' }}>
                        {award.title}
                      </h3>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-full"
                        style={{ background: `${award.color}20`, color: award.color }}
                      >
                        {award.type}
                      </span>
                    </div>
                    <p className="text-sm font-medium mb-2" style={{ color: award.color }}>
                      {award.org}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-padding" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="tag-badge-green mb-3 inline-block">Community</span>
            <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
              Leadership &amp; <span className="gradient-text">Roles</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {leadership.map(role => (
              <motion.div
                key={role.title}
                className="glass rounded-2xl p-5 text-center hover:scale-105 transition-transform duration-300 cursor-default"
                variants={fadeUp}
                style={{ boxShadow: `0 4px 16px ${role.color}15` }}
                whileHover={{ boxShadow: `0 8px 30px ${role.color}25` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: `${role.color}18`, color: role.color }}
                >
                  <role.icon size={22} />
                </div>
                <p className="text-sm font-bold font-heading leading-tight mb-1" style={{ color: 'var(--text-primary)' }}>
                  {role.title}
                </p>
                <p className="text-xs" style={{ color: role.color }}>
                  {role.org}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

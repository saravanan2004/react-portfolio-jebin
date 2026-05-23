import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jebinjoel17y@gmail.com',
    href: 'mailto:jebinjoel17y@gmail.com',
    color: '#7C3AED',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Thoothukudi, India',
    href: null,
    color: '#06B6D4',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Jebin-Joel',
    href: 'https://linkedin.com/in/jebin-joel',
    color: '#0A66C2',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'M Jebin Joel',
    href: 'https://github.com/jebin-joel',
    color: '#10B981',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Floating shapes bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-[0.04]"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              background: i % 2 === 0 ? '#7C3AED' : '#06B6D4',
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="tag-badge mb-3 inline-block">Get In Touch</span>
          <h2 className="section-title" style={{ color: 'var(--text-primary)' }}>
            Let's Build Something{' '}
            <span className="gradient-text">Intelligent</span>
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Have a project in mind? Want to collaborate on AI/ML work? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left - contact info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="glass flex items-center gap-4 p-4 rounded-2xl hover:scale-[1.02] transition-transform duration-200 block"
                    style={{ boxShadow: `0 2px 12px ${info.color}12` }}
                  >
                    <ContactInfoInner info={info} />
                  </a>
                ) : (
                  <div
                    className="glass flex items-center gap-4 p-4 rounded-2xl"
                    style={{ boxShadow: `0 2px 12px ${info.color}12` }}
                  >
                    <ContactInfoInner info={info} />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Quote */}
            <motion.div
              className="glass rounded-2xl p-6 mt-6"
              style={{ borderLeft: '3px solid #7C3AED' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm italic" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                "I'm actively looking for opportunities in AI/ML engineering roles. Whether it's a full-time position, internship, or an exciting project — let's connect!"
              </p>
              <p className="text-sm font-semibold mt-3 gradient-text">— Jebin Joel</p>
            </motion.div>
          </motion.div>

          {/* Right - contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6 md:p-8" style={{ boxShadow: '0 4px 24px rgba(124, 58, 237, 0.12)' }}>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                      onFocus={e => e.target.style.borderColor = '#7C3AED'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={inputClass}
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                      }}
                      onFocus={e => e.target.style.borderColor = '#7C3AED'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="AI/ML Collaboration Opportunity"
                    className={inputClass}
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={e => e.target.style.borderColor = '#7C3AED'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={inputClass}
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      resize: 'vertical',
                      minHeight: '120px',
                    }}
                    onFocus={e => e.target.style.borderColor = '#7C3AED'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={submitting || submitted}
                  className="w-full btn-primary justify-center text-sm py-3.5"
                  whileHover={{ scale: submitting || submitted ? 1 : 1.02 }}
                  whileTap={{ scale: submitting || submitted ? 1 : 0.98 }}
                >
                  {submitted ? (
                    <>
                      <CheckCircle size={16} />
                      Message Sent!
                    </>
                  ) : submitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoInner({ info }: { info: typeof contactInfo[0] }) {
  return (
    <>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${info.color}18`, color: info.color }}
      >
        <info.icon size={18} />
      </div>
      <div>
        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>{info.label}</p>
        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{info.value}</p>
      </div>
    </>
  );
}

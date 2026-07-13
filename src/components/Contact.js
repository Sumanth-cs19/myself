import { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FiSend, FiCheck, FiGlobe } from 'react-icons/fi';

export default function Contact() {
  const config = {
    email: 'sumanthk458@gmail.com',
    github: 'https://github.com/Sumanth-cs19',
    linkedin: 'https://www.linkedin.com/in/konduru-sumanth-varma-320a5b1bb/',
    portfolio: 'https://konduruportfolio.vercel.app/',
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, sent, error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Web3Forms free contact form — replace YOUR_ACCESS_KEY with your actual key from https://web3forms.com
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '8a1495e6-e63b-471a-85a2-a2af33f0c4f8', // TODO: Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const contactCards = [
    { href: `mailto:${config.email}`, icon: AiOutlineMail, label: 'Email', value: config.email, external: false },
    { href: config.portfolio, icon: FiGlobe, label: 'Portfolio', value: 'konduruportfolio.vercel.app', external: true },
    { href: config.github, icon: AiOutlineGithub, label: 'GitHub', value: 'Sumanth-cs19', external: true },
    { href: config.linkedin, icon: AiOutlineLinkedin, label: 'LinkedIn', value: 'Konduru Sumanth Varma', external: true },
  ];

  const inputStyle = {
    background: 'var(--card-bg)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    backdropFilter: 'blur(10px)',
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 relative"
      style={{ background: 'rgba(var(--accent-rgb), 0.015)' }}
    >
      {/* Section divider at top */}
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      {/* Mesh blobs */}
      <div
        className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ background: 'var(--mesh-1)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl"
        style={{ background: 'var(--mesh-2)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm mb-4" style={{ color: 'var(--accent)' }}>
            What's Next?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Get In Touch
          </h2>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
            I'm currently looking for new opportunities. Whether you have a question, a
            project idea, or just want to say hi — my inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2"
                style={{
                  ...inputStyle,
                  '--tw-ring-color': 'rgba(var(--accent-rgb), 0.4)',
                }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 focus:ring-2"
                style={{
                  ...inputStyle,
                  '--tw-ring-color': 'rgba(var(--accent-rgb), 0.4)',
                }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="What would you like to say?"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-300 focus:ring-2"
                style={{
                  ...inputStyle,
                  '--tw-ring-color': 'rgba(var(--accent-rgb), 0.4)',
                }}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary inline-flex items-center gap-2"
              style={{ opacity: status === 'sending' ? 0.7 : 1 }}
            >
              {status === 'idle' && (
                <>
                  <FiSend size={16} /> Send Message
                </>
              )}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && (
                <>
                  <FiCheck size={16} /> Message Sent!
                </>
              )}
              {status === 'error' && 'Failed — Try Again'}
            </button>

            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Or email me directly at{' '}
              <a href={`mailto:${config.email}`} style={{ color: 'var(--accent)' }}>
                {config.email}
              </a>
            </p>
          </motion.form>

          {/* Right: Contact Cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {contactCards.map(({ href, icon: Icon, label, value, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="card-gradient p-5 flex items-center gap-4 group text-left"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(var(--accent-rgb), 0.1)' }}
                >
                  <Icon style={{ color: 'var(--accent)' }} size={20} />
                </div>
                <div>
                  <p
                    className="text-[11px] font-mono uppercase tracking-wider mb-0.5"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import HeroImg from '../assets/hero1.png';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const social = {
    instagram: 'https://www.instagram.com/sumanthlucky.792/',
    github: 'https://github.com/Sumanth-cs19',
    linkedin: 'https://www.linkedin.com/in/konduru-sumanth-varma-320a5b1bb/',
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh"
    >
      {/* Animated Mesh Blobs */}
      <div
        className="absolute top-1/4 left-[10%] w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-glow"
        style={{ background: 'var(--mesh-1)' }}
      />
      <div
        className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: 'var(--mesh-2)', animation: 'float 8s ease-in-out infinite reverse' }}
      />
      <div
        className="absolute top-[60%] left-[50%] w-[300px] h-[300px] rounded-full blur-3xl"
        style={{ background: 'var(--mesh-3)', animation: 'float 10s ease-in-out infinite' }}
      />

      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20 relative z-10">
        {/* Left: Text */}
        <motion.div
          className="md:w-3/5 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="font-mono text-sm md:text-base mb-5 tracking-wide"
            style={{ color: 'var(--accent)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <span style={{ color: 'var(--text-primary)' }}>Konduru</span>
            <br />
            <span className="gradient-text">Sumanth Varma.</span>
          </motion.h1>

          {/* Typed rotating subtitle */}
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 h-10 md:h-12"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2500,
                'ASP.NET Core | GenAI | Cloud',
                2500,
                'Software Engineer',
                2500,
                'ASP.NET Core | GenAI | Cloud',
                2500,
              ]}
              wrapper="h2"
              speed={40}
              deletionSpeed={60}
              repeat={Infinity}
              className="text-xl sm:text-2xl md:text-3xl font-bold"
            />
          </motion.div>

          <motion.p
            className="text-base md:text-lg max-w-xl mb-8 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            Software Engineer with around 3 years of experience building scalable backend
            systems, secure enterprise APIs, and AI-powered applications using{' '}
            <span style={{ color: 'var(--accent)' }}>ASP.NET Core</span>,{' '}
            <span style={{ color: 'var(--accent)' }}>C#</span>, and{' '}
            <span style={{ color: 'var(--accent)' }}>Angular</span>. Specialized in{' '}
            <span style={{ color: 'var(--accent-secondary)' }}>PostgreSQL</span>,
            Azure, and modern cloud technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center md:justify-start gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            {[
              { icon: AiOutlineGithub, link: social.github, label: 'GitHub' },
              { icon: AiOutlineLinkedin, link: social.linkedin, label: 'LinkedIn' },
              { icon: AiOutlineInstagram, link: social.instagram, label: 'Instagram' },
            ].map(({ icon: Icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="hover:-translate-y-1 transition-all duration-300"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-2/5 flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative group">
            {/* Gradient ring glow */}
            <div
              className="absolute -inset-5 rounded-full opacity-30 group-hover:opacity-50 blur-2xl transition-all duration-700"
              style={{ background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-via), var(--gradient-to))` }}
            />
            {/* Gradient border ring */}
            <div
              className="absolute -inset-1 rounded-full"
              style={{
                background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                padding: '3px',
              }}
            >
              <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-primary)' }} />
            </div>
            <img
              src={HeroImg}
              alt="Konduru Sumanth Varma"
              className="relative w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-2xl animate-float"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className="w-5 h-9 rounded-full flex justify-center pt-2"
          style={{ border: '1.5px solid var(--text-muted)' }}
        >
          <div
            className="w-1 h-2.5 rounded-full"
            style={{ background: 'var(--accent)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

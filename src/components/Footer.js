import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  const social = [
    { icon: AiOutlineGithub, link: 'https://github.com/Sumanth-cs19', label: 'GitHub' },
    {
      icon: AiOutlineLinkedin,
      link: 'https://www.linkedin.com/in/konduru-sumanth-varma-320a5b1bb/',
      label: 'LinkedIn',
    },
    {
      icon: AiOutlineInstagram,
      link: 'https://www.instagram.com/sumanthlucky.792/',
      label: 'Instagram',
    },
  ];

  return (
    <footer className="py-10 px-6 relative">
      {/* Gradient top border */}
      <div className="gradient-divider mb-10" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-5">
          {social.map(({ icon: Icon, link, label }) => (
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
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Credit */}
        <p className="text-xs font-mono text-center" style={{ color: 'var(--text-muted)' }}>
          Designed & Built by{' '}
          <span style={{ color: 'var(--accent)' }}>Konduru Sumanth Varma</span>
        </p>
        <p className="text-[11px] font-mono" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

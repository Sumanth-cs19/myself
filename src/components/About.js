import AboutImg from '../assets/about.jpg';
import { motion } from 'framer-motion';

export default function About() {
  const skills = {
    Languages: ['C#', 'JavaScript', 'Java', 'C++', 'HTML5', 'CSS3'],
    Frameworks: ['ASP.NET Core', 'ASP.NET MVC', 'Entity Framework', 'LINQ', 'React.js', 'Deck.GL'],
    Databases: ['Oracle', 'PL/SQL', 'MySQL', 'PostgreSQL', 'SQL Server', 'Redis'],
    DevOps: ['Git', 'Azure DevOps', 'CI/CD Pipelines', 'Postman', 'Apache NiFi'],
    Architecture: ['Microservices', 'System Design', 'RabbitMQ', 'JWT Auth', 'Design Patterns', 'SOLID'],
  };

  return (
    <section id="about" className="py-28 px-6 relative bg-dots">
      {/* Section divider at top */}
      <div className="gradient-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="section-heading">About Me</h2>
            <div
              className="flex-1 h-px hidden md:block"
              style={{ background: `linear-gradient(90deg, var(--border), transparent)` }}
            />
          </div>
        </motion.div>

        {/* flex-col-reverse so image shows first on mobile */}
        <div className="flex flex-col-reverse md:flex-row gap-16 items-start">
          {/* Text */}
          <motion.div
            className="md:w-3/5 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Hello! I'm{' '}
              <span className="font-semibold" style={{ color: 'var(--accent)' }}>
                Konduru Sumanth Varma
              </span>
              , a passionate Full Stack .NET Developer with 2 years of experience building
              scalable web applications. I specialize in microservices architecture, performance
              optimization, and cloud deployment on Azure.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              As a Software Development Engineer II at Jio Platforms Limited, I've delivered
              real-time analytics systems and enterprise security frameworks, consistently focusing
              on clean code, design patterns, and agile methodologies.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I thrive in cross-functional teams, contributing to robust backend systems with{' '}
              <span style={{ color: 'var(--accent)' }}>.NET Core</span> and{' '}
              <span style={{ color: 'var(--accent)' }}>Oracle PL/SQL</span>, and crafting
              intuitive frontend experiences using{' '}
              <span style={{ color: 'var(--accent)' }}>React.js</span>.
            </p>

            {/* Currently Learning Badge */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                  style={{ background: 'var(--accent)' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ background: 'var(--accent)' }}
                />
              </span>
              <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                Currently exploring:{' '}
                <span style={{ color: 'var(--accent)' }}>System Design</span>,{' '}
                <span style={{ color: 'var(--accent-secondary)' }}>AWS</span>, &{' '}
                <span style={{ color: 'var(--accent)' }}>Docker</span>
              </span>
            </motion.div>

            {/* Skills Grid */}
            <div className="pt-6">
              <h3 className="font-semibold text-lg mb-6" style={{ color: 'var(--text-primary)' }}>
                Technologies I work with:
              </h3>
              {Object.entries(skills).map(([category, skillList], catIdx) => (
                <motion.div
                  key={category}
                  className="mb-5"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.08 }}
                  viewport={{ once: true }}
                >
                  <h4
                    className="text-xs font-bold mb-2.5 uppercase tracking-wider"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Gradient border decoration */}
              <div
                className="absolute -inset-1 rounded-xl opacity-50 group-hover:opacity-80 blur-sm transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, var(--gradient-from), var(--gradient-to))`,
                }}
              />
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={AboutImg}
                  alt="Sumanth at work"
                  className="w-full max-w-sm rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                {/* Tint overlay */}
                <div
                  className="absolute inset-0 hover:bg-transparent transition-all duration-500 rounded-xl"
                  style={{ background: 'rgba(var(--accent-rgb), 0.08)' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

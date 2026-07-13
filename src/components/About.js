import AboutImg from '../assets/about.jpg';
import { motion } from 'framer-motion';

export default function About() {
  const skills = {
    Languages: ['C#', 'Java', 'Python', 'SQL', 'JavaScript', 'TypeScript'],
    Backend: ['ASP.NET Core', 'Web API', 'Entity Framework Core', 'LINQ', 'ADO.NET', 'REST APIs'],
    Frontend: ['Angular', 'React', 'HTML', 'CSS'],
    AI: ['OpenAI APIs', 'Azure OpenAI', 'RAG', 'Embeddings', 'Semantic Search', 'Server-Sent Events'],
    Databases: ['PostgreSQL', 'pgvector', 'Oracle', 'SQL Server', 'PL/SQL', 'Redis'],
    'Cloud and DevOps': ['Microsoft Azure', 'Azure DevOps', 'Docker', 'CI/CD', 'Git', 'GitHub Actions', 'Postman'],
    'Architecture and Security': [
      'Clean Architecture',
      'Microservices',
      'JWT',
      'Azure AD',
      'RBAC',
      'SOLID Principles',
      'Design Patterns',
      'Multithreading',
      'Concurrency',
    ],
    Testing: ['xUnit', 'NUnit', 'Unit Testing', 'Code Reviews', 'Debugging'],
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
              I am a Software Engineer with around 3 years of experience in backend development,
              enterprise API design, performance optimization, and AI-enabled application
              development.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              My core expertise includes C#, ASP.NET Core, REST APIs, Clean Architecture,
              PostgreSQL, Oracle, Redis, Azure, Angular, JWT, Azure AD, and role-based access
              control.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I currently work on GenAI-driven enterprise solutions, integrating OpenAI models,
              orchestrating AI workflows, and building secure and maintainable backend services.
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
                <span style={{ color: 'var(--accent)' }}>GenAI</span>,{' '}
                <span style={{ color: 'var(--accent-secondary)' }}>RAG</span>, &{' '}
                <span style={{ color: 'var(--accent)' }}>Cloud</span>
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

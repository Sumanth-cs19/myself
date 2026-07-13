import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiDownload } from 'react-icons/fi';

export default function Resume() {
  const experience = [
    {
      title: 'Packaged App Development Analyst',
      company: 'Accenture',
      period: 'Apr 2026 - Present',
      location: 'Chennai, India',
      points: [
        'Developed scalable ASP.NET Core Web APIs using Clean Architecture.',
        'Integrated OpenAI models into enterprise AI-assisted workflows.',
        'Built console applications and Web APIs for AI interactions, data processing, and business logic.',
        'Implemented secure authentication and authorization using JWT and Azure AD.',
      ],
    },
    {
      title: 'Software Development Engineer II',
      company: 'Jio Platforms Limited',
      period: 'Oct 2023 - Apr 2026',
      location: 'Navi Mumbai, India',
      points: [
        'Improved a high-volume C# spatial-data pipeline from 9 to 520 records per second using multithreading and concurrency.',
        'Developed secure .NET Core APIs with JWT authentication and RBAC.',
        'Implemented Redis-based caching to improve data retrieval and API response time.',
        'Optimized Oracle queries on large datasets using partitioning and composite indexes.',
        'Built reusable authorization filters for enterprise modules and roles.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      school: 'College of Engineering Guindy, Anna University',
      period: '2019 - 2023',
      location: 'Chennai, India',
      details: 'CGPA: 8.39/10.0',
      coursework:
        'Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Object-Oriented Programming, Software Engineering, Cryptography & Network Security.',
    },
  ];

  return (
    <section id="resume" className="py-28 px-6 relative bg-dots">
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
          <div className="flex items-center gap-4 mb-14">
            <h2 className="section-heading">Where I've Worked</h2>
            <div
              className="flex-1 h-px hidden md:block"
              style={{ background: `linear-gradient(90deg, var(--border), transparent)` }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(var(--accent-rgb), 0.1)' }}
              >
                <FiBriefcase style={{ color: 'var(--accent)' }} size={18} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Experience
              </h3>
            </div>

            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div
                className="absolute left-[6px] top-3 bottom-3 w-px"
                style={{
                  background: `linear-gradient(to bottom, var(--accent), rgba(var(--accent-rgb), 0.1))`,
                }}
              />

              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="timeline-dot absolute left-0 top-1.5" />

                  <div className="card-gradient p-6">
                    <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                      {exp.title}
                    </h4>
                    <p
                      className="font-mono text-sm mb-1"
                      style={{ color: 'var(--accent)' }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="text-sm font-mono mb-4"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {exp.period} - {exp.location}
                    </p>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: 'var(--accent)' }}
                          />
                          <span style={{ color: 'var(--text-secondary)' }}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(var(--accent-secondary-rgb), 0.1)' }}
              >
                <FiBookOpen style={{ color: 'var(--accent-secondary)' }} size={18} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Education
              </h3>
            </div>

            <div className="space-y-8 relative">
              <div
                className="absolute left-[6px] top-3 bottom-3 w-px"
                style={{
                  background: `linear-gradient(to bottom, var(--accent-secondary), rgba(var(--accent-secondary-rgb), 0.1))`,
                }}
              />

              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-8">
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 absolute left-0 top-1.5"
                    style={{
                      borderColor: 'var(--accent-secondary)',
                      background: 'var(--bg-primary)',
                      boxShadow: '0 0 0 4px rgba(var(--accent-secondary-rgb), 0.1)',
                    }}
                  />

                  <div className="card-gradient p-6">
                    <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h4>
                    <p
                      className="font-mono text-sm mb-1"
                      style={{ color: 'var(--accent-secondary)' }}
                    >
                      {edu.school}
                    </p>
                    <p className="text-sm font-mono mb-3" style={{ color: 'var(--text-muted)' }}>
                      {edu.period} - {edu.location}
                    </p>
                    <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                      {edu.details}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {edu.coursework}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Resume */}
            <div className="mt-10">
              <a
                href="/resume.pdf"
                download="Konduru_Sumanth_Varma_Resume.pdf"
                className="btn-outline inline-flex items-center gap-2"
              >
                <FiDownload size={16} />
                Download Full Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

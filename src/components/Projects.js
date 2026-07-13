import aiKnowledgeAssistantImg from '../assets/ai-knowledge-assistant.jpg';
import objectClassifierImg from '../assets/imageclassifier.png';
import smartNotesImg from '../assets/note-making.jpg';
import { motion } from 'framer-motion';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      image: aiKnowledgeAssistantImg,
      alt: 'AI Knowledge Assistant dashboard and document chat interface',
      title: 'AI Knowledge Assistant',
      type: 'Enterprise RAG Platform',
      description:
        'Built and deployed an AI-powered enterprise knowledge assistant that allows users to upload PDF and DOCX files, indexes document content in PostgreSQL with pgvector, and answers questions using retrieval-augmented generation. The platform includes source-grounded responses, real-time SSE streaming, JWT authentication, role-based access control, document processing, conversation history, and admin analytics.',
      tech: [
        'ASP.NET Core',
        'C#',
        'Angular 21',
        'TypeScript',
        'PostgreSQL',
        'pgvector',
        'Groq',
        'RAG',
        'Docker',
        'Neon',
        'Render',
        'Vercel',
        'GitHub Actions',
      ],
      github: 'https://github.com/Sumanth-cs19/ai-knowledge-assistant',
      live: 'https://ai-knowledge-assistant-seven.vercel.app/',
    },
    {
      image: objectClassifierImg,
      alt: 'Object Classifier',
      title: 'Object Classifier',
      type: 'AI-Powered Detection App',
      description:
        'Built an intelligent object detection web app leveraging TensorFlow.js and COCO-SSD model. Features real-time webcam classification, bounding box visualization, prediction history with CSV export, and voice feedback.',
      tech: ['React', 'TensorFlow.js', 'COCO-SSD', 'Web APIs'],
      github: 'https://github.com/Sumanth-cs19',
      live: null,
    },
    {
      image: smartNotesImg,
      alt: 'Smart Notes & Flashcards',
      title: 'Smart Notes & Flashcards',
      type: 'Productivity Web App',
      description:
        'Developed a feature-rich productivity application with full CRUD operations, tag-based filtering, instant search, and offline persistence via LocalStorage. Responsive design with dark mode support.',
      tech: ['React', 'Tailwind CSS', 'LocalStorage'],
      github: 'https://github.com/Sumanth-cs19',
      live: null,
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 px-6 relative"
      style={{ background: 'rgba(var(--accent-rgb), 0.015)' }}
    >
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
            <h2 className="section-heading">Things I've Built</h2>
            <div
              className="flex-1 h-px hidden md:block"
              style={{ background: `linear-gradient(90deg, var(--border), transparent)` }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Tint overlay */}
                <div
                  className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500"
                  style={{ background: 'rgba(var(--accent-rgb), 0.1)' }}
                />
                {/* Type tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[11px] px-3 py-1.5 rounded-full font-mono font-medium"
                    style={{
                      background: 'var(--glass-bg)',
                      color: 'var(--accent)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title + Links Row */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        className="hover:-translate-y-0.5 transition-all duration-300"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        <AiOutlineGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="hover:-translate-y-0.5 transition-all duration-300"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge !text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import HeroImg from '../assets/hero1.png';
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: '.NET Full-Stack Developer | .NET Framework, React.js, .NET Core, Oracle, PL/SQL',
    social: {
      instagram: 'https://www.instagram.com/sumanthlucky.792/',
      github: 'https://github.com/Sumanth-cs19',
      linkedin: 'https://www.linkedin.com/in/konduru-sumanth-varma-320a5b1bb/',
    }
  };

  return (
   <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10 bg-primary text-white dark:bg-gray-900 dark:text-white transition-colors duration-500">
      {/* Left: Text Block */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi,<br />
          I’m <span className="text-cyan-300">Konduru Sumanth Varma</span>
        </h1>
        <p className="text-xl text-white/90">{config.subtitle}</p>

        <div className="flex justify-center md:justify-start gap-6 pt-4">
          <a href={config.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <AiOutlineInstagram size={30} className="hover:text-cyan-300 transition" />
          </a>
          <a href={config.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <AiOutlineGithub size={30} className="hover:text-cyan-300 transition" />
          </a>
          <a href={config.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <AiOutlineLinkedin size={30} className="hover:text-cyan-300 transition" />
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/3">
        <img
      src={HeroImg}
      alt="Konduru Sumanth Varma"
      className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-8 border-white dark:border-gray-700 shadow-xl mx-auto"
      />
      </div>
    </section>
  );
}

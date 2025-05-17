import AboutImg from '../assets/about.jpg';

export default function About() {
  const config = {
    line1:
      'Hi, I’m Konduru Sumanth Varma, a passionate .NET Full-Stack Developer. I specialize in building scalable, efficient, and maintainable web applications.',
    line2:
      'I’m proficient in frontend technologies like HTML, CSS, JavaScript, jQuery, React.js, and Next.js — enabling me to craft interactive and responsive user experiences.',
    line3:
      'On the backend, I work with ASP.NET Framework, .NET Core, Oracle, and write efficient queries and procedures using PL/SQL — ensuring robust business logic and optimized data handling.',
  };

   return (
    <section
      id="about"
      className="bg-secondary text-white dark:bg-gray-900 dark:text-white py-16 px-6 transition-colors duration-500"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 border-b-4 border-primary dark:border-white inline-block pb-1">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-5">{config.line1}</p>
          <p className="text-lg leading-relaxed mb-5">{config.line2}</p>
          <p className="text-lg leading-relaxed">{config.line3}</p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={AboutImg}
            alt="Illustration of developer at work"
            className="rounded-lg shadow-xl w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
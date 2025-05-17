import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
  const config = {
    link: '/resume.pdf', // must be inside public/
  };

  return (
<section
  id="resume"
  className="min-h-screen flex flex-col md:flex-row bg-secondary dark:bg-gray-900 text-white dark:text-white px-5 py-16 items-center justify-center transition-colors duration-500"
>
  {/* Image */}
  <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
    <img className="w-[300px] md:w-[400px]" src={ResumeImg} alt="Resume Illustration" />
  </div>

  {/* Text */}
  <div className="md:w-1/2 flex justify-center">
    <div className="flex flex-col justify-center text-center md:text-left">
      <h1 className="text-4xl border-b-4 border-primary dark:border-white mb-5 w-fit font-bold">Resume</h1>
      <p className="pb-5 text-lg">
        You can view my resume
        <a
          className="btn ml-2 inline-block"
          href={config.link}
          download="Konduru_Sumanth_Varma_Resume.pdf"
        >
          Download
        </a>
      </p>
    </div>
  </div>
</section>
  );
}

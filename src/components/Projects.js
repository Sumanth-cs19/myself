import websiteImg1 from '../assets/convo-pal.jpg';
import websiteImg2 from '../assets/banana.jpg';
import websiteImg3 from '../assets/note-making.jpg';

export default function Projects() {
  const projects = [
    {
      image: websiteImg1,
      title: 'Convo-pal',
      type: 'Web Application',
      description:
        'Real-time group chat with games using HTML, CSS, JS, PHP, and MySQL. Features authentication and message storage.',
      link: 'https://github.com/Sumanth-cs19/convo-pal',
    },
    {
      image: websiteImg2,
      title: 'Banana Classification',
      type: 'Dataset Classification',
      description:
        'Deep learning model using TensorFlow and transfer learning to classify banana ripeness with high accuracy.',
      link: 'https://drive.google.com/drive/folders/1f5iS5FSmqdhW30wot7_S-ZCevELjR7f8',
    },
    {
      image: websiteImg3,
      title: 'Note Making App',
      type: 'Web Application',
      description:
        'Lightweight browser note app with local storage, built using HTML, CSS, and JavaScript.',
      link: 'https://github.com/Sumanth-cs19/Notemaking',
    },
  ];

  return (
  <section id="projects" className="bg-primary dark:bg-gray-900 text-white dark:text-white py-16 px-4 transition-colors duration-500">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-4 border-b-4 border-secondary dark:border-white inline-block">Projects</h2>
    <p className="text-lg mb-10">
      Explore a selection of my projects, built using HTML, JavaScript, PHP, ML, and more.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform hover:scale-105"
        >
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="italic text-sm text-gray-600 dark:text-gray-300">{project.type}</p>
            <p className="text-sm mt-2">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
);
}
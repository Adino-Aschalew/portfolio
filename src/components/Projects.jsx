
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../index.css';
import heroImage from '../assets/image.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A responsive weather application that displays real-time weather data from the OpenWeatherMap API. It provides users with accurate temperature, humidity, and city-based weather updates in a sleek, modern interface..',
      image: '/images/project1.jpg',
      technologies: ['React', 'CSS3', 'Tailwindcss'],
      github: 'https://github.com/Adino-Aschalew/Weather-App',
      demo: 'https://ecommerce-demo.example.com'
    },
    {
      id: 2,
      title: 'Password Generator App',
      description: 'A secure password generator app that creates strong, customizable passwords instantly. It allows users to choose password length and character types through a clean and responsive interface.',
      image: '/images/project2.jpg', // Replace with your actual image
      technologies: ['React', 'CSS3', 'Tailwindcss'],
      github: 'https://github.com/Adino-Aschalew/Password-Generator',
      demo: 'https://taskmanager-demo.example.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills with a clean, modern design.',
      image: '/images/project3.jpg', // Replace with your actual image
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/Adino-Aschalew/portfolio',
      demo: 'https://yourportfolio.example.com'
    },
    {
      id: 4,
      title: 'Ethio-Road App',
      description: 'Ethio-Road is a visiting and travel service app that helps users explore famous destinations, hotels, and tourist attractions across Ethiopia. It provides real-time navigation, location details, and travel assistance to make trip planning easier and more enjoyable.',
      image: { heroImage }, // Replace with your actual image
      technologies: ['React', 'CSS', 'Redux'],
      github: 'https://github.com/Adino-Aschalew/Ethio-Road',
      demo: 'https://recipefinder-demo.example.com'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2>My <span>Projects</span></h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">A selection of my recent work and projects I've contributed to.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={heroImage}
                  alt={project.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/600x400/2d3748/ffffff?text=Project+Image';
                  }}
                />
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="project-icon" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink className="project-icon" />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-content">
                <h3>
                  <a
                    href={project.demo || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={project.demo ? 'View Live Demo' : 'View on GitHub'}
                  >
                    {project.title}
                  </a>
                </h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => {
                    // Determine the category based on the technology
                    const getCategory = (tech) => {
                      const frontend = ['React', 'Vue', 'Angular', 'Svelte', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Sass', 'jQuery'];
                      const backend = ['Node.js', 'Express', 'Django', 'Flask', 'Ruby on Rails', 'Laravel', 'Spring', 'ASP.NET', 'PHP'];
                      const database = ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Supabase', 'DynamoDB', 'Oracle'];
                      const api = ['REST API', 'GraphQL', 'gRPC', 'WebSockets', 'Socket.IO', 'tRPC'];

                      if (frontend.includes(tech)) return 'frontend';
                      if (backend.includes(tech)) return 'backend';
                      if (database.includes(tech)) return 'database';
                      if (api.includes(tech)) return 'api';
                      return 'tool';
                    };

                    const category = getCategory(tech);

                    return (
                      <span
                        key={index}
                        className="tech-tag"
                        data-category={category}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

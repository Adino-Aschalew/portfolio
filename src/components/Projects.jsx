import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../index.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
      image: '/images/project1.jpg', // Replace with your actual image
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://ecommerce-demo.example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: '/images/project2.jpg', // Replace with your actual image
      technologies: ['React', 'Firebase', 'Redux', 'Material-UI'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://taskmanager-demo.example.com'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills with a clean, modern design.',
      image: '/images/project3.jpg', // Replace with your actual image
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://yourportfolio.example.com'
    },
    {
      id: 4,
      title: 'Recipe Finder App',
      description: 'A mobile-first application to discover and save recipes based on available ingredients.',
      image: '/images/project4.jpg', // Replace with your actual image
      technologies: ['React Native', 'Spoonacular API', 'Redux'],
      github: 'https://github.com/yourusername/recipe-finder',
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
                  src={project.image} 
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

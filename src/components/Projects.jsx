import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features a sleek, modern UI with real-time cart updates.',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'A beautiful, drag-and-drop task management tool. Built with focus on micro-interactions and smooth animations to enhance user experience.',
      tags: ['React', 'Framer Motion', 'Firebase'],
      link: '#',
      github: '#'
    },
    {
      title: 'AI Chat Interface',
      description: 'A dark-themed, glassmorphic chat interface for an AI assistant. Focuses on premium typography and satisfying chat bubble animations.',
      tags: ['Vanilla CSS', 'JavaScript', 'OpenAI API'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="section container hidden">
      <h2 className="section-title text-gradient">Featured Projects</h2>
      
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card glass">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href={project.github} className="icon-link" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href={project.link} className="icon-link" aria-label="External Link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

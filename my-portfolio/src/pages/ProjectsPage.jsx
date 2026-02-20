function ProjectsPage() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-item">
        <h3>Task Management App</h3>
        <p>
          A full-stack task management application with authentication, CRUD
          operations, and role-based access.
        </p>
        <p className="tech">React - Node.js - MongoDB</p>
        <a
          href="https://github.com/yourusername/task-manager"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="project-item">
        <h3>E-commerce Platform</h3>
        <p>
          An e-commerce web app featuring product listings, cart, checkout
          flow, and admin dashboard.
        </p>
        <p className="tech">React - Express - Stripe</p>
        <a
          href="https://github.com/yourusername/ecommerce-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default ProjectsPage;

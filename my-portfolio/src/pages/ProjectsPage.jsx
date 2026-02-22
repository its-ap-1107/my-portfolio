function ProjectsPage() {
  const projects = [
    {
      title: "Task Management App",
      description:
        "A full-stack task management application with authentication, CRUD operations, and role-based access.",
      tech: "React - Node.js - MongoDB",
      link: "https://github.com/yourusername/task-manager",
    },
    {
      title: "E-commerce Platform",
      description:
        "An e-commerce web app featuring product listings, cart, checkout flow, and admin dashboard.",
      tech: "React - Express - Stripe",
      link: "https://github.com/yourusername/ecommerce-app",
    },
  ];

  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg md:p-8">
      <h2 className="mb-6 inline-block border-b-2 border-cyan-400 pb-1 text-2xl font-bold text-slate-100 md:text-3xl">
        Projects
      </h2>

      <div className="space-y-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-slate-700 bg-slate-800 p-5"
          >
            <h3 className="text-xl font-semibold text-slate-100">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300 md:text-base">
              {project.description}
            </p>
            <p className="mt-3 text-sm font-semibold text-amber-400">
              {project.tech}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-md border border-amber-500 bg-amber-400 px-3 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;

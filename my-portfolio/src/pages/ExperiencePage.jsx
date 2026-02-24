function ExperiencePage() {
  return (
    <section className="experience">
      <h2>Experience</h2>

      <div className="experience-item">
        <h3>Software Developer Intern</h3>
        <p className="company">Netwin Infosolutions - jan 2026 to Present</p>
        <ul>
          <li>
            {" "}
            Contributed to full-stack product development using React, Node.js,
            and Express in a production-scale envi ronment.
          </li>
          <li>
            {" "}
            Designed secure authentication flows using JWT with refresh token
            strategies and role-based access control
          </li>
          <li>
            Engineered PostgreSQL schemas and optimized queries reducing
            database response latency by 25%.
          </li>
          <li>
            {" "}
            Built a Project Management System to track milestone completion,
            sprint velocity, and delivery efficiency.
          </li>
          <li>
            Applied advanced React optimizations including custom hooks,
            memoization, and context performance tuning.
          </li>
        </ul>
      </div>

      
    </section>
  );
}

export default ExperiencePage;

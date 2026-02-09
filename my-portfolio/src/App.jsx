import "./App.css";
import Footer from "./assets/Footer";

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Amol Padamwar</h1>
        <p className="title">Software Developer</p>
        <p className="subtitle">
          Specialized in building scalable web applications
        </p>

        {/* Resume link */}
        <a
          href="/Amol_Padamwar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Download Resume
        </a>
      </header>

      <main>
        {/* About */}
        <section className="about">
          <h2>About Me</h2>
          <p>
            I am a software developer focused on building reliable, scalable,
            and maintainable web applications. I enjoy solving real-world
            problems, working with modern JavaScript frameworks, and improving
            application performance.
          </p>
        </section>

        {/* Experience */}
        <section className="experience">
          <h2>Experience</h2>

          <div className="experience-item">
            <h3>Software Developer Intern</h3>
            <p className="company">XYZ Company · 2024 – Present</p>
            <ul>
              <li>Built and maintained React-based user interfaces</li>
              <li>Integrated REST APIs using Node.js and Express</li>
              <li>
                Improved application performance and fixed production bugs
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Freelance Web Developer</h3>
            <p className="company">Self-employed · 2023 – 2024</p>
            <ul>
              <li>Developed full-stack web applications for clients</li>
              <li>Worked with React, Node.js, MongoDB, and REST APIs</li>
              <li>Deployed applications using Docker and cloud platforms</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="projects">
          <h2>Projects</h2>

          <div className="project-item">
            <h3>Task Management App</h3>
            <p>
              A full-stack task management application with authentication, CRUD
              operations, and role-based access.
            </p>
            <p className="tech">React · Node.js · MongoDB</p>
            <a
              href="https://github.com/yourusername/task-manager"
              target="_blank"
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
            <p className="tech">React · Express · Stripe</p>
            <a
              href="https://github.com/yourusername/ecommerce-app"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js & Express</li>
            <li>REST APIs</li>
            <li>MongoDB</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="contact">
          <h2>Contact</h2>
          <p>Email: amol@example.com</p>
          <p>Phone: +91 XXXXXXXXXX</p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/yourusername" target="_blank">
              github.com/yourusername
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/yourusername" target="_blank">
              linkedin.com/in/yourusername
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

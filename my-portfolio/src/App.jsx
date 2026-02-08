import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Amol Padamwar</h1>
        <p>I am a software Developer</p>
        <p>Specialized in building scalable web applications</p>
      </header>

      <main>
        <section className="about">
          <h2>About Me</h2>
          <p>
            I am a passionate software developer with expertise in creating
            scalable and efficient web applications. I love solving complex
            problems and learning new technologies.
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>A web application for managing tasks efficiently.</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>An e-commerce platform with a seamless user experience.</p>
            </li>
          </ul>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>CSS</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Email: amol@example.com</p>
          <p>Phone: +1234567890</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Amol Padamwar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

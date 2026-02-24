import "./App.css";
import Footer from "./assets/Footer";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
// import NeumorphButton from "./components/NeuMorphButton";
// import CallToAction from "./components/CallToAction";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
    <div className="portfolio-container">
      <Header
        name="Amol Padamwar"
        title="Software Developer"
        subtitle="Specialized in building scalable web applications"
        navLinks={navLinks}
      />

      <main>
        <div id="home">
          <HomePage />
        </div>
        <div id="about">
          <AboutPage />
        </div>
        <div id="experience">
          <ExperiencePage />
        </div>
        <div id="projects">
          <ProjectsPage />
        </div>
        <div id="skills">
          <SkillsPage />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
        {/* <NeumorphButton>click me</NeumorphButton>
        <CallToAction /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;

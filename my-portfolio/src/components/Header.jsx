function Header({
  name,
  title,
  subtitle,
  navLinks,
  resumeHref = "/Amol_Padamwar_Resume.pdf",
}) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>

      <nav className="header-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={resumeHref}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        Download Resume
      </a>
    </header>
  );
}

export default Header;

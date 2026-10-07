import { useState } from "react";
import "./App.css";

const skills = [
  {
    name: "HTML",
    image: "https://cdn.simpleicons.org/html5",
  },
  {
    name: "CSS",
    image: "https://cdn.simpleicons.org/css",
  },
  {
    name: "JavaScript",
    image: "https://cdn.simpleicons.org/javascript",
  },
  {
    name: "React",
    image: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Bootstrap",
    image: "https://cdn.simpleicons.org/bootstrap",
  },
  {
    name: "Node.js",
    image: "https://cdn.simpleicons.org/nodedotjs",
  },
  {
    name: "Express.js",
    image: "https://cdn.simpleicons.org/express",
  },
  {
    name: "MongoDB",
    image: "https://cdn.simpleicons.org/mongodb",
  },
  {
    name: "GitHub",
    image: "https://cdn.simpleicons.org/github",
  },
  {
    name: "Git",
    image: "https://cdn.simpleicons.org/git",
  },
];

const projects = [
  {
    title: "MyCart",
    category: "E-Commerce Application",
    description:
      "A full-stack e-commerce application with product browsing, search, categories, wishlist, cart, checkout, orders and profile management.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    liveLink: "https://major-project-one-frontend-sage.vercel.app",
    githubLink: "https://github.com/Gaurav-Kurude/MyCart-eCommerce",
  },
  {
    title: "Anvaya CRM",
    category: "CRM Application",
    description:
      "A full-stack CRM dashboard for managing leads, sales agents, statuses, comments, tags and business reports.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    liveLink: "https://major-project-two-frontend-sepia.vercel.app",
    githubLink: "https://github.com/Gaurav-Kurude/Anvaya-CRM",
  },
  {
    title: "Future Project",
    category: "Coming Soon",
    description:
      "A new project will be added here as I continue improving my full-stack development skills and building real-world applications.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home" onClick={closeMenu}>
            Gaurav<span className="text-primary">.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={closeMenu}>
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects" onClick={closeMenu}>
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills" onClick={closeMenu}>
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}

      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-7">
              <p className="text-primary fw-semibold mb-2">HELLO, I'M</p>

              <h1 className="display-1 fw-bold">
                Gaurav <span className="text-primary">Kurude.</span>
              </h1>

              <h2 className="fw-semibold mb-3">Full-Stack Developer</h2>

              <p className="lead text-secondary">
                I build responsive and user-friendly web applications using
                modern frontend and backend technologies.
              </p>

              <div className="mt-4">
                <a
                  href="#projects"
                  className="btn btn-primary btn-lg rounded-pill me-2"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline-dark btn-lg rounded-pill"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-4">
                <a href="https://github.com/Gaurav-Kurude" target="_blank" className="text-dark fs-4 me-3" aria-label="GitHub">
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/gaurav-kurude-500139215/?isSelfProfile=true"
                  target="_blank"
                  className="text-dark fs-4 me-3"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="mailto:gauravkurude.sitmech@gmail.com"
                  target="_blank"
                  className="text-dark fs-4"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div className="hero-code-card shadow-lg">
                <div className="code-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code-body">
                  <p>
                    <span className="purple">const</span> developer = {"{"}
                  </p>

                  <p className="ms-3">
                    name: <span className="green">"Gaurav"</span>,
                  </p>

                  <p className="ms-3">
                    role: <span className="green">"Full-Stack Developer"</span>,
                  </p>

                  <p className="ms-3">
                    passion: <span className="green">"Building"</span>
                  </p>

                  <p>{"};"}</p>

                  <br />

                  <p>
                    developer<span className="blue">.build</span>();
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}

      <section id="projects" className="py-5 bg-white">
        <div className="container py-5">
          <div className="mb-5">
            <p className="text-primary fw-semibold">PROJECTS</p>

            <h2 className="display-5 fw-bold">Things I've built.</h2>

            <p className="text-secondary">
              A few projects that represent my journey towards full-stack
              development.
            </p>
          </div>

          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-lg-4" key={project.title}>
                <div className="project-card h-100 bg-white rounded-4 p-4 shadow-sm">
                  <div className="project-icon mb-4">
                    <i className="bi bi-code-square"></i>
                  </div>

                  <p className="small text-primary fw-semibold">
                    {project.category}
                  </p>

                  <h3 className="fw-bold">{project.title}</h3>

                  <p className="text-secondary">{project.description}</p>

                  <div className="mb-4">
                    {project.technologies.map((technology) => (
                      <span
                        className="badge text-bg-light border me-2 mb-2"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.title !== "Future Project" ? (
                    <div className="mt-auto">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary rounded-pill me-2"
                      >
                        Live Demo
                        <i className="bi bi-arrow-up-right ms-2"></i>
                      </a>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="btn btn-outline-dark rounded-pill"
                      >
                        GitHub
                        <i className="bi bi-github ms-2"></i>
                      </a>
                    </div>
                  ) : (
                    <p className="text-secondary mb-0 mt-auto">
                      <i className="bi bi-clock me-2"></i>
                      Coming Soon
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}

      <section id="skills" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="text-primary fw-semibold">MY SKILLS</p>

            <h2 className="display-5 fw-bold">Technologies I work with.</h2>

            <p className="text-secondary">
              Technologies I'm using to build modern web applications.
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {skills.map((skill) => (
              <div className="col-6 col-md-4 col-lg-3" key={skill.name}>
                <div className="skill-card text-center p-4 rounded-4">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-image"
                  />

                  <h5 className="mt-3 mb-0">{skill.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}

      <section id="contact" className="contact-section py-5">
        <div className="container py-5 text-center">
          <p className="text-primary fw-semibold">GET IN TOUCH</p>

          <h2 className="display-5 fw-bold text-white">
            Let's build something together.
          </h2>

          <p className="text-light opacity-75 mt-3">
            I'm open to opportunities, collaborations and conversations about
            web development.
          </p>

          <a
            href="mailto:gauravkurude.sitmech@gmail.com"
            className="btn btn-light btn-lg rounded-pill mt-3"
          >
            Say Hello
            <i className="bi bi-envelope ms-2"></i>
          </a>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-dark text-secondary py-4">
        <div className="container text-center">
          <p className="mb-0">© 2026 Gaurav Kurude. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;

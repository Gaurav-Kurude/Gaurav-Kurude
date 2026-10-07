import "./App.css";

const skills = [
  { name: "HTML", image: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", image: "https://cdn.simpleicons.org/css" },
  { name: "JavaScript", image: "https://cdn.simpleicons.org/javascript" },
  { name: "React", image: "https://cdn.simpleicons.org/react" },
  { name: "Bootstrap", image: "https://cdn.simpleicons.org/bootstrap" },
  { name: "Node.js", image: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express.js", image: "https://cdn.simpleicons.org/express" },
  { name: "MongoDB", image: "https://cdn.simpleicons.org/mongodb" },
  { name: "GitHub", image: "https://cdn.simpleicons.org/github" },
  { name: "Git", image: "https://cdn.simpleicons.org/git" },
];

const projects = [
  {
    title: "Future Project",
    category: "Coming Soon",
    description:
      "A new project will be added here as I continue improving my full-stack development skills and building real-world applications.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Anvaya CRM",
    category: "CRM Application",
    description:
    "A full-stack CRM application built with React, Node.js, Express.js, and MongoDB for managing leads, sales agents, comments, tags, and reports with filtering and data visualization.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    liveLink: "https://major-project-two-frontend-sepia.vercel.app",
    githubLink: "https://github.com/Gaurav-Kurude/Anvaya-CRM",
  },
  {
    title: "MyCart",
    category: "E-Commerce Application",
    description:
      "A responsive e-commerce web application built with React, featuring product browsing, category filtering, wishlist, cart, checkout, order management, and user profile functionality.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
    liveLink: "https://major-project-one-frontend-sage.vercel.app",
    githubLink: "https://github.com/Gaurav-Kurude/MyCart-eCommerce",
  },
];

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            Gaurav<span className="text-primary">.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-40">
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

              <div className="mt-4 hero-buttons">
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

                <a
                  href="/Gaurav_Kurude_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary ms-2 btn-lg rounded-pill"
                >
                  View Resume
                  <i className="bi bi-file-earmark-person ms-2"></i>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-2 social-links">
                <a
                  href="https://github.com/Gaurav-Kurude"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-4 me-3"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/gaurav-kurude-500139215/?isSelfProfile=true"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-4 me-3"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="mailto:gauravkurude.sitmech@gmail.com"
                  className="text-dark fs-4"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>

            {/* Code Card */}
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

      {/* Projects Section */}
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
                        rel="noreferrer"
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

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <p className="text-primary fw-semibold">MY SKILLS</p>

            <h2 className="display-5 fw-bold skills-title">
              Technologies I work with.
            </h2>

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

      {/* Contact Section */}
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

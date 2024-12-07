import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Simon Says Game",
      description:
        "An interactive 'Simon Says' game built using HTML, CSS, and JavaScript, designed to challenge users' memory and responsiveness. This game features dynamic random sequence generation, user input detection, and real-time audio-visual feedback to enhance engagement.",
      image: "/light.jpg",
      challenges: [
        "Handling real-time audio-visual feedback.",
        "Ensuring smooth user interaction and input validation.",
      ],
      Outcome: "This game project successfully provided users with an engaging and challenging experience, fostering memory and responsiveness.",
    },
    {
      id: 2,
      title: "Event Management System",
      description:
        "An event management web application developed using MySQL, PHP, and HTML/CSS, designed to streamline university events across various venues. This platform incorporates user authentication, event scheduling functionalities, and role-based access control to ensure a seamless user experience.",
      image: "/event2 - Copy.jpg",
      challenges: [
        "Creating an interactive user interface.",
        "Integrating backend PHP with MySQL.",
      ],
      Outcome:"Improved efficiency and user experience in organizing university events through secure authentication, streamlined scheduling, and role-based access control.",
    },
    {
      id: 3,
      title: "Poemsy",
      description:
        "A social platform web application for poets, developed using MySQL, PHP, and HTML/CSS. This platform enables poets to post their poems and receive feedback through likes and comments. It incorporates user authentication, categorized poems, and features for posting, liking, and commenting, providing an engaging and seamless user experience.",
      image: "/poem.jpg",
      challenges: [
        "Building the UI components.",
        "Implementing the comment feature.",
      ],
      Outcome:"Created an engaging social platform for poets that enables seamless poem posting, categorization, and feedback through likes and comments, while ensuring secure user authentication and an intuitive user experience.",
    },
  ];

  const toggleProjectDetails = (projectId) => {
    setExpandedProjectId((prevId) => (prevId === projectId ? null : projectId));
  };

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* About Me  Section */}
      <section className="hero-section">
        <div className="text-content">
          <h1>Hi, I'm Gabriella Amedu</h1>
          <p>
            I am an aspiring project manager with a passion for leading teams
            and delivering impactful results.
          </p>
        </div>
        <div className="image-content">
          <img src={`${process.env.PUBLIC_URL}/IMG_0696.jpg`} alt="Gabriella Amedu" className="avatar" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>
          I am a third-year Computer Science undergraduate at California State
          University, Fullerton, with skills in Python, C++, SQL, R, HTML/CSS,
          and JavaScript. I have a strong passion for program management, where
          I aspire to lead technical teams in developing impactful solutions.
          Additionally, I am deeply interested in web development and creating
          user-centric applications.
        </p>
        <a href="/r.pdf" download="My_Resume.pdf" className="download-link">
          My Resume
        </a>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-category">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            {[
              { name: "Python", level: 5, icon: "devicon-python-plain colored" },
              { name: "C++", level: 3, icon: "devicon-cplusplus-plain colored" },
              { name: "SQL", level: 4, icon: "devicon-mysql-plain colored" },
              { name: "HTML", level: 3, icon: "devicon-html5-plain colored" },
              { name: "CSS", level: 3, icon: "devicon-css3-plain colored" },
              { name: "R", level: 3, icon: "devicon-r-original colored" },
              {
                name: "JavaScript",
                level: 3,
                icon: "devicon-javascript-plain colored",
              },
            ].map((skill, index) => (
              <div key={index} className="skill">
                <i className={skill.icon}></i>
                <div className="skill-name">{skill.name}</div>
                <div className="proficiency-level">
                  Proficiency Level - {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>Non-Technical Skills</h3>
          <div className="skills-list">
            {[
              { name: "Team Leadership", level: 5, icon: "👩🏾‍💼" },
              { name: "Communication", level: 5, icon: "💬" },
              { name: "Collaboration", level: 5, icon: "🤝" },
            ].map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                <div className="proficiency-level">
                  Proficiency Level - {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img
                src={project.image}
                alt={project.title}
                className="project-screenshot"
              />
              <button
                className="more-info-button"
                onClick={() => toggleProjectDetails(project.id)}
              >
                {expandedProjectId === project.id ? "Show Less" : "More Info"}
              </button>
              {expandedProjectId === project.id && (
                <div className="project-details">
                  <h4>Challenges</h4>
                  <ul>
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>

                  {/* Outcomes Section */}
                  <h4>Outcome</h4>
                  <p>{project.Outcome}</p> {/* Dynamically displays the outcome */}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>

        {/* Social Links */}
        <div className="social-links">
          <a 
            href="https://github.com/Gabbyamedu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            My Github
          </a>
          <a 
            href="https://www.linkedin.com/in/gabriella-amedu-28b1a5294/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            My LinkedIn
          </a>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xgvepydr"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Designed and developed by Gabriella Amedu, 885369579</p>
      </footer>
    </div>
  );
}

export default App;
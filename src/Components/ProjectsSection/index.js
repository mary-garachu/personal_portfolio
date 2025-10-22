import React from "react";
import { motion } from "framer-motion";
import './style.scss';

const projects = [
  {
    id: 1,
    title: "Spirealm",
    image: "/Assets/images/ezraenterprise.png",
    link: "https://www.ezraenterprise.co.ke/",
  },
  {
    id: 2,
    title: "Ezra Enterprise",
    image: "/Assets/images/spirealm.webp",
    link: "https://www.spirealm.com/",
  },
  {
    id: 3,
    title: "Nala Trails Safaris",
    image: "/Assets/images/nalatrailssafaris.png",
    link: "https://www.nalatrailssafaris.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">
          Here are some of the projects I’ve worked on recently. Hover over each image to learn more.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

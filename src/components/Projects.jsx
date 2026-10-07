import { featuredProject, projects, githubProjects } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      <a href={project.caseStudy} className="btn btn-secondary">
        Read the case study<span className="visually-hidden">: {project.title}</span>
      </a>
      <a href={project.url} target="_blank" rel="noopener" className="btn btn-ghost">
        Visit site<span className="visually-hidden">: {project.title}</span> →
      </a>
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="card elev-md featured-project">
      <div className="featured-project-text">
        <p className="card-kicker">{project.kicker}</p>
        <h3 className="featured-project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ProjectLinks project={project} />
      </div>
      <div className="featured-project-image washed">
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
        />
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card elev-md project-card">
      <div className="project-card-image washed">
        <img
          src={project.image.src}
          alt={project.image.alt}
          loading="lazy"
          style={project.image.position ? { objectPosition: project.image.position } : undefined}
        />
      </div>
      <p className="card-kicker">{project.kicker}</p>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ProjectLinks project={project} />
    </article>
  );
}

function GithubCard({ project }) {
  return (
    <a href={project.url} target="_blank" rel="noopener" className="github-card">
      <span className="github-card-title">{project.title}</span>
      <span className="github-card-description">{project.description}</span>
      <span className="tag tag-accent-2 github-card-tag">{project.tag}</span>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="projects-intro">
        <SectionHeading id="projects-title">Projects</SectionHeading>
        <p className="section-lede">Client sites I've built and looked after at HoprLabs.</p>
      </div>

      <FeaturedProject project={featuredProject} />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="github">
        <h3 className="github-title">More on GitHub</h3>
        <div className="github-grid">
          {githubProjects.map((project) => (
            <GithubCard key={project.url} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

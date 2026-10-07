import { experience } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section two-col" aria-labelledby="experience-title">
      <SectionHeading id="experience-title">Experience</SectionHeading>
      <div className="two-col-content experience-list">
        {experience.map((job) => (
          <div key={job.title} className="experience-row">
            <span className={`tag ${job.tagVariant} experience-tag`}>{job.tag}</span>
            <div>
              <h3 className="experience-title">{job.title}</h3>
              <p className="experience-description">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

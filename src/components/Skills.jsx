import { skills, education } from "../data.js";
import SectionHeading from "./SectionHeading.jsx";

function SkillGroup({ group }) {
  return (
    <div className="skill-group">
      <h3 className="skill-group-label">{group.label}</h3>
      <ul className="skill-tags">
        {group.items.map((item) => (
          <li key={item} className={`tag ${group.tagVariant}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EducationCard({ item }) {
  return (
    <div className="card education-card">
      <span className="education-dates">{item.dates}</span>
      <h3 className="education-title">{item.title}</h3>
      <p className="education-institution">{item.institution}</p>
      {item.description && <p className="education-description">{item.description}</p>}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title">Skills &amp; qualifications</SectionHeading>
      <div className="skills-grid">
        <div className="skill-groups">
          {skills.map((group) => (
            <SkillGroup key={group.label} group={group} />
          ))}
        </div>
        <div className="education-list">
          {education.map((item) => (
            <EducationCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import './style.scss';

const skillsData = [
  { category: 'Front-End Technologies', skills: [
    { name: 'JavaScript', proficiency: 90 },
    { name: 'HTML/(S)CSS', proficiency: 85 },
    { name: 'React JS', proficiency: 80 },
    { name: 'WordPress', proficiency: 75 }
  ]},
  { category: 'Back-End Technologies', skills: [
    { name: 'C', proficiency: 70 },
    { name: 'Python', proficiency: 75 }
  ]},
  { category: 'Tools & Technologies', skills: [
    { name: 'Agile', proficiency: 80 },
    { name: 'Scrum', proficiency: 85 },
    { name: 'Git', proficiency: 90 },
    { name: 'MySQL', proficiency: 75 }
  ]}
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.proficiency}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

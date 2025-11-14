import React from "react";
import { frontendSkills, backendSkills } from "./data";
import Skill from "./Skill";

export default function Skills() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="skills">
        Skills
      </h2>
      <div className="skills-columns">
        <div className="skills-section">
          <h3 className="skills-heading">Frontend</h3>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <Skill key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
        <div className="skills-section">
          <h3 className="skills-heading">Backend</h3>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <Skill key={skill.title} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

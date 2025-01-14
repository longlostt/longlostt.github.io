import React from "react";
import { skills } from "./data"; // Import skills from the data file
import Skill from "./Skill";

export default function Skills() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="skills">
        Skills
      </h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

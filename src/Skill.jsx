import React from "react";

export default function Skill({ skill }) {
  return (
    <div className="skill">
      {skill.image}
      <p className="skillText">{skill.title}</p>
    </div>
  );
}

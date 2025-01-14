import React from "react";

export default function Skill({ skill }) {
  return (
    <div className="skillCard">
      {skill.image}
      <p className="skillText">{skill.title}</p>
    </div>
  );
}

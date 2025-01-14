import React from "react";
import { projects } from "./data"; // Import projects from the data file
import Project from "./Project";

export default function Projects() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="projects">
        Projects
      </h2>
      <div className="projGrid">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

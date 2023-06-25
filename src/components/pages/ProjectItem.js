import React from "react";
// import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <a href={`/projects/${project.id}`}>
        <img src={project.image} alt={project.name} />
        <div className="project-name">{project.name}</div>
      </a>
    </div>
  );
};

export default ProjectItem;

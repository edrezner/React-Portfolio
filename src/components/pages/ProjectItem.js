import React from "react";
import "./ProjectItem.css";
import gitIcon from "../../assets/images/git.png";

const ProjectItem = ({ project }) => {
  const { link, name, image, git } = project;

  return (
    <div className="project-item">
      <a href={link} target="_blank">
        <img src={image} alt={name} className="project-image" />
        <div className="project-title">{name}</div>
        <div className="github-icon">
          <a href={git} target="_blank">
            <img src={gitIcon} alt="GitHub" className="github-icon" />
          </a>
        </div>
      </a>
    </div>
  );
};

export default ProjectItem;

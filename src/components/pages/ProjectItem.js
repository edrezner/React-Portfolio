import React from "react";
import "../../assets/styles.css";

const ProjectItem = ({ project }) => {
  const { link, name, image, git } = project;

  return (
    <div className="project-item">
      <a href={link} target="_blank">
        <img src={image} alt={name} className="project-image" />
        <div className="project-title">{name}</div>
        <div className="github-icon">
          <a href={git} target="_blank">
            <img
              src="../assets/images/git.jpg"
              alt="GitHub"
              className="github-icon"
            />
          </a>
        </div>
      </a>
    </div>
  );
};

export default ProjectItem;

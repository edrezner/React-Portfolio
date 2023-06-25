import React from "react";
import ProjectItem from "./pages/ProjectItem";
//import CodeQuiz from "../assets/images/cqpg1.png";

const projects = [
  { id: 1, name: "Code Quiz", image: "assets/images/cqpg1.png" },
  { id: 2, name: "Weather Dashboard", image: "" },
];

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

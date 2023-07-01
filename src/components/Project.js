import React from "react";
import ProjectItem from "./pages/ProjectItem";

const projects = [
  { id: 1, name: "Code Quiz", image: "assets/images/cqpg1.png" },
  { id: 2, name: "Weather Dashboard", image: "assets/images/weather.png" },
  { id: 3, name: "Scheduler", image: "assets/images/workdayschedule.png" },
  { id: 4, name: "FCC Manager", image: "assets/images/FCCManager.png" },
  { id: 5, name: "E-Commerce Back End", image: "assets/images/JavaScript.png" },
  { id: 6, name: "Social Network API", image: "assets/images/social.png" },
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

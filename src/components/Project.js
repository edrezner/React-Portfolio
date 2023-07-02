import React from "react";
import ProjectItem from "./pages/ProjectItem";

const projects = [
  {
    id: 1,
    link: "https://edrezner.github.io/Code-Quiz/",
    name: "Code Quiz",
    image: "assets/images/cqpg1.png",
    git: "https://github.com/edrezner/Code-Quiz",
  },
  {
    id: 2,
    link: "https://edrezner.github.io/Weather-Dashboard/",
    name: "Weather Dashboard",
    image: "assets/images/weather.png",
    git: "https://github.com/edrezner/Weather-Dashboard",
  },
  {
    id: 3,
    link: "https://edrezner.github.io/Work-Day-Scheduler/",
    name: "Scheduler",
    image: "assets/images/workdayschedule.png",
    git: "https://github.com/edrezner/Work-Day-Scheduler",
  },
  {
    id: 4,
    link: "https://manager-fc.herokuapp.com/",
    name: "FC Manager",
    image: "assets/images/FCCManager.png",
    git: "https://github.com/ZeeDabbagh/manager-fc",
  },
  {
    id: 5,
    link: "",
    name: "E-Commerce Back End",
    image: "assets/images/JavaScript.png",
    git: "https://github.com/edrezner/E-Commerce-Back-End",
  },
  {
    id: 6,
    link: "",
    name: "Social Network API",
    image: "assets/images/social1.png",
    git: "https://github.com/edrezner/Social-Network-API",
  },
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

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
    link: "https://crowd-craft-2db11e3debb4.herokuapp.com/",
    name: "CrowdCraft",
    image: "assets/images/crowdcraft.png",
    git: "https://github.com/edrezner/crowdfund-app",
  },
  {
    id: 4,
    link: "https://manager-fc-a7115e681431.herokuapp.com/",
    name: "FC Manager",
    image: "assets/images/FCManager.png",
    git: "https://github.com/edrezner/team-manager-app",
  },
  {
    id: 5,
    link: "https://pvlln.github.io/project1-group-awesome/",
    name: "Movie Search Engine",
    image: "assets/images/mse.png",
    git: "https://github.com/pvlln/project1-group-awesome",
  },
  {
    id: 6,
    link: "https://salty-ravine-50225.herokuapp.com/",
    name: "Note Taker",
    image: "assets/images/note.png",
    git: "https://github.com/edrezner/Note-Taker",
  },
];

const Portfolio = () => {
  return (
    <div>
      <h1 className="page-h1">Portfolio</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

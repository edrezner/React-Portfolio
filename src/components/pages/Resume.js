import React from "react";
import resume from "../../assets/ResumeUpdated.md";

const Resume = () => {
  return (
    <div className="page-div">
      <h1 className="page-h1">Resume</h1>

      <p className="page-p">
        Download my <a href={resume}>resume</a>
      </p>
      <ul>
        Front-end Proficiencies
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <ul>
        Back-end Proficiencies
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
};

export default Resume;

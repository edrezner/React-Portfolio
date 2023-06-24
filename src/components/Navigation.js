import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Project from "../components/Project";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const Navigation = () => {
  const [selectedSection, setSelectedSection] = useState("AboutMe");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <nav>
        <ul>
          <li onClick={() => handleSectionChange("AboutMe")}>
            <Link to="/">About Me</Link>
          </li>
          <li onClick={() => handleSectionChange("Portfolio")}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li onClick={() => handleSectionChange("Contact")}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={() => handleSectionChange("Resume")}>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
      {selectedSection === "AboutMe" && <AboutMe />}
      {selectedSection === "Portfolio" && <Project />}
      {selectedSection === "Contact" && <Contact />}
      {selectedSection === "Resume" && <Resume />}
    </>
  );
};

export default Navigation;

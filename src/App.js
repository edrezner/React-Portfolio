import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

/* Body page */
import AboutMe from "./components/pages/AboutMe";
import Project from "./components/Project";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("AboutMe");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <>
      <Header setSelectedSection={setSelectedSection}></Header>
      {selectedSection === "AboutMe" && <AboutMe />}
      {selectedSection === "Portfolio" && <Project />}
      {selectedSection === "Contact" && <Contact />}
      {selectedSection === "Resume" && <Resume />}
    </>
  );
};

export default App;

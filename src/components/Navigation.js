import React, { useEffect } from "react";

const Navigation = ({ setSelectedSection }) => {
  useEffect(() => {
    console.log({ setSelectedSection });
  }, []);
  return (
    <>
      <nav>
        <ul>
          <li onClick={() => setSelectedSection("AboutMe")}>
            <a href="#">About Me</a>
          </li>
          <li onClick={() => setSelectedSection("Portfolio")}>
            <a href="#">Portfolio</a>
          </li>
          <li onClick={() => setSelectedSection("Contact")}>
            <a href="#">Contact</a>
          </li>
          <li onClick={() => setSelectedSection("Resume")}>
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

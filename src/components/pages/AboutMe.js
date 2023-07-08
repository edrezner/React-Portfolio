import React from "react";
import profPic from "../../assets/images/suit.png";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <h1 className="page-h1">About Page</h1>
      <div className="profPic-container">
        <img src={profPic} alt="suit" className="profPic" />
      </div>
      <div className="about-container">
        <p className="page-p about-p">
          Welcome to my portfolio! I'm an aspiring web developer currently
          working as an affiliate manager in sales. With experience in
          accounting, I'm excited to explore the logical and analytical side of
          web development.
          <br></br>
          <br></br>
          My journey into web development began as I sought to leverage my
          skills in a dynamic and evolving field. Development has given me an
          exciting outlet to blend logic and creativity. The joy of breaking
          down a complex problem into smaller computational step by step blocks
          and building a unique and functional application immediately drew me
          to the world of coding. I'm so happy to be here, and am looking
          forward to working with you!
          <br></br>
          <br></br>
          I'd love to collaborate; please don't hesitate to reach out to me{" "}
          <a href="mailto:edrezner7@gmail.com">here</a>.
        </p>
      </div>
    </div>
  );
}

import React from "react";
import gitIcon from "../assets/images/git.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/edrezner" target="_blank">
        <img className="footer-img" src={gitIcon} alt="GitHub" />
      </a>
    </div>
  );
};

export default Footer;

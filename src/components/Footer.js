import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/edrezner" target="_blank">
        <img
          className="footer-img"
          src="../assets/images/git.png"
          alt="GitHub"
        />
      </a>
    </div>
  );
};

export default Footer;

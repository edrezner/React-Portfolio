import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

const Header = ({ setSelectedSection }) => {
  return (
    <header>
      <div className="header-left">Eric Drezner</div>
      <div className="header-right">
        <Navigation setSelectedSection={setSelectedSection} />
      </div>
      <span className="clearfix"></span>
    </header>
  );
};

export default Header;

import React from "react";
import Navigation from "./Navigation";

const Header = ({ setSelectedSection }) => {
  return (
    <header>
      <div className="header-left">Eric Drezner</div>
      <div className="header-right">
        <Navigation setSelectedSection={setSelectedSection} />
      </div>
    </header>
  );
};

export default Header;

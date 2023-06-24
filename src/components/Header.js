import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="header-left">Eric Drezner</div>
      <div className="header-right">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

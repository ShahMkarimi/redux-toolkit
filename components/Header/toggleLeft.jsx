"use client"
import React, { useState } from "react";

const ToggleLeft = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fullPageMenu">
      <div>
        <button
          id="toggle"
          className={isActive ? "active" : ""}
          onClick={toggleMenu}
        >
          Toggle
        </button>
        <nav id="nav" className={isActive ? "cameLeft" : ""}>
          <ul>
            <li>
              <a href="#" data-text="Home">
                Home
              </a>
            </li>
            <li>
              <a href="#" data-text="about us">
                about us
              </a>
            </li>
            <li>
              <a href="#" data-text="Customes">
                Customes
              </a>
            </li>
            <li>
              <a href="#" data-text="Temes">
                Temes
              </a>
            </li>
            <li>
              <a href="#" data-text="works sumple">
                works sumple
              </a>
            </li>
            <li>
              <a href="#" data-text="contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="banner"></div>
    </div>
  );
};

export default ToggleLeft;
import React, { useState } from "react";
import classNames from "classnames";

import "./MainMenu.scss";

export default function MainMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="main-menu">
      <div
        className={classNames("main-menu__btn-nav", { active: isMenuOpen })}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>Logo</div>
      <div className={classNames("main-menu__nav", { active: isMenuOpen })}>
        <div className="main-menu__nav-item">One</div>
        <div className="main-menu__nav-item">Two</div>
        <div className="main-menu__nav-item">Three</div>
      </div>
    </div>
  );
}

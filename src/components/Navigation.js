import React from "react";
import { Link } from "react-router-dom";

function Navigation({ logoSrc, menus }) {
  return (
    <nav className="Navigation">
      <div className="Navigation__logo-container">
        <Link to="/">
          <img
            className="Navigation__logo-container__logo"
            src={logoSrc}
            alt="Logo"
          />
        </Link>
      </div>
      <ul className="Navigation__menu-container">
        {menus.map(menu => (
          <li>
            <Link to={menu.link}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

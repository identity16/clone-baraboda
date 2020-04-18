import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

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
          <li key={menu.name} className="Navigation__menu-container__menu">
            <Link to={menu.link}>{menu.name}</Link>
            <ul className="Navigation__submenu-container">
              {menu.subMenus &&
                menu.subMenus.map(subMenu => (
                  <li
                    key={subMenu.name}
                    className="Navigation__submenu-container__submenu"
                  >
                    <Link to={subMenu.link}>{subMenu.name}</Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

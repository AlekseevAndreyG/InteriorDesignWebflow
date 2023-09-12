import React from "react";
import { NavLink } from "react-router-dom";
import "./HNavLine.css";
import HeaderSearch from "../HeaderSearch/HeaderSearch";

function HNavLine(props) {
  return (
    <div className="h-nav-line-wrap">
      <ul className="h-nav-line">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-page">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/src/Pages/.....">Services</NavLink>
        </li>
        <li>
          <NavLink to="/src/Pages/.....">Project</NavLink>
        </li>
        <li>
          <NavLink to="/src/Pages/.....">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/src/Pages/.....">Contact</NavLink>
        </li>
        <HeaderSearch />
      </ul>
    </div>
  );
}

export default HNavLine;

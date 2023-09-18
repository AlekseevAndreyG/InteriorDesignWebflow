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
          <NavLink to="/services-page">Services</NavLink>
        </li>
        <li>
          <NavLink to="">Project</NavLink>
        </li>
        <li>
          <NavLink to="">Blog</NavLink>
        </li>
        <li>
          <NavLink to="">Contact</NavLink>
        </li>
        <HeaderSearch />
      </ul>
    </div>
  );
}

export default HNavLine;

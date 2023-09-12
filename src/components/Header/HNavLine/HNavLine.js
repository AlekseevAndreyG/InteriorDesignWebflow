import React from "react";
import { Link } from "react-router-dom";
import "./HNavLine.css";
import HeaderSearch from "../HeaderSearch/HeaderSearch";

function HNavLine(props) {
  return (
    <div className="h-nav-line-wrap">
      <ul className="h-nav-line">
        <li>
          <Link to="/src/Pages/.....">Home</Link>
        </li>
        <li>
          <Link to="/src/Pages/.....">Pages</Link>
        </li>
        <li>
          <Link to="/src/Pages/.....">Services</Link>
        </li>
        <li>
          <Link to="/src/Pages/.....">Project</Link>
        </li>
        <li>
          <Link to="/src/Pages/.....">Blog</Link>
        </li>
        <li>
          <Link to="/src/Pages/.....">Contact</Link>
        </li>
        <HeaderSearch />
      </ul>
    </div>
  );
}

export default HNavLine;

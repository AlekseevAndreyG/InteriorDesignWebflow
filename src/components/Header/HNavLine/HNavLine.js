import React from "react";
import "./HNavLine.css";
import HeaderSearch from "../HeaderSearch/HeaderSearch";

function HNavLine(props) {
  return (
    <div className="h-nav-line-wrap">
      <ul className="h-nav-line">
        <li>
          <a href="http://localhost:3000">Home</a>
        </li>
        <li>
          <a href="http://localhost:3000">Pages</a>
        </li>
        <li>
          <a href="http://localhost:3000">Services</a>
        </li>
        <li>
          <a href="http://localhost:3000">Project</a>
        </li>
        <li>
          <a href="http://localhost:3000">Blog</a>
        </li>
        <li>
          <a href="http://localhost:3000">Contact</a>
        </li>
        <HeaderSearch />
      </ul>
    </div>
  );
}

export default HNavLine;

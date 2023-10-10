import React, { useState } from "react";
import "./ProjectGallery.css";

function ProjectGallery() {
  const [activeTitle, setActiveTitle] = useState(null);

  const handleTitleClick = (title) => {
    setActiveTitle(title);
  };

  return (
    <section className="project-gallery">
      <div className="container">
        <div className="project-nav-panel">
          <button
            className={`project-title-button ${
              activeTitle === "Bathroom" ? "active" : ""
            }`}
            onClick={() => handleTitleClick("Bathroom")}
          >
            Bathroom
          </button>
          <button
            className={`project-title-button ${
              activeTitle === "Bed Room" ? "active" : ""
            }`}
            onClick={() => handleTitleClick("Bed Room")}
          >
            Bed Room
          </button>
          <button
            className={`project-title-button ${
              activeTitle === "Kitchen" ? "active" : ""
            }`}
            onClick={() => handleTitleClick("Kitchen")}
          >
            Kitchen
          </button>
          <button
            className={`project-title-button ${
              activeTitle === "Living Area" ? "active" : ""
            }`}
            onClick={() => handleTitleClick("Living Area")}
          >
            Living Area
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;

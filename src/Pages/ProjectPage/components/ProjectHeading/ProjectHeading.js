import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectHeading.css";

function ProjectHeading() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="project-heading">
      <div className="project-heading-bg"></div>
      <div className="project-heading-title">
        <h1>Our Project</h1>
        <h6>Home / Project</h6>
      </div>
      <div className="container"></div>
    </section>
  );
}

export default ProjectHeading;

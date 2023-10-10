import React from "react";
import "./ProjectPage.css";
import ProjectHeading from "./components/ProjectHeading/ProjectHeading";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery";
function ProjectPage() {
  return (
    <section className="project-page">
      <ProjectHeading />
      <ProjectGallery />
    </section>
  );
}

export default ProjectPage;

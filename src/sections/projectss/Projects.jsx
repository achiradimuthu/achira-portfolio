import React from "react";
import "./Projects.css";
import { projects } from "../../data/Project-data";

function Projects() {
  return (
    <div className="projects-main-div" id="projects">
      <div className="projects-content">
        <div className="projects-d1">
          <h1>Projects</h1>
          <h3>
            I have done real client projects and self learning projects. Here
            are some of my projects.
          </h3>
        </div>
        <div className="projects-d2">
          {projects.map((project) => {
            return (
              <a href={project.url} target="_blank" key={project.id}>
                <div className="project-card">
                  <img src={project.image} alt="sample" />
                  <div className="tech-tags">
                    {project.tags.map((tag) => {
                      return (
                        <div className="tech-tag">
                          <span>{tag}</span>
                        </div>
                      );
                    })}
                  </div>
                  <span className="sp1">{project.title}</span>
                  <span className="sp2">{project.description}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

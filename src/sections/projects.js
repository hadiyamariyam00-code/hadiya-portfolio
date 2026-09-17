import React from "react";
import "../style.css";

import preview from "../assets/images/preview.png";

function Projects({ onOpenCaseStudy }) {
  const projects = [
    {
      title: "SmartLab - Lab Management System",
      description:
        "Built the complete web application enabling lab staff to remotely monitor live screenshots and webcam feeds, control systems, and auto-terminate unauthorized processes during exams, with role-based dashboards for Admin, Staff, Lab Assistant, and Student.",
      image: preview,
      isCaseStudy: true,
      type: "Team Project",
      status: "Completed",
      techStack: ["Python (Django)", "MySQL", "JavaScript", "Bootstrap"],
    },
    {
      title: "CineTrack - Personal Movie Tracker App",
      description:
        "A movie tracking app for people who don't want to sign up for yet another account. Build a watchlist, log what you watch, and see your own viewing stats, pulled from live metadata via a public API, all stored right in your browser.",
      image: preview,
      link: "https://cinetrack-movietracker.vercel.app",
      type: "Solo Project",
      status: "Completed",
      techStack: ["React.js", "Tailwind CSS", "REST API"],
    },
  ];

  return (
    <div className="project" id="projects">
      <h1 className="project-head">
        My <span className="head-color">Projects</span>
      </h1>

      {projects.map((proj, index) => {
        const cardContent = (
          <>
            <div className="project-image-wrap">
              <img
                src={proj.image}
                alt={proj.title}
                className="project-image"
              />

              <div className="project-overlay">
                <span className="overlay-tag">{proj.type}</span>
                <span className="overlay-tag">{proj.status}</span>
              </div>
            </div>

            <div className="project-sub">
              <h3>{proj.title}</h3>

              <p>{proj.description}</p>

              <div className="tech-stack">
                {proj.techStack.map((tech, i) => (
                  <span className="tech-badge" key={i}>
                    {tech}
                  </span>
                ))}
              </div>

              <span className="project-cta">
                {proj.isCaseStudy
                  ? "View Case Study →"
                  : "View Live Demo →"}
              </span>
            </div>
          </>
        );

        if (proj.isCaseStudy) {
          return (
            <button
              type="button"
              className="project-row project-row-button"
              key={index}
              onClick={onOpenCaseStudy}
            >
              {cardContent}
            </button>
          );
        }

        return (
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
            key={index}
          >
            {cardContent}
          </a>
        );
      })}
    </div>
  );
}

export default Projects;
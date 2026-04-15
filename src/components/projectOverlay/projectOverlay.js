import React from "react";
import "./projectOverlay.css";

export default function ProjectOverlay({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-overlay-backdrop" onClick={onClose}>
      <div
        className="project-overlay-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* HERO IMAGE */}
        {project.resolvedImg && (
          <div
            className="overlay-image"
            style={{ backgroundImage: `url(${project.resolvedImg})` }}
          />
        )}

        <div className="overlay-body">
          {/* TITLE */}
          <h1>{project.title}</h1>
          {project.subtitle && (
            <p className="overlay-subtitle">{project.subtitle}</p>
          )}

          {/* PROBLEM */}
          {project.problem && (
            <div className="overlay-section">
              <h3>
                <span role="img" aria-label="alert">
                  🚨
                </span>{" "}
                Problem
              </h3>
              <p>{project.problem}</p>
            </div>
          )}

          {/* SOLUTION */}
          {project.solution && (
            <div className="overlay-section">
              <h3>🛠 Solution</h3>
              <p>{project.solution}</p>
            </div>
          )}

          {/* FEATURES */}
          {project.features && (
            <div className="overlay-section">
              <h3>
                <span role="img" aria-label="settings">
                  ⚙️
                </span>{" "}
                Key Features
              </h3>
              <ul className="overlay-features">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* TECH STACK */}
          {project.tags && (
            <div className="overlay-section">
              <h3>
                <span role="img" aria-label="brain">
                  🧠
                </span>
                Tech Stack
              </h3>
              <div className="overlay-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="overlay-tag">
                    {tag.lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* DEMO */}
          {project.demo && (
            <div className="overlay-section">
              <h3>
                <span role="img" aria-label="video">
                  🎥
                </span>{" "}
                Demo
              </h3>
              <div className="overlay-demo">
                {project.demo.slice(0, 4).map((item, i) => (
                  <img key={i} src={item} alt={`demo-${i}`} />
                ))}
              </div>
            </div>
          )}

          {/* LINKS */}
          <div className="overlay-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Demo →
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

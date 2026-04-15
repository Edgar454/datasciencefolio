import React from "react";
import Card from "react-bootstrap/Card";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards({ project, onClick }) {
  return (
    <Card
      className="project-card-view"
      onClick={() => onClick(project)}
      style={{ cursor: "pointer" }}
    >
      <Card.Img variant="top" src={project.imgPath} alt={project.title} />

      <Card.Body>
        <Card.Title>{project.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {project.description}
        </Card.Text>

        {/* optional quick links (still useful UX-wise) */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <BiLinkExternal /> Demo
            </a>
          )}

          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;

import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import Badge from "react-bootstrap/Badge";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import { projects } from "../../project.js";
import { CardColumns, Card } from "react-bootstrap";
import ProjectOverlay from "../../components/projectOverlay/projectOverlay";

import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

export default function Projects(props) {
  const theme = props.theme;

  // ✅ ONLY STATE YOU NEED
  const [selectedProject, setSelectedProject] = useState(null);

  // open / close handlers
  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-main">
      <Header theme={theme} />

      {/* HEADER */}
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>

            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.orange }}
              >
                {projectsHeader.title}
              </h1>

              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.text }}
              >
                {projectsHeader.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* PROJECT GRID */}
      <div className="repo-cards-div-main">
        <CardColumns>
          {projects.list.map((proj, index) => (
            <Card
              key={index}
              className="project-card-view h-100"
              onClick={() =>
                openProject({
                  ...proj,
                  index,
                  resolvedImg: require(`../../assets/projects/${proj.img_path}`),
                })
              }
              style={{ cursor: "pointer" }}
            >
              <Card.Img
                variant="top"
                src={require(`../../assets/projects/${proj.img_path}`)}
              />

              <Card.Body>
                <Card.Title>
                  <h2 style={{ lineHeight: "1.5", marginTop: "0" }}>
                    {proj.title}

                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i
                        className="fas fa-external-link-alt"
                        style={{ marginLeft: "10px", color: proj.linkcolor }}
                      />
                    </a>

                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i
                        className="fab fa-github"
                        style={{ paddingLeft: "10px", color: proj.linkcolor }}
                      />
                    </a>
                  </h2>
                </Card.Title>

                <div className="card-tags">
                  {proj.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      style={{
                        marginRight: "0.5em",
                        backgroundColor: tag.color,
                      }}
                    >
                      {tag.lang}
                    </Badge>
                  ))}
                </div>

                <Card.Text>{proj.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>

      {/* OVERLAY */}
      {selectedProject && (
        <ProjectOverlay project={selectedProject} onClose={closeProject} />
      )}

      <Button
        text={"More Projects"}
        className="project-button"
        href="https://github.com/Edgar454"
        newTab={true}
        theme={theme}
      />

      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

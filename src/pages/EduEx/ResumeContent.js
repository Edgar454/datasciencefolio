import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      {props.link ? (
        <h2 className={props.title ? "resume-title" : "resume-no-title"}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </h2>
      ) : (
        <h2 className={props.title ? "resume-title" : "resume-no-title"}>
          {props.title}
        </h2>
      )}
      <span className="date">
        <em>{props.date}</em>
      </span>
      <h6 className={props.title ? "resume-subtitle" : "resume-no-title"}>
        {props.subtitle}
      </h6>
      <p></p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;

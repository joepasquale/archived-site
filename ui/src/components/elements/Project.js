import React from "react";

function Project(props) {
  return (
    <div className="card">
      <div className="card-header">
        <a href={props.url} target="blank">
          <p className="card-header-title">{props.title}</p>
        </a>
        <a
          href={props.url}
          target="blank"
          className="card-header-icon"
        >
          <span className="icon">
            <i className="fab fa-2x fa-github"></i>
          </span>
        </a>
      </div>
      <div className="card-content">
        <h1 className="heading">{props.date}</h1>
        <div className="content">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
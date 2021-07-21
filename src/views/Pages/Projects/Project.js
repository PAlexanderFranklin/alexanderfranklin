import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div className={"Project bubble " + props.className}>
      <h2>{props.title}</h2>
      <div className="project_body">
        {props.children}
      </div>
    </div>
  );
}

export default Project;

import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div className={"Project " + props.className}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default Project;

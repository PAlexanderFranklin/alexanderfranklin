import React from 'react';
import './Project.css';

function Project(props) {
  return (
    <div className={"Project " + props.className}>
      {props.children}
    </div>
  );
}

export default Project;

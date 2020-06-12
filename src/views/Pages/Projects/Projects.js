import React from 'react';
import './Projects.css';
import Project from './Project/Project'

function Projects() {
  return (
    <div className="Projects">
      <Project className="left">
        This is the first project
      </Project>
      <Project className="right">
        This is the second project
      </Project>
    </div>
  );
}

export default Projects;

import React from 'react';
import './Projects.css';
import Project from './Project/Project'

function Projects() {
  return (
    <div className="Projects">
      <Project className="left" title="alexanderfranklin.net">
        This is the website you are on. It is
        built using react, and it is hosted on AWS.
        I took the background photo myself.
      </Project>
      <Project className="right">
        This is the second project
      </Project>
    </div>
  );
}

export default Projects;

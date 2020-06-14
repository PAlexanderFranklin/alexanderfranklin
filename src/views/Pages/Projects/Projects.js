import React from 'react';
import './Projects.css';
import Project from './Project/Project'

function Projects() {
  return (
    <div className="Projects">
      <Project className="left" title="alexanderfranklin.net">
        This is the website you are on. It was
        built using react, and it is hosted on AWS.
        I took the background photo myself.
      </Project>
      <Project className="right wide" title="Gravity Rotation Simulator">
        I made this using scratch, a visual block language. It uses its own coordinate system,
        and decides when and where to render objects to the scratch system. It has velocity, acceleration, and
        basic air resistence. It also has basic collision detection. <hr/>
        Press the green flag to start. The map takes some time to load. <br/>
        WAD to move and jump <br/>
        QSE to rotate/flip gravity <br/>
        <iframe 
          title="Gravity"
          src="https://scratch.mit.edu/projects/212668429/embed" 
          allowtransparency="true"
          width="485" height="402" 
          frameborder="0" 
          scrolling="no" 
          allowfullscreen>
        </iframe>
      </Project>
    </div>
  );
}

export default Projects;

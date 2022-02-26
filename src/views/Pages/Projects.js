import React from 'react';
import './Projects.css';
import Project from './Projects/Project';

function Projects() {
  let projectArray = [];

  projectArray.push(
    <Project title="alexanderfranklin.net">
      The website you are on was
      built using react and is hosted on AWS.
      I use react router to combine the performance of single page applications
      with the UI of multi page applications,
      and the useState react hook as well as 
      css variables for the sitewide dark mode button.
    </Project>
  );


  projectArray.push(
    <Project title="Gravity Rotation Simulator">
      <p>
        Desktop Only.
      </p>
      I made this using scratch, a visual block language. It uses its own coordinate system,
      and decides when and where to render objects to the scratch system. It has velocity, acceleration, and
      basic air resistance. It also has basic collision detection. <hr/>
      <a
      className="alex_button scratch"
      href="https://scratch.mit.edu/projects/212668429/"
      draggable="false"
      target="_blank"
      rel="noopener noreferrer">
        Link to Gravity Simulator
      </a>
    </Project>
  );

  return (
    <div className="Projects content">
      <a
        className="Project bubble git_button alex_button"
        href="https://github.com/PAlexanderFranklin"
        draggable="false"
        target="_blank"
        rel="noopener noreferrer">
          VISIT MY GITHUB
      </a>
      {projectArray}
    </div>
  );
}

export default Projects;

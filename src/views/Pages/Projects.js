import React, { useState } from 'react';
import './Projects.css';
import Project from './Projects/Project'

function Projects() {
  let projectArray = [];

  //This builds the bar display
  const [bars, setBars] = useState(1);
  if (bars < 0) {
    setBars(0);
  }
  if (bars > 6) {
    setBars(6);
  }
  let barArray = [];
  for (let i = 1; i < 7; i++) {
    let active = "active_bar";
    if (i > bars) {
      active = "";
    }
    barArray.push(<button onClick={() => setBars(i)} className={"bar " + active} style={{height: i + "em"}} />)
  }
  //End of bar display builder

  projectArray.push(
    <Project className="bubble" title="alexanderfranklin.net">
      The website you are on was
      built using react and is hosted on AWS.
      I use react router to combine the performance of single page applications
      with the UI of multi page applications,
      and the useState react hook as well as 
      css variables for the sitewide dark mode button.
      The following demonstrates state management:
      <div className="bar_display">
        <button onClick={() => setBars(bars - 1)} className="arrow_button"><h1>{'<'}</h1></button>
        {barArray /*bar display */}
        <button onClick={() => setBars(bars + 1)} className="arrow_button"><h1>{'>'}</h1></button>
      </div>
    </Project>
  );


  projectArray.push(
    <Project className="bubble" title="Gravity Rotation Simulator">
      I made this using scratch, a visual block language. It uses its own coordinate system,
      and decides when and where to render objects to the scratch system. It has velocity, acceleration, and
      basic air resistance. It also has basic collision detection. <hr/>
      <a
      className="alex_button scratch"
      href="https://scratch.mit.edu/projects/212668429/"
      draggable="false"
      >Link to Gravity Simulator
      </a>
    </Project>
  );

  return (
    <div className="Projects content">
      <a
        className="Project bubble git_button alex_button"
        href="https://github.com/PAlexanderFranklin"
        draggable="false">
          VISIT MY GITHUB
      </a>
      {projectArray}
    </div>
  );
}

export default Projects;

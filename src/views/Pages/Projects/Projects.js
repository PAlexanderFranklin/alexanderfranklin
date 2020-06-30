import React, { useState } from 'react';
import './Projects.css';
import Project from './Project/Project'

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
      This is the website you are on. It was
      built using react, and it is hosted on AWS.
      I use react router to combine the performance of single page applications
      with the UI of multi page applications.
      I use the useState react hook as well as 
      css variables for the sitewide dark mode button.
      The following also demonstrates state management.
      <div className="bar_display">
        <button onClick={() => setBars(bars - 1)} className="arrow_button"><h1>{'<'}</h1></button>
        {barArray /*bar display */}
        <button onClick={() => setBars(bars + 1)} className="arrow_button"><h1>{'>'}</h1></button>
      </div>
    </Project>
  );


  projectArray.push(
    <Project className="bubble wide" title="Gravity Rotation Simulator">
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
  );

  return (
    <div className="Projects content">
      <a className="bubble git_button" href="https://github.com/PAlexanderFranklin">Visit my GitHub</a>
      {projectArray}
    </div>
  );
}

export default Projects;

import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="Resume bubble">
      <div>
        <h2>Technical Skills</h2>
        Languages: Javascript, HTML<span className="number">5</span>, CSS, Python, Applescript, C++. <br/>
        Frameworks and Technologies: React, Redux, Git Version Control, AWS(Amplify), Node.js
      </div>
      <div>
        <h2>Education</h2>
        Arizona State University Bachelor of Science in Software Engineering <span className="date">Est. <span className="number">2024</span></span><hr/>
        SAT
        <ul>
          <li><span className="bullet_small">Score: <span className="number">1390</span></span></li>
          <li><span className="bullet_small"><span className="number">94</span>th percentile</span></li>
        </ul>
        <hr/>
        High School Diploma <span className="date">Apr <span className="number">2020</span></span>
        <ul>
          <li><span className="bullet_small">Homeschool</span></li>
        </ul>
      </div>
      <div>
        <h2>Work Experience</h2>
        Harvest Homes <span className="date">Sep <span className="number">2018</span>-Present</span> <br/>
        <ul>
          <li><span className="bullet_small">Maintenance</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;

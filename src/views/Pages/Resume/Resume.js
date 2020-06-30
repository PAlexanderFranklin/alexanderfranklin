import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="Resume bubble">
      <div>
        <h2>Technical Skills</h2>
        Languages: Javascript, HTML5, CSS, Python, Applescript. <br/>
        Frameworks and Technologies: React, Redux, Git Version Control, AWS(Amplify), Node.js
      </div>
      <div>
        <h2>Education</h2>
        Arizona State University Bachelor of Science in Software Engineering <span className="date">Est. 2024</span><hr/>
        SAT
        <ul>
          <li><span>Score: 1390</span></li>
          <li><span>94th percentile</span></li>
        </ul>
        <hr/>
        High School Diploma <span className="date">Apr 2020</span>
        <ul>
          <li><span>Homeschool</span></li>
        </ul>
      </div>
      <div>
        <h2>Work Experience</h2>
        Harvest Homes <span className="date">Sep 2018-Present</span> <br/>
        <ul>
          <li><span>Maintenance</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;

import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="Resume bubble">
      <div>
        <h1>Technical Skills</h1>
        Languages: Javascript, HTML5, CSS, Python, Applescript. <br/>
        Frameworks and Technologies: React, Redux, Git Version Control, AWS(Amplify), Node.js
      </div>
      <div>
        <h1>Education</h1>
        <b>Arizona State University Bachelor of Science in Software Engineering <span className="date">Est. 2024</span></b><hr/>
        <b>SAT</b>
        <ul>
          <li>Score: 1390</li>
          <li>94th percentile</li>
        </ul>
        <hr/>
        <b>High School Diploma</b> <span className="date">Apr 2020</span>
        <ul>
          <li>Homeschool</li>
        </ul>
      </div>
      <div>
        <h1>Work Experience</h1>
        <b>Harvest Homes</b> <span className="date">Sep 2018-Present</span> <br/>
        <ul>
          <li>Maintenance</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;

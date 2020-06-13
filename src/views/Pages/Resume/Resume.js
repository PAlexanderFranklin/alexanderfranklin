import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="Resume">
      <div>
        <h1>Technical Skills</h1>
        <b>Languages:</b> Javascript, HTML5, CSS, Python, Applescript. <br />
        <b>Frameworks and Technologies</b> React, Redux, Git Version Control, AWS(amplify), Node.js
      </div>
      <div>
        <h1>Education</h1>
        <b>Arizona State University Bachelor of Science in Software Engineering: Est. 2024</b><hr />
        <b>SAT</b>
        <ul>
          <li>Score: 1390</li>
          <li>94th percentile</li>
        </ul>
        <b>High School Diploma</b>
        <ul>
          <li>Homeschool</li>
        </ul>
      </div>
      <div>
        <h1>Work Experience</h1>
      </div>
    </div>
  );
}

export default Resume;

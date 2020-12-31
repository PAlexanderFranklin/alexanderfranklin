import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="Resume bubble">
      <div>
        <h2 className="no_top_margin">Technical Skills</h2>
        Languages: Javascript, HTML<span className="number">5</span>, CSS, PHP, Python, Lua, Applescript, C++. <br/>
        Frameworks and Technologies: React, Redux, Git Version Control, AWS(Amplify), Node.js, Solar2D
      </div>
      <div>
        <h2>Work Experience</h2>
        Contracting <span className="date">July <span className="number">2020</span>-Sep <span className="number">2020</span></span> <br/>
        <ul>
          {/*<li><span className="bullet_small">Javascript</span></li>
          <li><span className="bullet_small">PHP</span></li>*/}
          <li><span className="bullet_small">Lua</span></li>
        </ul>
        <hr/>
        Harvest Homes <span className="date">Sep <span className="number">2018</span>-Sep <span className="number">2020</span></span> <br/>
        <ul>
          <li><span className="bullet_small">Maintenance</span></li>
        </ul>
      </div>
      <div>
        <h2>Education</h2>
        Portland Community College GPA: <span className="number">4.0 <span className="date">2020-2021</span></span> <br/>
        Arizona State University Bachelor of Science in Software Engineering <span className="date">Est. <span className="number">2024</span></span>
        <hr/>
        SAT
        <ul>
          <li><span className="bullet_small">Score: <span className="number">1390/1600</span></span></li>
          <li><span className="bullet_small"><span className="number">94</span>th percentile</span></li>
        </ul>
        <hr/>
        High School Diploma <span className="date">April <span className="number">2020</span></span>
        <ul>
          <li><span className="bullet_small">Homeschool</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
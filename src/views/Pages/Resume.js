import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="Resume bubble">
      <div>
        <h2 className="no_top_margin">Technical Skills</h2>
        Languages: Javascript, HTML<span className="number">5</span>, CSS, PHP, Python, Lua, Applescript, C++. <br/>
        Frameworks and Technologies: React, Git Version Control, AWS(Amplify, Cognito, DynamoDB), Node.js, Solar2D
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
        CLEP
        <ul>
          <li><span className="bullet_small">Credits: <span className="number">9</span></span></li>
        </ul>
        <hr/>
        Portland Community College <span className="date number">2020-2021</span>
        <ul>
          <li><span className="bullet_small">Credits: <span className="number">45</span></span></li>
          <li><span className="bullet_small">GPA: <span className="number">4.0</span></span></li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;

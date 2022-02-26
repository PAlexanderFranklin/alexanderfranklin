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
    <Project title="peninsulabaptistchurch.org">
      This is another website I have designed and built. The interesting
      part of it is the "Sermons" page. It uses SQL from within Javascript
      to query an SQLite database that is sent to the frontend. The queries
      support filtering by various categories and searching. There are queries
      for determining page numbers and for listing attributes available to
      filter by.
      <p>
        I designed the database myself. It uses multiple tables to support
        one to many relationships between the data it contains. On the
        maintenance side of the database, I wrote a Python script to populate
        the database with metadata while creating the audio data itself.
      </p>
      <p>
        The audio itself is stored in the mp3 format using a technology called
        Skynet. Skynet stores files in a decentralized network in a manner that
        is accessible from the general internet. The SQLite database stores links
        to the audio files, and the frontend then retrieves them from Skynet
        after querying the database.
      </p>
      <hr/>
      <a
      className="alex_button project_button"
      href="https://peninsulabaptistchurch.org/sermons"
      draggable="false"
      target="_blank"
      rel="noopener noreferrer">
        Link to the Sermons Page
      </a>
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
      className="alex_button project_button"
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
          Visit My Github
      </a>
      {projectArray}
    </div>
  );
}

export default Projects;

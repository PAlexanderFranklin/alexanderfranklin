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
      <p>
        This is another website I have designed and built. The interesting
        part of it is the "Sermons" page. It uses SQL from within Javascript
        to query an SQLite database that is sent to the frontend. The queries
        support filtering by various categories and searching. There are queries
        for determining page numbers and for listing attributes available to
        filter by.
      </p>
      <p>
        I designed the database myself. It uses multiple tables to support
        one to many relationships between the data it contains. On the
        maintenance side of the database, I wrote a Python script to populate
        the database with metadata while processing the audio data itself.
      </p>
      <p>
        The audio is stored in the mp3 format using a technology called
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
        Go to the Sermons Page
      </a>
    </Project>
  );

  projectArray.push(
    <Project title="Bike Rental Analysis">
      <p>
        At the end of the Google Data Analytics Certificate Course, I completed
        this case study to demonstrate some of the skills I had gained
        during the course. I was given a dataset to analyze and a question to answer.
        The dataset consisted of about 5.5 million rows, and since excel didn't
        like that very much, I combined pieces of the dataset into a single
        SQLite database, used SQL to explore and clean the data, and used R
        to visualize the data both for analysis and later for presenting
        conclusions. During the analysis, I was sure to make a note any time
        I removed data for being irrelevent, giving the reasoning for it.
        I also noted when questions were outside the scope of the data, providing
        a possible explanation, but saying further research would be required to
        properly answer a question.
      </p>
      <hr/>
      <a
      className="alex_button project_button"
      href="https://docs.google.com/document/d/13eJaQz383PAIqVBW8PHl4kCzlvMFG7JhnI8_2tSqfAY/edit?usp=sharing"
      draggable="false"
      target="_blank"
      rel="noopener noreferrer">
        Read the Full Case Study
      </a>
    </Project>
  );

  projectArray.push(
    <Project title="Yap">
      <p>
        This is a React application that I created for a weekend hackathon hosted
        by Skynet. It allows you to record audio and upload it to be publicly
        available on Skynet, and then gives you a link that you can share.
        It uses MySky, a Skynet Feature, for authentication. You can use Yap
        without signing in, but MySky stores the audio links so you can find
        them later.
      </p>
      <p>
        Yap is hosted on Skynet rather than a traditional server and DNS model.
        The yasp.hns handshake name points to the app (yap.hns was taken),
        which means that it can be found at yasp.hns.exampleportal.com.
        This works for most Skynet portals, although as of the time of writing
        there are only a few public portals online. The link below takes you
        to yasp.hns.fileportal.org.
      </p>
      <hr/>
      <a
      className="alex_button project_button"
      href="https://yasp.hns.fileportal.org"
      draggable="false"
      target="_blank"
      rel="noopener noreferrer">
        Go to Yap
      </a>
    </Project>
  );

  projectArray.push(
    <Project title="Gravity Rotation Simulator">
      <p>
        Desktop Only.
      </p>
      <p>
        I made this using scratch, a visual block language. It uses its own coordinate system,
        and decides when and where to render objects to the scratch system. It has velocity, acceleration, and
        basic air resistance. It also has basic collision detection.
      </p>
      <hr/>
      <a
      className="alex_button project_button"
      href="https://scratch.mit.edu/projects/212668429/"
      draggable="false"
      target="_blank"
      rel="noopener noreferrer">
        Go to Gravity Simulator
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

import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="content">
      <div className="Home bubble">
        <h1>My name is Alexander Franklin.</h1>
        <p>
          I am a web developer, which means I create websites like this. <br/>
          It also means I google things a lot.
        </p>
        <p>
          I don't just build websites. I like to code no matter the medium, <br/>
          be it Python, or a visual language like scratch, or even a video game.
        </p>
        <p>
          Read more about this website on the <Link to="/projects">projects</Link> page.
        </p>
      </div>
      <div className="Contact bubble">
        <h1>How to contact me</h1>
        <p>
          <b>Email:</b> PAlexanderFranklin@gmail.com <br />
          <b>Phone:</b> 509-930-9363
        </p>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import './Home.css';
import { MdMailOutline, MdPhoneIphone } from "react-icons/md";

function Home() {
  return (
    <div className="content">
      <div className="Home bubble">
        <h2>My name is Alexander Franklin</h2>
        <p>
          I am a web developer, which means I create websites like this. <br/>
          It also means I google things a lot.
        </p>
        <p>
          I don't just build websites. I like to code no matter the medium, <br/>
          be it Python, or a visual language like scratch, or even a video game.
        </p>
        <p>
          Read more about this website on the projects page.
        </p>
      </div>
      <div className="Contact bubble">
        <h2>How to contact me</h2>
        <p>
          <p><MdMailOutline className="icon"/> PAlexanderFranklin@gmail.com </p>
          <MdPhoneIphone className="icon"/> <span className="number">509-930-9363</span>
        </p>
      </div>
    </div>
  );
}

export default Home;

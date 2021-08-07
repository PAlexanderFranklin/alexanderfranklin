import React from 'react';
import './Home.css';
import Movies from './Home/Movies';
import { MdMailOutline, MdPhoneIphone } from "react-icons/md";

function Home() {
  return (
    <div className="content">
      <div className="Home bubble">
        <h2>I'm Alexander Franklin</h2>
        <p>
          I'm a hobbyist programmer looking to grow my skills into a career.
        </p>
        <p>
          I can build websites, like the one you're looking at. I am extremely
          interested in Python development; I love to automate various tasks with it.
          I like to play games that are about programming.
        </p>
        <p>
          Read more about this website on the projects page.
        </p>
      </div>
      <div className="Contact bubble">
        <h2>How to contact me</h2>
        <div>
          <p><MdMailOutline className="icon"/> PAlexanderFranklin@gmail.com </p>
          <MdPhoneIphone className="icon"/> <span className="number">509-930-9363</span>
        </div>
      </div>
      <Movies/>
    </div>
  );
}

export default Home;

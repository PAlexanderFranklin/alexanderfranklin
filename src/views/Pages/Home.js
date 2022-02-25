import React from 'react';
import './Home.css';
import Movies from './Home/Movies';
import { MdMailOutline } from "react-icons/md";

function Home(props) {
  const {authState, user} = props;
  return (
    <div className="content">
      <div className="Home bubble">
        <h2>I'm Alexander Franklin</h2>
        <p>
          I am a general purpose programmer.
          In addition to making React websites, I also make Python scripts
          to automate tasks and make peoples lives easier. For me, Programming
          is more about the logic than about the particular language I am working in.
        </p>
        <p>
          I am also a data analyst. I learned Excel and SQL on my own, and
          then I took a data analytics certificate course from Google. During
          the course, I learned more about SQL and spreadsheets, and I learned
          to program in R. I also learned about collecting, storing, cleaning,
          analyzing, visualizing, and presenting data.
        </p>
        <p>
          To contact me, send me an email at the following address:
        </p>
        <p>
          <MdMailOutline className="icon"/> PAlexanderFranklin@gmail.com
        </p>
      </div>
      <Movies authState={authState} user={user}/>
    </div>
  );
}

export default Home;

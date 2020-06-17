import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import DarkModeButton from './DarkModeButton/DarkModeButton'
import Home from './Pages/Home/Home'
import Resume from './Pages/Resume/Resume'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import {Route} from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let appClass = "";
  if (darkMode) {
    appClass = "dark_mode";
  }
  return (
    <div className={"App " + appClass}>
      <Navbar />
      <DarkModeButton 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
      />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" render={ () => <div>
          Here is my <a href="https://github.com/PAlexanderFranklin">GitHub</a>
        </div>} />
        <Route path="/contact" component={Contact} />
      </div>
      <Route path="/projects" component={Projects} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import DarkModeButton from './DarkModeButton/DarkModeButton';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import PantryAid from './PantryAid/PantryAid';
import PhotoUpload from './Demonstration/PhotoUpload';
import Projects from './Pages/Projects';
import {Route, Switch} from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  let appClass = "";
  if (darkMode) {
    appClass = "dark_mode";
  }
  return (
    <Switch>
      <Route path="/pantryaid" component={PantryAid} />
      <Route path="/">
        <div className={"App " + appClass}>
          <div className="background_tint" />
          <Navbar />
          <DarkModeButton 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
          />
          <div className="content">
            <Switch>
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />
              <Route path="/PhotoUpload" component={PhotoUpload} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import {onAuthUIStateChange} from '@aws-amplify/ui-components';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import DarkModeButton from './DarkModeButton/DarkModeButton';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import PhotoUpload from './Demonstration/PhotoUpload';
import Projects from './Pages/Projects';

function App() {

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
      onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  let appClass = "";
  if (darkMode) {
    appClass = "dark_mode";
  }
  return (
    <Switch>
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
              <Route path="/" render={() => <Home authState={authState} user={user}></Home>} />
            </Switch>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

export default App;

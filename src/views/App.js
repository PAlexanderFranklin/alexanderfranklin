import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home/Home'
import Resume from './Pages/Resume/Resume'
import Projects from './Pages/Projects/Projects'
import Contact from './Pages/Contact/Contact'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" render={ () => <div>
          I have some projects on my <a href="https://github.com/PAlexanderFranklin">GitHub</a>
        </div>} />
        <Route path="/contact" component={Contact} />
      </div>
      <Route path="/projects" component={Projects} />
    </div>
  );
}

export default App;

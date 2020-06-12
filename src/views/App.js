import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home/Home'
import Resume from './Pages/Resume/Resume'
import Contact from './Pages/Contact/Contact'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;

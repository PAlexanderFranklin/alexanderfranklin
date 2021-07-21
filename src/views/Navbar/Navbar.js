import React from 'react';
import './Navbar.css';
import Tab from './Tab';

function Navbar() {
  return (
    <header className="header">
      <nav className="Navbar">
        <ul>
          <Tab link="/" exact={true}>About Me</Tab>
          <Tab link="/resume">Resume</Tab>
          <Tab link="/projects">Projects</Tab>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

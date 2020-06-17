import React from 'react';
import './DarkModeButton.css';

function DarkModeButton(props) {
  const {darkMode, setDarkMode} = props;
  return (
    <button className="dark_mode_toggle" 
    onClick={
      () => {
        if(darkMode === 1) {
          setDarkMode(0);
        }
        else {
          setDarkMode(1);
        }
      }
    }>
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeButton;

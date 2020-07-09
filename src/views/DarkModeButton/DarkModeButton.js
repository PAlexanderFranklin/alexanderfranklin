import React from 'react';
import './DarkModeButton.css';

function DarkModeButton(props) {
  const {darkMode, setDarkMode} = props;
  return (
    <button className="dark_mode_toggle alex_button" 
    onClick={
      () => {
        if(darkMode) {
          setDarkMode(false);
        }
        else {
          setDarkMode(true);
        }
      }
    }
    draggable="false">
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeButton;

import React from 'react';
import './DarkModeButton.css';

function DarkModeButton(props) {
  const {darkMode, setDarkMode} = props;
  return (
    <button className="dark_mode_toggle" 
    onClick={
      () => {
        if(darkMode) {
          setDarkMode(false);
        }
        else {
          setDarkMode(true);
        }
      }
    }>
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeButton;
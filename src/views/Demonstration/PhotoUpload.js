import React from 'react';
import './PhotoUpload.css';

function PhotoUpload() {
  return (
    <div className="bubble">
      <input type="file" accept="image/*" onchange="photoSelection(event)" className="PhotoUpload" multiple></input>
    </div>
  );
}

export default PhotoUpload;
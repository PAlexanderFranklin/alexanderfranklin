import React from 'react';
import './Resume.css';
import pdf from './Resume.pdf'

function Resume() {
  return (
    <div className="Resume">
      <iframe src={pdf} height="1150rem" width="850rem" />
    </div>
  );
}

export default Resume;

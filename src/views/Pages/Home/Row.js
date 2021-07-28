import React from 'react';
import './Row.css';

function Row(props) {
  return (
    <div className="Row">
      <h2>{props.title}, {props.rating}</h2>
    </div>
  );
}

export default Row;

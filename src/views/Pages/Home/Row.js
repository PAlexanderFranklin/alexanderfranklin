import { API } from 'aws-amplify';
import React from 'react';
import './Row.css';

function Row(props) {
  function deleteMovie() {
    API.del("moviesAPI", "/movies/object/" + props.title).then(
      (e) => console.log(e)
    )
  }
  return (
    <div className="Row">
      <h2>{props.title}, {props.rating}, {props.genre}</h2>
      <button onClick={deleteMovie}>Delete</button>
    </div>
  );
}

export default Row;

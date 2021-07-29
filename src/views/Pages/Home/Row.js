import { API } from 'aws-amplify';
import React from 'react';
import './Row.css';

function Row(props) {
  const {refresh, setRefresh, title, rating, genre} = props;
  function deleteMovie() {
    API.del("moviesAPI", "/movies/object/" + title).then(
      setRefresh(refresh + 1)
    )
  }
  return (
    <div className="Row">
      <h2>{title}, {rating}, {genre}</h2>
      <button onClick={deleteMovie}>Delete</button>
    </div>
  );
}

export default Row;

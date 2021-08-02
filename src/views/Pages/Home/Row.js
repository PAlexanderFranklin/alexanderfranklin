import { API } from 'aws-amplify';
import React from 'react';
import './Row.css';
import { FaMinusSquare } from "react-icons/fa";

function Row(props) {
  const {refresh, setRefresh, title, rating, genre} = props;
  function deleteMovie() {
    API.del("moviesAPI", "/movies/object/" + title).then(
      setRefresh(refresh + 1)
    )
  }
  return (
    <tr className="Row">
      <td>{title}</td>
      <td>{rating}</td>
      <td>{genre}</td>
      <td><button onClick={deleteMovie} className="delete"><FaMinusSquare className="icon" /></button></td>
    </tr>
  );
}

export default Row;

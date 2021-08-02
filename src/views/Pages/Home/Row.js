import { API } from 'aws-amplify';
import React, { useState } from 'react';
import './Row.css';
import { FaMinusSquare } from "react-icons/fa";

function Row(props) {
  const {title, rating, genre} = props;
  const [rowClass, setRowClass] = useState("");
  function deleteMovie() {
    API.del("moviesAPI", "/movies/object/" + title).then(
      () => setRowClass(" invisible"), e => console.log(e)
    )
  }
  return (
    <tr className={"Row" + rowClass}>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{genre}</td>
      <td><button onClick={deleteMovie} className="delete"><FaMinusSquare className="icon delete_icon" /></button></td>
    </tr>
  );
}

export default Row;

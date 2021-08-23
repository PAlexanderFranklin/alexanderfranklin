import { API } from 'aws-amplify';
import React, { useState } from 'react';
import './Row.css';
import { FaMinusSquare } from "react-icons/fa";

function Row(props) {
  const {id, title, rating, genre, authState} = props;
  const [rowClass, setRowClass] = useState("");
  function deleteMovie() {
    try {
      API.del("MovieAPI", "/movies/" + id.replace("#", "%23")).then(
        () => setRowClass(" invisible"), e => console.log(e)
      )
    }
    catch {
      console.log("failed to delete " + title)
    }
  }
  return (
    <tr className={"Row" + rowClass}>
      <td>{title}</td>
      <td>{genre}</td>
      <td className="number">{rating}</td>
      {authState === "signedin" ?
        <td>
          <button onClick={deleteMovie} className="delete_movie">
            <FaMinusSquare className="delete_icon" />
          </button>
        </td>
      : null}
    </tr>
  );
}

export default Row;

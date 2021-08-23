import { API } from 'aws-amplify';
import React, { useState } from 'react';
import './AddMovie.css';

function AddMovie(props) {
  const { movieData, setMovieData } = props;
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);

  function onSubmit(event) {
    event.preventDefault();
    if (title !== "") {
      API.post("MovieAPI", "/movies", {
        body: {
          title: title,
          genre: genre,
          rating: rating
        }
      }).then(
        (response) => setMovieData([...movieData, {SK: response.SK, title: title, genre: genre, rating: rating}]),
        (e) => console.log(e)
      );
    }
    else {
      console.log("Please add a title!");
    }
  }

  return (
    <form className="AddMovie" onSubmit={onSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          value={genre}
          onChange={(e) => {setGenre(e.target.value)}}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          min="0.0"
          step="0.5"
          max="5.0"
          value={rating}
          onChange={(e) => {setRating(e.target.value)}}
        />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
}

export default AddMovie;

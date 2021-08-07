import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import './Movies.css';
import AddMovie from './AddMovie';
import Row from './Row';

function Movies() {
  const prefixes = ["red ","blue ","yellow ",
                  "power ","super ","speedy ",
                  "the last ","the first "];
  const names = ["cars","knights","men",
              "dwarves","atom smasher","pump stack",
              "fluffy wamblers","dragon"];
  const genres = ["adventure", "drama", "horror",
                  "comedy", "romance", "mystery"];

  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    async function stuff() {
      let data = await API.get("moviesAPI", "/movies/PK");
      setMovieData(data);
    }
    stuff();
  }, [])

  function addMovie() {
    let title = prefixes[Math.floor(Math.random() * prefixes.length)]
    + names[Math.floor(Math.random() * names.length)];
    let genre = genres[Math.floor(Math.random() * genres.length)];
    let rating = Math.floor(Math.random() * 11) * 0.5;
    API.post("moviesAPI", "/movies", {
      body: {
        title: title,
        genre: genre,
        rating: rating
      }
    }).then(
      () => setMovieData([...movieData, {title: title, genre: genre, rating: rating}]),
      (e) => console.log(e)
    );
  }

  return (
    <div className="Movies bubble">
      <p>
        The following table is a simple database demonstration
        using AWS API gateway, Lambda, and DynamoDB.
      </p>
      <button onClick={addMovie} className="alex_button add_movies">Add a random movie to the database</button>
      <AddMovie />
      <table className="movie_table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map(element => 
            <Row
              key={element.SK}
              title={element.title}
              rating={element.rating}
              genre={element.genre}/>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import './Movies.css';
import Row from './Row';

function Movies() {
  const [refresh, setRefresh] = useState(0);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(1);

  const prefixes = ["red ","blue ","yellow ",
                  "power ","super ","speedy ",
                  "the last ","the first "];
  const names = ["cars","knights","men",
              "dwarves","atom smasher","pump stack",
              "fluffy wamblers","dragon"];
  const genres = ["adventure", "drama", "horror",
                  "comedy", "romance", "mystery"];

  useEffect(() => {
    setTitle(prefixes[Math.floor(Math.random() * prefixes.length)]
    + names[Math.floor(Math.random() * names.length)]);
    setGenre(genres[Math.floor(Math.random() * genres.length)]);
    setRating(Math.floor(Math.random() * 11) * 0.5);
  }, [refresh]);

  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    async function stuff() {
      let data = await API.get("moviesAPI", "/movies/title");
      console.log(data);
      setMovieData(data);
    }
    stuff();
  }, [refresh])

  function addMovie() {
    API.post("moviesAPI", "/movies", {
      body: {
        title: title,
        genre: genre,
        rating: rating
      }
    }).then((e) => {console.log(e)
      setRefresh(refresh + 1);
    });
  }

  return (
    <div className="Movies bubble">
      <button onClick={addMovie} className="alex_button add_movies">Add a random movie to the database</button>
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
              title={element.title}
              rating={element.rating}
              genre={element.genre}
              refresh={refresh}
              setRefresh={setRefresh}/>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
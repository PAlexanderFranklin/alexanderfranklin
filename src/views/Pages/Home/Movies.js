import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import './Movies.css';
import Row from './Row';

function Movies() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(1);

  let prefixes = ["red ","blue ","yellow ",
                  "power ","super ","speedy ",
                  "the last ","the first "];
  let names = ["cars","knights","men",
              "dwarves","atom smasher","pump stack",
              "fluffy wamblers","dragon"];
  let genres = ["action", "adventure", "drama", "horror"];

  useEffect(() => {
    setTitle(prefixes[Math.floor(Math.random() * prefixes.length)]
    + names[Math.floor(Math.random() * names.length)]);
    setGenre(genres[Math.floor(Math.random() * genres.length)]);
    setRating(Math.floor(Math.random() * 11) * 0.5);
  }, [])


  let rows = [];
  rows.push(<Row title={title} rating={rating} genre={genre}/>);

  const [movieData, setMovieData] = useState("hi");
  useEffect(() => {
    async function stuff() {
      let data = await API.get("moviesAPI", "/movies/title");
      console.log(data);
      setMovieData(data);
    }
    stuff();
  }, [])

  function addMovie() {
    API.post("moviesAPI", "/movies", {
      body: {
        title: title,
        genre: genre,
        rating: rating
      }
    }).then((e) => console.log(e));
  }

  return (
    <div className="Movies bubble">
      <button onClick={addMovie}>Add a movie to the database</button>
      {rows}
    </div>
  );
}

export default Movies;
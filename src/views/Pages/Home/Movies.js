import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import './Movies.css';
import Row from './Row';

function Movies() {
  let movies = [];
  let prefixes = ["red ","blue ","yellow ",
                  "power ","super ","speedy ",
                  "the last ","the first "];
  let names = ["cars","knights","men",
              "dwarves","atom smasher","pump stack",
              "fluffy wamblers","dragon"];
  let amount = Math.floor(Math.random()*15);

  for (let i = 0; i < amount; i++) {
    let a = new Object();
    movies.unshift(a)
    movies[0].name = (prefixes[Math.floor(Math.random() * prefixes.length)]
                    + names[Math.floor(Math.random() * names.length)]);
    movies[0].rating = (Math.floor(Math.random() * 11) * 0.5);
  }

  let rows = [];
  rows.push(<Row title="Safety Last" rating="5"/>);

  const [movieData, setMovieData] = useState("hi");
  useEffect(() => {
    async function stuff() {
      return await API.get("movieAPI", "/movies");
    }
    setMovieData(stuff());
    console.log(movieData);
  }, [])

  return (
    <div className="Movies bubble">
      {rows}
    </div>
  );
}

export default Movies;
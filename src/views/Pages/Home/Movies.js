import Amplify, { API } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
import {AmplifyAuthenticator, AmplifyAuthContainer, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';
import React, { useEffect, useState } from 'react';
import './Movies.css';
import AddMovie from './Movies/AddMovie';
import Row from './Movies/Row';

Amplify.configure(awsconfig);

function Movies() {

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
      onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    async function stuff() {
      let data = await API.get("MovieAPI", "/movies/:PK");
      setMovieData(data);
    }
    stuff();
  }, [authState])

  // function addMovie() {
  //   let title = prefixes[Math.floor(Math.random() * prefixes.length)]
  //   + names[Math.floor(Math.random() * names.length)];
  //   let genre = genres[Math.floor(Math.random() * genres.length)];
  //   let rating = Math.floor(Math.random() * 11) * 0.5;
  //   API.post("MovieAPI", "/movies", {
  //     body: {
  //       title: title,
  //       genre: genre,
  //       rating: rating
  //     }
  //   }).then(
  //     (response) => setMovieData([...movieData, {SK: response.SK, title: title, genre: genre, rating: rating}]),
  //     (e) => console.log(e)
  //   );
  // }

  return (
    <div className="Movies bubble">
      <p>
        The following table is a database demonstration
        using AWS API gateway, Lambda, and DynamoDB coupled
        with authentication through AWS Cognito. Signing in
        allows you to create, read, and delete items tied
        to your account. Guest users can only read items
        from my own account.
      </p>
      {authState === AuthState.SignedIn && user ? (
        <div>
            <div>Hello, {user.username}</div>
            <AmplifySignOut />
            <AddMovie />
        </div>
      ) : (
        <AmplifyAuthContainer>
          <AmplifyAuthenticator>
            <AmplifySignUp
              slot="sign-up"
              formFields={[
                {type: "username"},
                {type: "email"},
                {type: "password"}
              ]}
            />
          </AmplifyAuthenticator>
        </AmplifyAuthContainer>
      )}
      <table className="movie_table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Rating</th>
            {authState === AuthState.SignedIn ? <th>Delete</th> : null}
          </tr>
        </thead>
        <tbody>
          {movieData.map(element => 
            <Row
              key={element.SK}
              id={element.SK}
              title={element.title}
              rating={element.rating}
              genre={element.genre}
              authState={authState}/>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
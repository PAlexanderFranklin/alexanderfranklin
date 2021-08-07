import React from 'react';
import './AddMovie.css';
import SignOut from './SignOut'
import Amplify from 'aws-amplify';
import awsconfig from '../../../../aws-exports';
import {AmplifyAuthenticator, AmplifySignUp} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';

Amplify.configure(awsconfig);

function AddMovie(props) {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
      onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  return authState === AuthState.SignedIn && user ? (
      <div className="AddMovie">
          <div>Hello, {user.username}</div>
          <SignOut />
      </div>
    ) : (
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            {type: "email"},
            {type: "password"}
          ]}
          usernameAlias="email"
        />
      </AmplifyAuthenticator>
  );
}

export default AddMovie;

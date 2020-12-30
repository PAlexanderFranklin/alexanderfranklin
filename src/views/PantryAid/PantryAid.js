import React from 'react';
import './PantryAid.css';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import {AmplifyAuthenticator, AmplifySignUp, AmplifySignOut} from '@aws-amplify/ui-react';
import {AuthState, onAuthUIStateChange} from '@aws-amplify/ui-components';

Amplify.configure(awsconfig);

function PantryAid() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
      onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);

  return authState === AuthState.SignedIn && user ? (
      <div className="PantryAid">
          <div>Hello, {user.username}</div>
          <AmplifySignOut />
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

export default PantryAid
import React from 'react';
import './PantryAid.css';
import Amplify from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function PantryAid() {
  return (
    <div className="PantryAid">
      <AmplifyAuthenticator usernameAlias="email" />
      <div>PantryAid</div>
    </div>
  );
}

export default PantryAid
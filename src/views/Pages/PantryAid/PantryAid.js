import React from 'react';
import './PantryAid.css';
import Amplify from 'aws-amplify';
import awsmobile from '../../../aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsmobile);

function PantryAid() {
  return (
    <div className="PantryAid">
      PantryAid
    </div>
  );
}

export default withAuthenticator(PantryAid, true);
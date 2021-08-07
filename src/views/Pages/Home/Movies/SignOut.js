import React from 'react';
import './SignOut.css';
import { Auth } from 'aws-amplify';

function SignOut() {
  return (
    <button className="SignOut" 
    onClick={
      async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
      }
    }
    draggable="false">
      Sign out
    </button>
  );
}

export default SignOut;

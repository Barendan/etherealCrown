import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from './firebase'; // update path to your firestore config

const googleHandler = async () => {
  provider.setCustomParameters({ prompt: 'select_account' });

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('worked perfectly');
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // redux action? --> dispatch({ type: SET_USER, user });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        console.log('didnt work cause:', errorCode || errorMessage);
        console.log('credential used:', email && credential);
    });
};


// googleHandler()

// signOut(auth)
// .then(() => {
//     console.log('logged out');
//     // navigate('/');
// })
// .catch((error) => {
//     console.log(error);
// });
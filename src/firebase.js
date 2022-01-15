// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyA1AGJ99aTP0SbYcXK9V3th36I3p5BHYjg",
//   authDomain: "etherealcrowndb.firebaseapp.com",
//   projectId: "etherealcrowndb",
//   storageBucket: "etherealcrowndb.appspot.com",
//   messagingSenderId: "133251396322",
//   appId: "1:133251396322:web:a5decaaa1a39cbdd2864bb"
// };

// // Initialize Firebase and Firestore
// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)
// export {db}


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA1AGJ99aTP0SbYcXK9V3th36I3p5BHYjg",
  authDomain: "etherealcrowndb.firebaseapp.com",
  projectId: "etherealcrowndb",
  storageBucket: "etherealcrowndb.appspot.com",
  messagingSenderId: "133251396322",
  appId: "1:133251396322:web:a5decaaa1a39cbdd2864bb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


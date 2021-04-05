import firebase from 'firebase/app';

import 'firebase/firestore' ;

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMZVBFJpgTjJMS8U1oDJVQxiHMetQGd7M",
    authDomain: "crwn-db-5e0b3.firebaseapp.com",
    projectId: "crwn-db-5e0b3",
    storageBucket: "crwn-db-5e0b3.appspot.com",
    messagingSenderId: "778235351507",
    appId: "1:778235351507:web:0f02198c3748bc7804df26",
    measurementId: "G-5VWYGQX3DX"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
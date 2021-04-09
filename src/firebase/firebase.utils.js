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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
          console.log('error creating user', error.message);
      }
    }

    return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
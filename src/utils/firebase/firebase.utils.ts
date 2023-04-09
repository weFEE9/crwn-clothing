// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  User,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAo6F9jGyVsQlca5wiDW9TNCg8-8hZedHk',
  authDomain: 'crwn-clothing-38095.firebaseapp.com',
  projectId: 'crwn-clothing-38095',
  storageBucket: 'crwn-clothing-38095.appspot.com',
  messagingSenderId: '588050815672',
  appId: '1:588050815672:web:4f1d27b680cb81038ff24d',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (user: User) => {
  const userDocRef = doc(db, 'users', user.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  const userIsExist = userSnapshot.exists();
  if (!userIsExist) {
    const { displayName, email } = user;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log('error create the user', error);
    }
  }

  return userDocRef;
};

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

import { Collection } from '../../contexts/products.context';

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

export const addCollectionAndDocuments = async (
  collectionKey: string,
  shopCollections: Collection[]
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  shopCollections.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const createUserDocumentFromAuth = async (user: User) => {
  if (!user) return;

  const userDocRef = doc(db, 'users', user.uid);

  const userSnapshot = await getDoc(userDocRef);

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

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  signOut(auth);
};

export const onAuthStateChangedListener = (
  callback: (user: User | null) => void
) => onAuthStateChanged(auth, callback);

export const getCategoriesAndDocuments = async (): Promise<
  ShopCollection[]
> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data() as ShopCollection;

    return data;
  });
};

type ShopCollection = {
  title: string;
  items: Product[];
};

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

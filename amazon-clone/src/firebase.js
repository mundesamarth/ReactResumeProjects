// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtxl7Y9np61YRNZIFTLhNdKvMV7VlA_VE",
  authDomain: "clone1-1beed.firebaseapp.com",
  projectId: "clone1-1beed",
  storageBucket: "clone1-1beed.appspot.com",
  messagingSenderId: "95428142774",
  appId: "1:95428142774:web:39dfadd6aa493691fb6817",
  measurementId: "G-PY6Y1Q1SYQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
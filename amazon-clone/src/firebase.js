import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpCK7JAOLT-_kac-08z8UZsUMYTdIBSJU",
  authDomain: "challenge-e33f7.firebaseapp.com",
  databaseURL: "https://challenge-e33f7.firebaseio.com",
  projectId: "challenge-e33f7",
  storageBucket: "challenge-e33f7.appspot.com",
  messagingSenderId: "856171684712",
  appId: "1:856171684712:web:2a4677a2a337ded374ecdd",
  measurementId: "G-SKRHJPZ24Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

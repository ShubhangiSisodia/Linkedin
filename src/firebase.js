import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCrbk_PoJDJgX2B3suTtwnrclj2F38jot0",
    authDomain: "linkedin-1c6d8.firebaseapp.com",
    projectId: "linkedin-1c6d8",
    storageBucket: "linkedin-1c6d8.appspot.com",
    messagingSenderId: "7476591383",
    appId: "1:7476591383:web:915786d138058d3cb81552"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

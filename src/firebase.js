import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6l8pWZDxua5Yrs8qqeZB51VHJSzDeD4Q",
  authDomain: "linkedin-clone-edaff.firebaseapp.com",
  projectId: "linkedin-clone-edaff",
  storageBucket: "linkedin-clone-edaff.appspot.com",
  messagingSenderId: "74234222276",
  appId: "1:74234222276:web:897abe684607ed0b325b91",
  measurementId: "G-84TNSXBQ6F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();

export { db, auth};

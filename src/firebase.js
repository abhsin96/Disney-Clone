import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrTlqwRBpqyWU6CgB6e-1bGIvVAiRPSZ4",
  authDomain: "disney-clone-66d13.firebaseapp.com",
  projectId: "disney-clone-66d13",
  storageBucket: "disney-clone-66d13.appspot.com",
  messagingSenderId: "283528529260",
  appId: "1:283528529260:web:a6e03254ff66edc0275f49",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

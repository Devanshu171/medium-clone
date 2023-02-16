import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9ENM2igTBlfM78UhC-oJ12AJMoh4mvxw",
  authDomain: "medium-clone-20602.firebaseapp.com",
  projectId: "medium-clone-20602",
  storageBucket: "medium-clone-20602.appspot.com",
  messagingSenderId: "915318857508",
  appId: "1:915318857508:web:3824f97f8093329288ddb1",
  measurementId: "G-RNFB1YRT5V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };

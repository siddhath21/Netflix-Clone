
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4fjBLbKF5jFYvHb5SuetrCjtqaD-J3aU",
  authDomain: "netflix-clone-react-4a6de.firebaseapp.com",
  projectId: "netflix-clone-react-4a6de",
  storageBucket: "netflix-clone-react-4a6de.appspot.com",
  messagingSenderId: "446750393777",
  appId: "1:446750393777:web:50c7058e8d82e882b86990",
  measurementId: "G-2GRKQFGKPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app)
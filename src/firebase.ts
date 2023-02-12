import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPjMffw4gnfA911Dqn2WlPrtPl_PEMqEY",
  authDomain: "side-project-aca2a.firebaseapp.com",
  projectId: "side-project-aca2a",
  storageBucket: "side-project-aca2a.appspot.com",
  messagingSenderId: "865263554448",
  appId: "1:865263554448:web:177c13255bbf42aaa9ed15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrsjBhCaDowfY_cXuM0F2sxI-6RnNyk6c",
  authDomain: "portfolio-a299f.firebaseapp.com",
  projectId: "portfolio-a299f",
  storageBucket: "portfolio-a299f.appspot.com",
  messagingSenderId: "95994699729",
  appId: "1:95994699729:web:29f603892a140790f64af0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
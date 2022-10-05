// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0HT-2I4Gfovm2chqX5d4qO_XBfY0nYLc",
  authDomain: "score-c9097.firebaseapp.com",
  projectId: "score-c9097",
  storageBucket: "score-c9097.appspot.com",
  messagingSenderId: "1060209581131",
  appId: "1:1060209581131:web:51593a925b46ade50401ce",
  measurementId: "G-53HH7RRTET"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
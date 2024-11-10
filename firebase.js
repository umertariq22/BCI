// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYlsc4oc6fM5ZeFLLh4sPPr9gCP8iudPY",
  authDomain: "brain-computer-interface-cc169.firebaseapp.com",
  projectId: "brain-computer-interface-cc169",
  storageBucket: "brain-computer-interface-cc169.firebasestorage.app",
  messagingSenderId: "493843400374",
  appId: "1:493843400374:web:ad8dcc56bb51adb7e78817",
  measurementId: "G-TNNMPMPZCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
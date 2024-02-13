// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Dd5jnzmzhHTVks_BDypq4Nh3hudOUdA",
  authDomain: "portfoliosite-4bf1a.firebaseapp.com",
  projectId: "portfoliosite-4bf1a",
  storageBucket: "portfoliosite-4bf1a.appspot.com",
  messagingSenderId: "595995385505",
  appId: "1:595995385505:web:e1e482540b5138ac3edae0",
  measurementId: "G-YYBE904TZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
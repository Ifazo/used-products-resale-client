// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5XvYL4B8PFv92FFH-IoNYllr7MKKpt7M",
  authDomain: "resale-shop-7bf9b.firebaseapp.com",
  projectId: "resale-shop-7bf9b",
  storageBucket: "resale-shop-7bf9b.appspot.com",
  messagingSenderId: "505013620790",
  appId: "1:505013620790:web:42a1bae693cb9af49f0897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
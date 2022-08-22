import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//firebaase Setup step 1
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjWdePyN6-R98XPOC33S494Rh92otboxc",
  authDomain: "cart-ca740.firebaseapp.com",
  projectId: "cart-ca740",
  storageBucket: "cart-ca740.appspot.com",
  messagingSenderId: "90312470526",
  appId: "1:90312470526:web:045b237b60933d4ca15aaf"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //create instance of firebase access and export it 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


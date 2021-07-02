import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; 
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkK5uBnLK2Hye0_Yr6zLJ3oYv-iLo81lY",
  authDomain: "cart-15d88.firebaseapp.com",
  projectId: "cart-15d88",
  storageBucket: "cart-15d88.appspot.com",
  messagingSenderId: "558585835222",
  appId: "1:558585835222:web:d6aa87b209019f8d39a377"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



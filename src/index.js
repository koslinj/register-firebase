import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyDnAmcmCSzOA00t8AKHQmWta6FfOq513Ys",
  authDomain: "register-firebase-first.firebaseapp.com",
  projectId: "register-firebase-first",
  storageBucket: "register-firebase-first.appspot.com",
  messagingSenderId: "654052257807",
  appId: "1:654052257807:web:df24697d21bfba7f8bf37a"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

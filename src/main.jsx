import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArolQsgxiUX8-umYftdMlpI2-k01UNvDM",
  authDomain: "my-fullstack-blog-71898.firebaseapp.com",
  projectId: "my-fullstack-blog-71898",
  storageBucket: "my-fullstack-blog-71898.appspot.com",
  messagingSenderId: "508921717499",
  appId: "1:508921717499:web:66b6eeb339784aa14fc65e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

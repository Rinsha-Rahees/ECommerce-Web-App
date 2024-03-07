import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBZQeB0Szg7GuU93pz0wSpTd6RztC9UMdA",
  authDomain: "e-commerce-71602.firebaseapp.com",
  projectId: "e-commerce-71602",
  storageBucket: "e-commerce-71602.appspot.com",
  messagingSenderId: "170400589404",
  appId: "1:170400589404:web:fbacfb8d2c14f948b8e899",
  measurementId: "G-BQ06NVJH9N"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
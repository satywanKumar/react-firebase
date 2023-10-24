import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcf0lwjzPJNIq5LBt4CsUZj3PW1-k7a9g",
  authDomain: "fir-sbs-2d8b6.firebaseapp.com",
  databaseURL: "https://fir-sbs-2d8b6-default-rtdb.firebaseio.com",
  projectId: "fir-sbs-2d8b6",
  storageBucket: "fir-sbs-2d8b6.appspot.com",
  messagingSenderId: "573847980856",
  appId: "1:573847980856:web:989fbc1e84e62226f7cfcd",
  measurementId: "G-BGGM0NWVK5"
};

export const app = initializeApp(firebaseConfig);

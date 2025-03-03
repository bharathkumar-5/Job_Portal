// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };
const firebaseConfig = {
  apiKey: "AIzaSyAOXvqU_wW1s24BZvFLXSLmY4oDGRLWtxo",
authDomain: "jobportal7.firebaseapp.com",
projectId: "jobportal7",
storageBucket: "jobportal7.firebasestorage.app",
messagingSenderId: "306935229617",
appId: "1:306935229617:web:25d10ddb6e364bb9d0c690",
measurementId: "G-M23YRS1YK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
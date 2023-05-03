// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCznYNzZ0vPe9PCwhFWRTduJ6EFUuTkScQ",
  authDomain: "chef-recipe-hunter-auth-426d4.firebaseapp.com",
  projectId: "chef-recipe-hunter-auth-426d4",
  storageBucket: "chef-recipe-hunter-auth-426d4.appspot.com",
  messagingSenderId: "34841147066",
  appId: "1:34841147066:web:dee31c3f917d707decf483"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
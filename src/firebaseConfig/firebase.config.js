import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEbUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDER,
  appId: import.meta.env.VITE_APPID
};
 */

const firebaseConfig = {
  apiKey: "AIzaSyB9IHn_QtF0Y34GXlljvMdlLdbEVEO1XW4",
  authDomain: "dragon-news-fc225.firebaseapp.com",
  projectId: "dragon-news-fc225",
  storageBucket: "dragon-news-fc225.firebasestorage.app",
  messagingSenderId: "1087613195523",
  appId: "1:1087613195523:web:8bdab831c438a78f394536"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


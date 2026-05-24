import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCe4O8XGAri5bbLV0j8NCFN6UqRq9W-fh0",
  authDomain: "play-zone-3e22f.firebaseapp.com",
  databaseURL: "https://play-zone-3e22f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "play-zone-3e22f",
  storageBucket: "play-zone-3e22f.firebasestorage.app",
  messagingSenderId: "26800447077",
  appId: "1:26800447077:web:8e5b22b291a3fa9527308c",
  measurementId: "G-F1D3HP6SD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database = getDatabase(app);

// Initialize Auth
export const auth = getAuth(app);

export default app;

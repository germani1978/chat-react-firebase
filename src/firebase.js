import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-ad34e.firebaseapp.com",
    projectId: "reactchat-ad34e",
    storageBucket: "reactchat-ad34e.appspot.com",
    messagingSenderId: "359966974129",
    appId: "1:359966974129:web:6f32ccae1e8e2659124290"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth()//login
export const db = getFirestore()//user information
export const storage = getStorage()//images
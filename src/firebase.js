import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCPBwY5BK6rj4zS16GPacpPiZ6DG9KkQXs",
  authDomain: "sam-project-5839a.firebaseapp.com",
  projectId: "sam-project-5839a",
  storageBucket: "sam-project-5839a.firebasestorage.app",
  messagingSenderId: "187369760334",
  appId: "1:187369760334:web:84b31660f4baac4612c51f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

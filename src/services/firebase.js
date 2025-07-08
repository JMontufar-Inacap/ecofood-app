import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXcXhmt9UKUKRQaMPYgT6YrhpziMe3cik",
  authDomain: "ecofood-app-3aca6.firebaseapp.com",
  projectId: "ecofood-app-3aca6",
  storageBucket: "ecofood-app-3aca6.firebasestorage.app",
  messagingSenderId: "421805256333",
  appId: "1:421805256333:web:b508ea95d7868fd7d7fcc4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
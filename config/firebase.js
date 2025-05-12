import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "feraset-defc8.firebaseapp.com",
  projectId: "feraset-defc8",
  storageBucket: "feraset-defc8.firebasestorage.app",
  messagingSenderId: "772959000216",
  appId: "1:772959000216:web:91fda5c0e39a19f6cfa2ed",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
connectFirestoreEmulator(db, "127.0.0.1", 8080);

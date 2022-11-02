import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkj7UDg8I1Yz68ci1k8PJEYj0jHUxLRvc",
  authDomain: "react-firebase-dc259.firebaseapp.com",
  projectId: "react-firebase-dc259",
  storageBucket: "react-firebase-dc259.appspot.com",
  messagingSenderId: "5905990535",
  appId: "1:5905990535:web:c6967f9d3f6f6f39dd8922"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
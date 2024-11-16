import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAE1-8KUPVse46HGQq6ixVgBsLDvZiUsRE",
    authDomain: "calculadora-margens.firebaseapp.com",
    projectId: "calculadora-margens",
    storageBucket: "calculadora-margens.firebasestorage.app",
    messagingSenderId: "275467252343",
    appId: "1:275467252343:web:53b481955c321cd145cc72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
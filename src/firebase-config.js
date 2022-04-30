import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAoC0F8qGKKnWMmsVXx1qaDPFjnTd6dhdc",
    authDomain: "mypersonalblog-a97b2.firebaseapp.com",
    projectId: "mypersonalblog-a97b2",
    storageBucket: "mypersonalblog-a97b2.appspot.com",
    messagingSenderId: "562371714222",
    appId: "1:562371714222:web:148ee4795c76f3e737a13f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
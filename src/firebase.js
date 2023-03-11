// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";


// const firebaseConfig = {
//     apiKey: "AIzaSyDWPE2LdoOskqTM1Zn8o8-QTPnCUcMUlM8",
//     authDomain: "fdgdfgf-2fd53.firebaseapp.com",
//     projectId: "fdgdfgf-2fd53",
//     storageBucket: "fdgdfgf-2fd53.appspot.com",
//     messagingSenderId: "200789884810",
//     appId: "1:200789884810:web:8b25035065525ffcb1d273",
//     measurementId: "G-YGNXGKK96P"
// };

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDWPE2LdoOskqTM1Zn8o8-QTPnCUcMUlM8",
    authDomain: "fdgdfgf-2fd53.firebaseapp.com",
    projectId: "fdgdfgf-2fd53",
    storageBucket: "fdgdfgf-2fd53.appspot.com",
    messagingSenderId: "200789884810",
    appId: "1:200789884810:web:96eb34c7f3bd405fb1d273",
    measurementId: "G-JL19KER0Q1"
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db =  getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0-gLRCnfURakfRzykzWk88j2FKIPda1c",
    authDomain: "car-spare-parts-6b231.firebaseapp.com",
    projectId: "car-spare-parts-6b231",
    storageBucket: "car-spare-parts-6b231.appspot.com",
    messagingSenderId: "682435067773",
    appId: "1:682435067773:web:9a1adc95de191ab3921614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
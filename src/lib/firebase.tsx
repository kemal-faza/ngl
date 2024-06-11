// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC_2v846ZMDdkKEivd9hfvAyDUoM8Q2sdU",
	authDomain: "ngl-messages.firebaseapp.com",
	projectId: "ngl-messages",
	storageBucket: "ngl-messages.appspot.com",
	messagingSenderId: "361806695786",
	appId: "1:361806695786:web:a4941dfe649a8c5530e913",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

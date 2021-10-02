import firebase from 'firebase'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbsuglfAYlDf2GKx1XeAvWspUT9q-wJE",
  authDomain: "sweetstylereact.firebaseapp.com",
  projectId: "sweetstylereact",
  storageBucket: "sweetstylereact.appspot.com",
  messagingSenderId: "782198088841",
  appId: "1:782198088841:web:5019e56b8809ec21f71258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


    export function getFirebase(){
        return app
    }


    export function getFirestore(){
        
        return firebase.firestore(app)
    }

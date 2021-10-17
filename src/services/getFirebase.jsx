import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-H6gT0XH23zRYhrc4Ydhoi9ukwpu_-kQ",
  authDomain: "sweetstylereact-49ab2.firebaseapp.com",
  projectId: "sweetstylereact-49ab2",
  storageBucket: "sweetstylereact-49ab2.appspot.com",
  messagingSenderId: "466884822281",
  appId: "1:466884822281:web:79aa33d21f8ab58d43bfd8",
};

const app = initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}

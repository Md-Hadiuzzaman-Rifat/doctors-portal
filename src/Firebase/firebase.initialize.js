// import { initializeApp } from "firebase/app";
// import firebaseConfig from "./firebase.config";

// const firebaseInitialize = () => {
//     return initializeApp(firebaseConfig)
// };

// export default firebaseInitialize;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEdFxSeKVAZdZabzZXpt0xmvUyWDiWv2c",
  authDomain: "doctors-portal-cad79.firebaseapp.com",
  projectId: "doctors-portal-cad79",
  storageBucket: "doctors-portal-cad79.appspot.com",
  messagingSenderId: "48536125657",
  appId: "1:48536125657:web:5354378ab65ce350987ec8"
};

export default function app(){
    return initializeApp(firebaseConfig)
}
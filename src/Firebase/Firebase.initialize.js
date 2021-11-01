import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initalAuthentication = () => {
     initializeApp(firebaseConfig);
}

export default initalAuthentication;

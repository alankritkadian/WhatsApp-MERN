import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCQdzn4bVNBkx2Qri2ezSiBQXZ4fd5rZA8",
    authDomain: "whatsapp-mern-cf67d.firebaseapp.com",
    projectId: "whatsapp-mern-cf67d",
    storageBucket: "whatsapp-mern-cf67d.appspot.com",
    messagingSenderId: "1010824552392",
    appId: "1:1010824552392:web:a5f9159a9f31e02be1aafd"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider= new GoogleAuthProvider(firebaseApp);

export {auth, provider};
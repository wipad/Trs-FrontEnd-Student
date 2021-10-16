
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import env from '@beam-australia/react-env'
// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";
import "firebase/firestore";

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: env("FIREBASE_API_KEY"),
    authDomain: env("FIREBASE_AUTH_DOMAIN"),
    projectId: env("FIREBASE_PROJECT_ID"),
    storageBucket: env("FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: env("FIREBASE_MESSAGING_SENDER_ID"),
    appId: env("FIREBASE_APP_ID"),
    measurementId: env("FIREBASE_MEASUREMENT_ID")
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;
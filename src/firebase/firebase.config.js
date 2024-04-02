require('dotenv').config();
const apiKEY = process.env.API_KEY || null
const authDOMAIN = process.env.AUTH_DOMAIN || null
const projectID = process.env.PROJECT_ID || null
const storageBUCKET = process.env.STORAGE_BUCKET || null
const messagingSENDERID = process.env.MESSAGING_SENDER_ID || null
const appID = process.env.APP_ID || null
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKEY,
  authDomain: authDOMAIN,
  projectId: projectID,
  storageBucket: storageBUCKET,
  messagingSenderId: messagingSENDERID,
  appId: appID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
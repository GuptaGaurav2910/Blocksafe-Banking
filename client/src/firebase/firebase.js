import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT4h2kIwim8Xc_dFDLOxSk1HmiPDztgY0",
  authDomain: "blocksafe-banking.firebaseapp.com",
  databaseURL: "https://blocksafe-banking-default-rtdb.firebaseio.com",
  projectId: "blocksafe-banking",
  storageBucket: "blocksafe-banking.appspot.com",
  messagingSenderId: "1078774002158",
  appId: "1:1078774002158:web:22c82b4c9e57dfa8e71eff",
  measurementId: "G-ZWRCFPQW1Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app };


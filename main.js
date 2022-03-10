// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdwCHhsYtxYni_ohD3sWf_mh0nMbU7eQY",
  authDomain: "abmproductos-d7324.firebaseapp.com",
  projectId: "abmproductos-d7324",
  storageBucket: "abmproductos-d7324.appspot.com",
  messagingSenderId: "454237306075",
  appId: "1:454237306075:web:456471319be0f47b2da0fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore()

export const agregarproducto=(producto)=>addDoc(collection(db,'productos'), {producto})
export const optener= () => getDocs(collection(db, 'productos'));
export const optenercoleccion=(callback) =>onSnapshot(collection(db, 'productos'), callback)

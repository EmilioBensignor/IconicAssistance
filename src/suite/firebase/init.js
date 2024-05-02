import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB75oQHA3C1xMdNIs-Re5IikcmxYtBE6os",
  authDomain: "iconic-5c03a.firebaseapp.com",
  projectId: "iconic-5c03a",
  storageBucket: "iconic-5c03a.appspot.com",
  messagingSenderId: "721822694927",
  appId: "1:721822694927:web:d573a0028543bc4c9dad7a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()
export default db
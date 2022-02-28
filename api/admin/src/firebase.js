import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBm3z41-0UNrtxP81QOe4HrwsnoEJkuLHw",
  authDomain: "netflix-bae7b.firebaseapp.com",
  projectId: "netflix-bae7b",
  storageBucket: "netflix-bae7b.appspot.com",
  messagingSenderId: "839827568057",
  appId: "1:839827568057:web:a086e4be967c2cbb033268",
  measurementId: "G-39TGQKD8WD"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

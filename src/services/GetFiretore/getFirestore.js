// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import 'firebase/firestore'


const firebaseConfig = {

  apiKey: "AIzaSyClb-gSoc744rPQW39myi0d0ULF19iRqqg",

  authDomain: "ecrj-chevalier.firebaseapp.com",

  projectId: "ecrj-chevalier",

  storageBucket: "ecrj-chevalier.appspot.com",

  messagingSenderId: "1049842371034",

  appId: "1:1049842371034:web:8a5f042c9da8aebe2958e3"

};

const app = firebase.initializeApp(firebaseConfig);


const getFirestore = () => {
  return firebase.firestore(app)
}

export default getFirestore
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7I3rx7I0Z45_iT7OXFv4ZkFuTehBUmIo",
    authDomain: "finalcrud1.firebaseapp.com",
    projectId: "finalcrud1",
    storageBucket: "finalcrud1.appspot.com",
    messagingSenderId: "2792547721",
    appId: "1:2792547721:web:fd80fc9df17dc852b9ed58",
    measurementId: "G-EJQDSGBCP0"
  };

  const app = initializeApp(firebaseConfig)

 export const db = getFirestore(app)
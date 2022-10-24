import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC3IkEDsO7omMmfIyghVD4RnH6qZDobcRY",
    authDomain: "vue3-firebase-projeler-46f07.firebaseapp.com",
    projectId: "vue3-firebase-projeler-46f07",
    storageBucket: "vue3-firebase-projeler-46f07.appspot.com",
    messagingSenderId: "569981359891",
    appId: "1:569981359891:web:2521fb42a097d86f40ece6"
  };


  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();
  const auth = firebase.auth();
  const tarih = firebase.firestore.FieldValue.serverTimestamp

export {db,auth,tarih}
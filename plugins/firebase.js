import firebase from "firebase/app"
import 'firebase/firestore'

if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: "AIzaSyCKTR3k4szvP3Y9YNScOtP9sVmL9OxCIMw",
  authDomain: "sample-6a560.firebaseapp.com",
  databaseURL: "https://sample-6a560.firebaseio.com",
  projectId: "sample-6a560",
  storageBucket: "sample-6a560.appspot.com",
  messagingSenderId: "495260596470",
  appId: "1:495260596470:web:5eb73c663f2444d16a14d7",
  measurementId: "G-XTJE1XZSG0"
})
}

export default firebase
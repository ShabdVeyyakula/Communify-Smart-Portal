import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const clientCredentials = {
  apiKey: "AIzaSyCyJHj6Qfe7KMHCOTXHENJzPVBtZhBqGTo",
  authDomain: "communify-9f8ea.firebaseapp.com",
  projectId: "communify-9f8ea",
  storageBucket: "communify-9f8ea.appspot.com",
  messagingSenderId: "315887193204",
  appId: "1:315887193204:web:ab2946cb273f6435bc5521"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials)
    console.log('initialized firebase')
  } else {
    console.log('firebase already initialized')
  }

}
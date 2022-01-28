import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCZ7QSrC1FAz-C6e31tumREezv7DcLfbXk",
    authDomain: "vue-project-ce737.firebaseapp.com",
    projectId: "vue-project-ce737",
    storageBucket: "vue-project-ce737.appspot.com",
    messagingSenderId: "838540113957",
    appId: "1:838540113957:web:8359a0fa786eb3f778e7cc"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()

const firebaseProject = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, firebaseProject, timestamp }
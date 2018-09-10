import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCR6G7Ck_ZR4ERliNZ7oznchKlNOCisi90",
  authDomain: "meetup-matcher.firebaseapp.com",
  databaseURL: "https://meetup-matcher.firebaseio.com",
  projectId: "meetup-matcher",
  storageBucket: "meetup-matcher.appspot.com",
  messagingSenderId: "1063835221050"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
  
const auth = firebase.auth();

export {
  auth,
}
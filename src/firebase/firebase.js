import * as firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCR6G7Ck_ZR4ERliNZ7oznchKlNOCisi90",
  authDomain: "meetup-matcher.firebaseapp.com",
  databaseURL: "https://meetup-matcher.firebaseio.com",
  projectId: "meetup-matcher",
  storageBucket: "meetup-matcher.appspot.com",
  messagingSenderId: "1063835221050"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
};

// var database = firebase.database();
  
export const auth = firebase.auth();

export const writeUserData = (userName, email, password)  => {
  firebase.database().ref('users/').set({
    userName: userName,
    email: email,
    password: password
  });
}
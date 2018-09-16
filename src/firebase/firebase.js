import * as firebase from 'firebase';
import 'firebase/auth';
import { cleanUserInfo } from '../Utilities/helper';

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
  
export const auth = firebase.auth();

export const updateQuestionsFirebase = (userId, userName, email, questions)  => {
  firebase.database().ref('users/' + userId).set({
    userId: userId,
    userName: userName,
    email: email,
    questions: questions
  });
}

export const getUserInfoFirebase = (userId) => {
  return firebase.database().ref('users/' + userId).once('value')
    .then(snapshot => cleanUserInfo(snapshot.val())) 
}
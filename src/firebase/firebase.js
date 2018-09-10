import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyCR6G7Ck_ZR4ERliNZ7oznchKlNOCisi90",
    authDomain: "realtime-todo-app.firebaseapp.com",
    databaseURL: "https://realtime-todo-app.firebaseio.com",
    storageBucket: "realtime-todo-app.appspot.com",
    messagingSenderId: "1063835221050"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}
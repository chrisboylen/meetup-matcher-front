import { auth } from './firebase';

export const createUserFirebase = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const authStateChange = auth.onAuthStateChanged(user => {
  if (user) {
    const displayName = user.displayName;
    const email = user.email;
    const userId = user.uid;
  } else {
    //user signed out
  }
}) 

export const signInFirebase = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const updateUserFirebase = (username) => auth.currentUser.updateProfile({displayName: username})

export const getUserinfo = () => auth.currentUser

export const doSignOut = () => auth.signOut();

export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);
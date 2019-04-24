import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyB1WTkUQjcnC70AecnX2dkHM5-piSakGyg",
    authDomain: "consultoriaca-1aafa.firebaseapp.com",
    databaseURL: "https://consultoriaca-1aafa.firebaseio.com",
    projectId: "consultoriaca-1aafa",
    storageBucket: "consultoriaca-1aafa.appspot.com",
    messagingSenderId: "473899561763"
};  

firebase.initializeApp(config);

export default firebase;
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const firebaseStorage = firebase.storage().ref();
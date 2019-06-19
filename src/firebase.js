import * as firebase from 'firebase';

/** TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app */

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKRN29qhBM1V8ivg2Z9zrd0oeBz7kE73Q",
  authDomain: "clio-db.firebaseapp.com",
  databaseURL: "https://clio-db.firebaseio.com",
  projectId: "clio-db",
  storageBucket: "clio-db.appspot.com",
  messagingSenderId: "463689778591",
  appId: "1:463689778591:web:1fd9c3b8102642b5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const releasesRef = databaseRef.child("releases");

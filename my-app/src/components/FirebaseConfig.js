import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// npm i -g firebase-tools paketet 
// npm i firebase
//....
//.env 
//config  exportera objectet
// object.apikey
const firebaseConfig = {
  apiKey: "AIzaSyBJUHOPcefAZ12iuXcNuUdzEh5dPPYJxCU",
  authDomain: "my-project-f5d18.firebaseapp.com",
  databaseURL: "https://my-project-f5d18.firebaseio.com",
  projectId: "my-project-f5d18",
  storageBucket: "my-project-f5d18.appspot.com",
  messagingSenderId: "25130428544",
  appId: "1:25130428544:web:3211f340ac971d39d85e65",
  measurementId: "G-LZ2M243NG9"
};

//initialize 
firebase.initializeApp(firebaseConfig);


 


export const googleProvider = new firebase.auth.GoogleAuthProvider();
// en till 

export const auth = firebase.auth();
export  default firebase;
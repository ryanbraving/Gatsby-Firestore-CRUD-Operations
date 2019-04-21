// import firebase from "firebase";
import firebase from "firebase"

// These imports load individual services into the firebase namespace.
import "firebase/app"
import "firebase/firestore"
// require("firebase/firestore");
// global.XMLHttpRequest = require("xhr2")

var config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: "polling-app-gatsby.firebaseapp.com",
  databaseURL: "https://polling-app-gatsby.firebaseio.com",
  projectId: "polling-app-gatsby",
  storageBucket: "polling-app-gatsby.appspot.com",
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)
// firebase.firestore.settings({
//   timestampsInSnapshots: false,
// })
// const db = firebase.firestore();

export default firebase
// export default db;

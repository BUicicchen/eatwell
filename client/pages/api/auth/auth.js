import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCigAOzXJYOEbrWtZBo6ZkvX0SmJf0S4Jg",
  authDomain: "eatwell-f06d9.firebaseapp.com",
  databaseURL: "https://eatwell-f06d9.firebaseio.com",
  projectId: "eatwell-f06d9",
  storageBucket: "eatwell-f06d9.appspot.com",
  messagingSenderId: "144128258782",
  appId: "1:144128258782:web:8696a98f98e36226df084f",
  measurementId: "G-3DZ83WM9V0"
};
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
require("firebase/auth")

export async function _login(data) {
  var e;
  firebase.auth().signInWithEmailAndPassword(data["first"], data["last"]).catch(function(error) {
    console.log(error.message)
    e = error.message;
  });
  return e;
}

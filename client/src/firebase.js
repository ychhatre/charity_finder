import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyArX52XKn-rUTyvrKKXYeEPMGo96S4yP70",
    authDomain: "charity-finder-d9d8d.firebaseapp.com",
    projectId: "charity-finder-d9d8d",
    storageBucket: "charity-finder-d9d8d.appspot.com",
    messagingSenderId: "878557763762",
    appId: "1:878557763762:web:cbf39d072dba804c8c91ab",
    measurementId: "G-86YCXEFLL3"
  };
const app = firebase.default.initializeApp(firebaseConfig); 

export const auth = app.auth(); 
export default auth; 
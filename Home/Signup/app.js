import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjZAo5usel0RwHfnyvT-F91Y0tysYFrsU",
    authDomain: "quibble-75628.firebaseapp.com",
    databaseURL: "https://quibble-75628-default-rtdb.firebaseio.com",
    projectId: "quibble-75628",
    storageBucket: "quibble-75628.firebasestorage.app",
    messagingSenderId: "271461178280",
    appId: "1:271461178280:web:f8dfebc693ac8eabad1b9d",
    measurementId: "G-83RDFXJ27K"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.register = function(){

let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let confirm = document.getElementById("confirmpassword").value;

if(password !== confirm){
document.getElementById("msg").innerHTML="Passwords do not match";
return;
}

createUserWithEmailAndPassword(auth,email,password,username)
.then(async (userCredential)=>{
let user = userCredential.user;

await setDoc(doc(db,"users",user.uid),{
username: username,
email: email,
password: password,

}); 

alert("Registration Successful");
window.location.href = "../Home.html";
})
.catch((error)=>{
document.getElementById("msg").innerHTML=error.message;
});

}



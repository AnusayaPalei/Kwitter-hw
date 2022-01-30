
const firebaseConfig = {
    apiKey: "AIzaSyC7Fw5gUZNP_ivu9iH3Gp8DZSzpc3NnTKg",
    authDomain: "kwitter-hw-151a9.firebaseapp.com",
    databaseURL: "https://kwitter-hw-151a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-hw-151a9",
    storageBucket: "kwitter-hw-151a9.appspot.com",
    messagingSenderId: "571351728980",
    appId: "1:571351728980:web:0de9febb0a07a08f59fec1",
    measurementId: "G-2MBWPCBG8H"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code

//End code
   } });  }); }
getData();
function log_out(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html";
}
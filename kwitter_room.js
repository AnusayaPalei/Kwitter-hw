const firebaseConfig = {
    apiKey: "AIzaSyDAyr_q04z0uiJw6RQdl2LguZKa_YrcZNo",
    authDomain: "kwitter-25952.firebaseapp.com",
    databaseURL: "https://kwitter-25952-default-rtdb.firebaseio.com",
    projectId: "kwitter-25952",
    storageBucket: "kwitter-25952.appspot.com",
    messagingSenderId: "388211412564",
    appId: "1:388211412564:web:5cf2f780636fa69da9a7c1",
    measurementId: "G-0WFGY5XCJL"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
function user_name(){
  var user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose:"resueman"
  });
}
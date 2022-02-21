//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAEer8OViDqRD2M_ocCff9afjRbtA1Y014",
      authDomain: "patter-30b0c.firebaseapp.com",
      databaseURL: "https://patter-30b0c-default-rtdb.firebaseio.com",
      projectId: "patter-30b0c",
      storageBucket: "patter-30b0c.appspot.com",
      messagingSenderId: "39393474967",
      appId: "1:39393474967:web:250f697e822fb8bee46cd2"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   user_name = localStorage.getItem("user_name")
   room_name = localStorage.getItem("room_name")

   function send(){
         msg = document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
               name:user_name,
               message:msg,
               like:0,
         })
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

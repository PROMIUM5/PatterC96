
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" 

   function addRoom(){
         room_name = document.getElementById("room_name").value 
         localStorage.setItem("room_name",room_name)
         firebase.database().ref("/").child(room_name).update({
               purpose: "adding room"
         })
         window.location = "patter_page.html"
   }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names)
row = "<div class ='room_name' id="+Room_names+"  onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>"
document.getElementById("output").innerHTML += row 
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name)
      localStorage.setItem("room_name",name)
      window.location = "patter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}

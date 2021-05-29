var firebaseConfig = {
    apiKey: "AIzaSyAeHsyIcx_qVsx0MDryWEOCYBoqFqg4HTk",
    authDomain: "kwillter.firebaseapp.com",
    databaseURL:"https://console.firebase.google.com/u/0/project/kwillter/database/kwillter-default-rtdb/data",
    projectId: "kwillter",
    storageBucket: "kwillter.appspot.com",
    messagingSenderId: "50273170779",
    appId: "1:50273170779:web:7e28f3b69a01297909d67e",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
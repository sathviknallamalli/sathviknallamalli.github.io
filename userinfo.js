

var user = firebase.auth().currentUser;

var f1  = firebase.database().ref().child("Users").child("apple");
var happy = document.getElementById("happy");
f1.on('value',function(datasnapshot)){
  happy.innerHTML = "oigeroig";
}




function logout() {
    firebase.auth().signOut();

  }

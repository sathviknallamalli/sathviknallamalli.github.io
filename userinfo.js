

//firebase user authetnication verify
var user = firebase.auth().currentUser;

var f1  = firebase.database().ref().child("apple");

//get database reference and retrieve information
f1.on('value',function(datasnapshot)){
window.alert("eorigen");
}

//retrieve user information from database child
var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/Users/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().email) || 'Anonymous';
  // ...
});



//logout function to exit firebase
function logout() {
    firebase.auth().signOut();

  }

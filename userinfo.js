

var user = firebase.auth().currentUser;

var f1  = firebase.database().ref().child("apple");

window.alert("eorigen");

f1.on('value',function(datasnapshot)){
window.alert("eorigen");
}

var userId = firebase.auth().currentUser.uid;
return firebase.database().ref('/Users/' + userId).once('value').then(function(snapshot) {
  var username = (snapshot.val() && snapshot.val().email) || 'Anonymous';
  // ...
});




function logout() {
    firebase.auth().signOut();

  }

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.


    var user = firebase.auth().currentUser;


      var email_id = user.email;
      document.getElementById("loginlabel").innerHTML = email_id;
      document.getElementById("loginlabel").href = "userinfo.html";



  } else {
    // No user is signed in.

  }
});

var user = firebase.auth().currentUser;

if (user) {
  var email_id = user.email;
  document.getElementById("loginlabel").innerHTML = email_id;
    document.getElementById("loginlabel").href = "userinfo.html";
} else {
  // No user is signed in.
}

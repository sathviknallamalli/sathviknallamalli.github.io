

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

function weblogin(){


  var useremail = document.getElementById("email").value;
  var userpassword = document.getElementById("password").value;



    firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("error: " + errorMessage);
    // ...
  });
}

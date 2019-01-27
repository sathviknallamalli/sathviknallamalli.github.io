firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;
      var email_verified = user.emailVerified;





      document.getElementById("user_para").innerHTML = "welcome user " + email_id +
        "<br/>verified " + email_verified;



    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login() {

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function create_account() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(result){

    send_verification();

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout() {
  firebase.auth().signOut();
}

function send_verification() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    window.alert("Verification email sent! Please check the email associated with this account");
  }).catch(function(error) {
    // An error happened.
    window.alert("email error + " + error.message);
  });
}

function gmail_login() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

  window.alert("login with g" + user.email);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    window.alert("error mess + " + error.message + " user email " + email);
    // ...
  });
}

function facebook_login() {
  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;

  window.alert("login with f " + user.email);
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...

  window.alert("error message " + errorMessage);
});
}

function forgot_password(){
  var auth = firebase.auth();
var userEmail = document.getElementById("recovery_email").value;

auth.sendPasswordResetEmail(userEmail).then(function() {
  window.alert("Email sent! Please check for reset instructions");
}).catch(function(error) {
  window.alert(error.message + "");
});
}

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

  var user = firebase.auth().currentUser;

  if (user) {
      window.open("home.html", "_self");
  }

}

function create_account() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var firstName = document.getElementById("firstname_field").value;
  var lastName = document.getElementById("lastname_field").value;
  var confirm = document.getElementById("confirmpassword_field").value;

  if (userPass == confirm) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(result) {



      var firebaseRef = firebase.database().ref();
      var user = firebase.auth().currentUser;

      var email_verified = user.emailVerified;
      firebaseRef.child("Users").child(user.uid).child("FirstName").set(firstName);
      firebaseRef.child("Users").child(user.uid).child("LastName").set(lastName);
      firebaseRef.child("Users").child(user.uid).child("Email").set(userEmail);
      firebaseRef.child("Users").child(user.uid).child("Password").set(userPass);
      firebaseRef.child("Users").child(user.uid).child("Verified").set(email_verified);


    send_verification();




    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });
  } else {
    window.alert("passwords do not match");
  }
}




function send_verification() {
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
    if(window.confirm("Verification email sent! Please check the email associated with this account. Click here to continue to the website")){
      window.open("home.html", "_self");


    }



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
    window.open("home.html", "_self");

    var firebaseRef = firebase.database().ref();
    
    var email_verified = user.emailVerified;
    firebaseRef.child("Users").child(user.uid).child("FirstName").set(firstName);
    firebaseRef.child("Users").child(user.uid).child("LastName").set(lastName);
    firebaseRef.child("Users").child(user.uid).child("Email").set(userEmail);
    firebaseRef.child("Users").child(user.uid).child("Password").set(userPass);
    firebaseRef.child("Users").child(user.uid).child("Verified").set(email_verified);


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

function forgot_password() {
  var auth = firebase.auth();
  var userEmail = document.getElementById("recovery_email").value;

  auth.sendPasswordResetEmail(userEmail).then(function() {
    window.alert("Email sent! Please check for reset instructions");
  }).catch(function(error) {
    window.alert(error.message + "");
  });
}

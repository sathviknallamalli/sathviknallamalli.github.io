

var user = firebase.auth().currentUser;



function logout() {
    firebase.auth().signOut();

  }

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.



    } else {
        window.alert("Successfully logged out!")
        window.open("home.html", "_self");
    }
  });

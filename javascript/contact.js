

$( document ).ready(function() {
    var config = {
     apiKey: "AIzaSyDddZ0MY3GQzW0dCAvEJGHzwN7KpdndyTc",
     authDomain: "bookworm-f822f.firebaseapp.com",
     databaseURL: "https://bookworm-f822f.firebaseio.com",
     projectId: "bookworm-f822f",
     storageBucket: "bookworm-f822f.appspot.com",
     messagingSenderId: "361463431080"
   };
   firebase.initializeApp(config);
   firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
       // User is signed in.
       console.log("user in is "+user.displayName);
       $("#loginNav").addClass("d-none");
       $("#logoutNav").removeClass("d-none")
       $("#logoutNav").addClass("d-block")
       var p=$("<p>").text("welcome "+user.displayName);
         $("#name").empty();
       $("#name").append(p);
     }
       else{
       console.log("noo")
       }
     })



$(".logoutBtn").on("click",function(event){ 
    event.preventDefault();
       console.log("out")
       firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        location.reload();
      }, function(error) {
        console.error('Sign Out Error', error);
      });
   })
})
// Initialize Firebase
var config = {
    apiKey: "AIzaSyB0DRdcrdiI-LCaIGrzQQSbKDKHqgTuDYY",
    authDomain: "iz-traintime.firebaseapp.com",
    databaseURL: "https://iz-traintime.firebaseio.com",
    projectId: "iz-traintime",
    storageBucket: "",
    messagingSenderId: "361084541916"
  };
  firebase.initializeApp(config);

// Test connection with Database
var db = firebase.database();
db.ref().set({
    highBidder: "TEST",
    highPrice: "secondTest"
  });
// Test return values on the input type of time
$("#submit-train").on("click", function() {
    event.preventDefault();
    console.log($("#train-time").val());
    console.log(typeof $("#train-time").val());
})
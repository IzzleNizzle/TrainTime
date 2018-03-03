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

// Variables for all inputs
var trainName,
  destination,
  trainTime;


// on click function that submits the variables to the database using .ref().push() instead of .set
$("#submit-train").on("click", function () {
  event.preventDefault();

  trainName = $("#train-name").val().trim();
  destination = $("#destination").val().trim();
  trainTime = $("#train-time").val().trim();

  db.ref().push({
    trainName: trainName,
    destination: destination,
    trainTime: trainTime,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })

})

// create listener to catch changes in the database
db.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {
  // Variable to store response from database
  var sv = snapshot.val();

  // Building a new row to print information to the page
  var row = $("<div class=row></div>");
  var col1 = $("<div class=col-md-2></div>");
  var col2 = $("<div class=col-md-2></div>");
  var col3 = $("<div class=col-md-2></div>");
  var col4 = $("<div class=col-md-2></div>");
  var hr = $("<hr>");

  col1.text(sv.trainName);
  col2.text(sv.destination);
  col3.text(sv.trainTime);

  row.append(col1);
  row.append(col2);
  row.append(col3);
  row.append(hr);

  $("#employee-data").append(row);

}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});
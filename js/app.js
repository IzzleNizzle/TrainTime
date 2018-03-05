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
  trainTime,
  trainInterval,
  minutesAway,
  nextArrival;


// on click function that submits the variables to the database using .ref().push() instead of .set
$("#submit-train").on("click", function () {
  event.preventDefault();

  // Get values of the different database assets
  trainName = $("#train-name").val().trim();
  destination = $("#destination").val().trim();
  trainTime = $("#train-time").val().trim();
  trainInterval = $("#train-interval").val().trim();
  nextArrival = getNextArrival(trainTime, trainInterval);
  minutesAway = getMinutesAway();

  db.ref().push({
    trainName: trainName,
    destination: destination,
    trainTime: trainTime,
    trainInterval: trainInterval,
    minutesAway: minutesAway,
    nextArrival: nextArrival,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })

})

// create listener to catch changes in the database
db.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {
  // Variable to store response from database
  var sv = snapshot.val();

  // Building a new row to print information to the page
  var row = $("<div class=row></div>");
  var col1 = $("<div class=col-md-4></div>");
  var col2 = $("<div class=col-md-2></div>");
  var col3 = $("<div class=col-md-2></div>");
  var col4 = $("<div class=col-md-2></div>");
  var col5 = $("<div class=col-md-2></div>");
  var hr = $("<hr>");

  col1.text(sv.trainName);
  col2.text(sv.destination);
  col3.text(sv.trainTime);
  col4.text(sv.trainInterval);
  col5.text(sv.minutesAway);

  row.append(col1);
  row.append(col2);
  row.append(col3);
  row.append(col4);
  row.append(col5);
  row.append(hr);

  $("#employee-data").append(row);

}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});




// Process when the next arrival train will come

// Get train's first time, user time, and interval time

// do while would be the correct logic for finding when the next arrival will be.

// get first time, is it greater than current time? if not add interval time, is that time greater than current time? if not, keep adding until it is greater. Once it is greater, that is the next arrival time.

function getNextArrival(firstTime, intervalTime){
    var currentTime = 1;
};
// //business logic
// function Place(location, landmarks, time,) {
//   this.location=location;
//   this.landmarks=landmarks;
//   this.time=time;
// }
//
// Place.prototype.allInfo = function() {
//   return this.location + " " + this.time;
// }


//user interface logic

$(document).ready(function() {
  $("form#trackLocation").submit(function(event) {
    event.preventDefault();

    alert("hello!");

  $("#show-location").show();

  // var inputtedLocation = $("input#newLocation").val();
  // var inputtedLandmarks = $("input#newLandmarks").val();
  // var inputtedTime = $("input#newTime").val();
  // var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTime);



});

});

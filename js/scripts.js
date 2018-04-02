//business logic
function Place(location, landmarks, time,) {
  this.location=location;
  this.landmarks=landmarks;
  this.time=time;
}

Place.prototype.allInfo = function() {
  return this.location + " " + this.landmarks + " " + this.time;
}


// user interface logic

$(document).ready(function() {
  $("form#trackLocation").submit(function(event) {
    event.preventDefault();



  var inputtedLocation = $("input#newLocation").val();
  var inputtedLandmarks = $("input#newLandmarks").val();
  var inputtedTime = $("input#newTime").val();
  var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputtedTime);

  $("ul#places").append("<li><span class='testPlace'>" + newPlace.allInfo() + "</span></li>")

  $(".testPlace").last().click(function() {
  $("#show-location").fadeIn();
  $("#show-location h2").text(newPlace.location);
  $(".location").text(newPlace.location);
  $(".landmarks").text(newPlace.landmarks);
  $(".time").text(newPlace.time);
});


});

});

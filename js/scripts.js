//back end -----------
function Place(name, location, landmarks, timeOfYear, notes) {
  this.name = name;
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
};



//front end -------------
function resetFields() {
  $("input#name").val("");
  $("input#location").val("");
  $("input#landmark1").val("");
  $("input#landmark2").val("");
  $("input#landmark3").val("");
  $("input#time-of-year").val("");
  $("input#notes").val("");
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var inputName = $("input#name").val();
    var inputLocation = $("input#location").val();
    var inputLandmark1 = $("input#landmark1").val();
    var inputLandmark2 = $("input#landmark2").val();
    var inputLandmark3 = $("input#landmark3").val();
    var inputTime = $("input#time-of-year").val();
    var inputNotes = $("input#notes").val();
    var newPlace = new Place(inputName, inputLocation, [inputLandmark1, inputLandmark2, inputLandmark3], inputTime, inputNotes);

      $("#places").append('<div class="well title">' + '<h3>' + newPlace.name + '</h3>' + '</div>' + '<div class="well content">' +'<ul>' + '<li>' + newPlace.name + ', ' + newPlace.location + '</li>' + '<li>Landmarks: ' + newPlace.landmarks + '</li>' + '<li>Time of Year ' + newPlace.timeOfYear + '</li>' + '<li>Notes: ' + newPlace.notes + '</li>' + '</ul>');

    resetFields();
  });
});

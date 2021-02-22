/**
 * Author:  Jrozio
 * Created:   today
 *
 * (c) Copyright by Blub Corp.
 **/

var name = "Jacob Rozio";

function sortingHat(name) {
  console.log("test")

  var nameLength = name.length;

  var mod = nameLength % 4;
  if (mod === 1) {
    return "Gryffindor";
  }
   else if (mod === 2) {
    return "Ravenclaw";
  }
   else if (mod === 3) {
    return "Hufflepuff";
  }
   else {
    return "Slytherin";
  }
};
$('#button').click(function(){

  var name = $('#input').val();

  var house = sortingHat(name);

  //$('#output').append("<h1>");
  $('#output').html("The Sorting Hat has sorted you into: " + house);
  $("#output").toggleClass("special");
});

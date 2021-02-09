/**
 * Author: Jacob Rozio
 * Created:   2/1/2021
 *
 * (c) Copyright NA
 **/

//Define Variables
 myTransport = ["Volkswagen Jetta", "Longboard", "Bus",];

 myMainRide = {
  make: "Volkswagen",
  model: "Jetta",
  color: "White",
  year: 2018

}

//output
document.writeln("Kinds of Transportation I Use: ", myTransport, "<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

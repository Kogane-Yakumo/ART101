/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 18 October
 * License: Public Domain
 */

// Define Variables

myTransport = ["Toyota Highlander", "Bicycle", "Santa Cruz Metro", "Campus Bus", "My Legs"];

myMainRide = {
    make: "Toyota",
    model: "Highlander",
    color: "Grey",
    year: 2013,
}

myMainRide.age = function() {
    return 2022 - myMainRide.year;
}

// Outputs

document.writeln("My methods of transportation: ", myTransport, "</br>");
document.writeln("My family's vehicle: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
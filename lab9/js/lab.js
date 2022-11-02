/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 1 November
 * License: Public Domain
 */

// find target Element
var outputEl = document.getElementById("output");

// create new elements
var new1El = document.createElement("P");
new1El.innerHTML = "Hello I've changed this new paragraph using JavaScript.";
var new2El = document.createElement("P");
new2El.innerHTML = "This one too, I forgot to do this lab. Sadness.";

//display new elements
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//change css
new1El.style.color = "green";
document.getElementById("challengsDiv").style.backgroundColor = "blue";
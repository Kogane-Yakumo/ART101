/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 24 October
 * License: Public Domain
 */

//

// userNameSort - this function returns a sorted string from the user's input
function userNameSort() {
    var userName = window.prompt("What is your name?");
    console.log("userName = ", userName);
    // no capitals
    userName = userName.toLowerCase();
    console.log("userNameLower = ", userName);
    // split string into array
    userName = userName.split('');
    console.log("userArray = ", userName);
    // sort items of the array
    userName = userName.sort();
    console.log("userArraySorted = ", userName);
    // convert back into string
    userName = userName.join('');
    console.log("userNameSorted = ", userName);
    return userName;
}

// output
document.writeln("I think I like ", userNameSort(), " for your name instead. </br>");
  

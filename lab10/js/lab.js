/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 1 November
 * License: Public Domain
 */

// Lab 7's userNameSort
function userNameSort(userName) {
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
// button to sort
var buttonEl = document.getElementById("my-button")
buttonEl.addEventListener("click", function(){
    var name = document.getElementById("user-name").value
    name = userNameSort(name)
    document.getElementById("output").innerHTML = name
})
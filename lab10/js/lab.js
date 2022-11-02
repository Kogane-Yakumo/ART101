/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 2 November
 * License: Public Domain
 */

// Lab 7's userNameSort (altered)
function userNameSort(userName) {
    userName = userName.toLowerCase().replaceAll(" ", "");
    console.log("userNameLower = ", userName);
    // split string into array
    userName = userName.split('');
    console.log("userArray = ", userName);
    // sort items of the array
    userName = userName.sort();
    console.log("userArraySorted = ", userName);
    userName[0] = userName[0].toUpperCase()
    // convert back into string
    userName = userName.join('');
    console.log("userNameSorted = ", userName);
    return userName;
}

// Fisher-Yates Algorithm
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
}

// button to sort
var buttonEl = document.getElementById("my-button")
buttonEl.addEventListener("click", function(){
    var name = document.getElementById("user-name").value
    name = userNameSort(name)
    document.getElementById("output").innerHTML = "Your Sorted Name is: " + name
})
// button to shuffle
document.getElementById("shuffle-button").addEventListener("click", function(){
    var name = document.getElementById("user-name").value
    name = name.toLowerCase().replaceAll(" ", "").split('')
    name = shuffle(name)
    name[0] = name[0].toUpperCase()
    var space = Math.floor(Math.random() * name.length)
    name.splice(space, 1, " ", name[space].toUpperCase())
    name = name.join('')
    document.getElementById("output").innerHTML = "Your Shuffled Name is: " + name
})

/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 26 October
 * License: Public Domain
 */

//

function calculation (x) {
    var result = x + x - 1;
    return result;
}

//function tests
console.log("15 doubled is one greater than ", calculation(15));
console.log("8 doubled is one greater than ", calculation(8));
console.log("3 doubled is one greater than ", calculation(3));

testArray = [4, 76, 9, 23, 59, 96, 31];
console.log("My array of numbers is: ", testArray);

//mapping onto arrays
console.log("2X - 1 of my array: ", testArray.map(calculation));
console.log("numbers in my array modulus seven: ", testArray.map(function(x){
    return x % 7;
}));

//reveal output
var outputEl = document.getElementById("output");
outputEl.innerHTML = "2X - 1 of my array: [7, 151, 17, 45, 117, 191, 61]<br>numbers in my array modulus seven: [4, 6, 2, 2, 3, 5, 3 ]";
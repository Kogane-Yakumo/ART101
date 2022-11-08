/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 8 November
 * License: Public Domain
 */

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    if (mod == 0) {
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2) {
        return "Slytherin"
    }
    else {
        return "Hufflepuff"
    }
}

$("#button").click(function(){
    var name = $("#input").val()
    var house = sortingHat(name)
    $("#output").append("The Sorting Hat has sorted you into " + house);
})

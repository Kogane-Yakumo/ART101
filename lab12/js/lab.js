/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 8 November
 * License: Public Domain
 */

function sortingHat(str) {
    var length = str.length;
    var houseArray = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
    var descriptionArray = ["Gryffindor house holds the brave and the determined, its colors are scarlet and gold, and its symbol is the lion.", "Ravenclaw house holds the erudite and the wise, its colors are blue and bronze, and its symbol is the eagle.", "Slytherin house holds the cunning and the meticulous, its colors are green and silver, and its symbol is the serpent.", "Hufflepuff house holds the trustworthy and the diligent, its colors are yellow and black, and its symbol is the badger."];
    var mod = length % houseArray.length;
    return [houseArray[mod], descriptionArray[mod]]
}

$("#button").click(function(){
    var name = $("#input").val()
    var house = sortingHat(name)[0]
    $("#output").append("The Sorting Hat has sorted you into " + house);
    $("#output").append("<br>" + sortingHat(name)[1]);
})

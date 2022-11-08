/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 7 November
 * License: Public Domain
 */

//create and append buttons
$("#challenges").append("<button>Text of button one.</button>");
$("#results").append("<button>Text of button two.</button>");

//event handler toggle special
$("#challenges").click(function(){
    $("#challenges button").toggleClass("special")
});
$("#results").click(function(){
    $("#results button").toggleClass("special")
});
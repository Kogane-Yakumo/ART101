/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 11 November
 * License: Public Domain
 */

function getTableValues() {
    table = []
    for (var value=0; value<4; value++){
        num = "#num" + value
        text = "#text" + value
        numVal = $(num).val()
        textVal = $(text).val()
        table.push([numVal,textVal])
    }
    console.log(table)
    return table
}

function FizzBuzz(array, max) {
    $("#output").html("")
    for (var i=1; i<=max; i++){
        var string = ""
        if (i % array[0][0] == 0) {
            string = string + array[0][1]
        }
        if (i % array[1][0] == 0) {
            string = string + array[1][1]
        }
        if (i % array[2][0] == 0) {
            string = string + array[2][1]
        }
        if (i % array[3][0] == 0) {
            string = string + array[3][1]
        }
        string = string + "!"
        if (string !== "!") {
            $("#output").append("<p>" + string + "</p>");
        }
        else {
            $("#output").append("<p>" + i + "</p>");
        }
    }
}

$("#my-button").click(function(){
    var maximum = $("#max").val()
    console.log(maximum)
    FizzBuzz(getTableValues(), maximum)
});
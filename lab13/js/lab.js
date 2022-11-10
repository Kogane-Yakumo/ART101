/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 11 November
 * License: Public Domain
 */

function FizzBuzz() {
    for (var i=1; i<=200; i++){
        var string = ""
        if (i % 3 == 0) {
            string = string + "Fizz"
        }
        if (i % 5 == 0) {
            string = string + "Buzz"
        }
        if (i % 7 == 0) {
            string = string + "Boom"
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
    FizzBuzz()
});
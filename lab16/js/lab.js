/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 28 November
 * License: Public Domain
 */

var domain = "https://xkcd.com/";
var linkEnd = "info.0.json";

function comicGen(number) {
    if (number == undefined) {
        comicNum = "";
    } else {
        comicNum = number.toString() + "/";
    }
    var URL = domain + comicNum + linkEnd;
    $.ajax({
        url: URL,
        type: "GET",
        dataType: "json",
        success: function (data) {
            $("#output").html("")
            var comicObj = data;
            $("#output").append("<h1> " + comicObj.title + ".");
            $("#output").append("<img src=" + comicObj.img + " title=" + comicObj.alt + ">");
            $("#output").append('<p> Wanna keep reading? <br>');
            $("#output").append('<button id="prev">Previous</button>');
            $("#output").append('<button id="next">Next</button>');
            $("#prev").click(function(){
                comicGen(comicObj.num - 1);
            });
            $("#next").click(function(){
                comicGen(comicObj.num - 1);
            });
            console.log(JSON.stringify(comicObj, null, 2));
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $("#output").html("")
            $("#output").append("An execption has occurred.")
            console.log("Error:", textStatus, errorThrown);
        }
    })
}

comicGen()
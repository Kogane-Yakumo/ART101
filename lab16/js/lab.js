/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 28 November
 * License: Public Domain
 */

$("#activate").click(function () {
    $.ajax({
        url: "https://xkcd.com/info.0.json",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $("#output").html("")
            var comicObj = data;
            $("#output").append("<h1> " + comicObj.title + ".");
            $("#output").append("<img src=" + comicObj.img + " title=" + comicObj.alt + ">");
            console.log(JSON.stringify(comicObj, null, 2));
        },
        error: function (jqXHR, textStatus, errorThrown) { 
            $("#output").html("")
            $("#output").append("An execption has occurred.")
            console.log("Error:", textStatus, errorThrown);
        }
    })
})

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
            $("#output").append("<p> " + data + ".");
            console.log(JSON.stringify(data, null, 2));
        },
        error: function (jqXHR, textStatus, errorThrown) { 
            $("#output").html("")
            $("#output").append("An execption has occurred.")
            console.log("Error:", textStatus, errorThrown);
        }
    })
})
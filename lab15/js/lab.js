/*
 * Author: Ganzorig Gantushig <ggantush@ucsc.edu>
 * Created: 21 November
 * License: Public Domain
 */

$("#activate").click(function () {
    $.ajax({
        url: "https://jservice.io/api/random",
        type: "GET",
        dataType: "json",
        success: function(data) {
            $("#output").html("")
            var currData = data[0];
            $("#output").append("<p> For " + currData.value + " points.");
            $("#output").append("<p> In the catagory: " + currData.category.title);
            $("#output").append("<p>" + currData.question);
            $("#output").append("<p> What is " + currData.answer);
            console.log(JSON.stringify(data, null, 2));
        },
        error: function (jqXHR, textStatus, errorThrown) { 
            $("#output").html("")
            $("#output").append("An execption has occurred.")
            console.log("Error:", textStatus, errorThrown);
        }
    })
})
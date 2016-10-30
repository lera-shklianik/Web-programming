'use strict';

$(document).ready(function(){
 
	var source = $("#template").html(); 
	var template = Handlebars.compile(source); 

    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Ethanol",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "jsonp",
        success: function (data) {
            console.log(data);
            data.parse.text = data.parse.text["*"];
            $(".container-fluid").append(template(data.parse));

        },
        error: function (errorMessage) {
        }
    });


});

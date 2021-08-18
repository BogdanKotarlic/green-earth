$(document).ready(function() {
    // Because of CORS policy works only with live server
    // var db = [];
    // var json = (function () {
    //     var json = null;
    //     $.ajax({
    //         'async': false,
    //         'global': false,
    //         'url': './json/db.json',
    //         'dataType': 'json',
    //         'success': function (data) {
    //             json = data;
    //         }
    //     });
    //     return json;
    // })
    // db = json();

    //VERSION WITHOUT LIVE SERVER
    var db = [
        {
            "name": "stock1",
            "path": "./images/stock1.jpg",
            "description": "stock1 img"
        },
        {
            "name": "stock2",
            "path": "./images/stock2.jpg",
            "description": "stock2 img"
        },
        {
            "name": "stock3",
            "path": "./images/stock3.jpg",
            "description": "stock3 img"
        }
    ]

    $.each(db, function (index, value) {
        $(".slider").append("<img src='"+value.path+"' alt='"+value.description+"'/>")
    });
    $('.slider img:first-child').addClass("active");
});
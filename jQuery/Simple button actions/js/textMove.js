//Move the text
$(document).ready(function () {
    $("#btn1").click(function () {
        $('p').animate({
            right: "200"
        })
    });

    $("#btn2").click(function () {
        $('p').animate({
            bottom: "180"
        })
    });

    $("#btn3").click(function () {
        $('p').animate({
            left: "-730"
        })
    });

    $("#btn4").click(function () {
        $('p').animate({
            top: "220"},function (){location.reload(true)
            })
        
    });

});
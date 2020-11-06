//Open up the options
$(document).ready(function () {
    $("#h31").click(function () {
        $("#ul1").show(1000);
        $("button").show(1000);
    });

    $("#h32").click(function () {
        $("#ul2").show(1000);
        $("button").show(1000);

    });

    $("#h33").click(function () {
        $("#ul3").show(1000);
        $("button").show(1000);

    });
});

//Collapse Button
$(document).ready(function () {
    $("#btn").click(function () {
        $("#ul1,#ul2,#ul3").hide(1000);
        $("button").hide(1000);
    });
});

//Show the Question in the Alert
$(document).ready(function () {
    $("#ul1").dblclick(function () {
        alert($("#h31").html());
    });
    $("#ul2").dblclick(function () {
        alert($("#h32").html());
    });
    $("#ul3").dblclick(function () {
        alert($("#h33").html());
    });
});
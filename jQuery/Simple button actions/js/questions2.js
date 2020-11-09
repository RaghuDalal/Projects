//Open up the options
$(document).ready(function () {
    $("h3").click(function () {
        $(this).next().show(1000);
        $("button").show(1000);
    });
});

//Collapse Button
$(document).ready(function () {
    $("#btn").click(function () {
        $("ul").not(".pageNo").hide(1000);
        $("button").hide(1000);
    });
});

//Show the Question & Options in the Alert
$(document).ready(function () {
    $("ul").dblclick(function () {
    var x=$(this).prev("h3").text()+$(this).text();
    alert(x);
    });
});
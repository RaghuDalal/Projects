function change(){
    let CompanyName=document.getElementById("companyName").value;
    let Email=document.getElementById("email").value;
    let FirstName=document.getElementById("firstName").value;
    let LastName=document.getElementById("lastName").value;
    let PhnNumber=document.getElementById("phnNumber").value;
    let Date = document.getElementById("date").value;



    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/@companyName/gi,CompanyName) );
    });

    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/@firstname/gi,FirstName) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/@lastName/gi,LastName) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/#email/gi,Email) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/#phnNumber/gi,PhnNumber) );
    });
    $("body").children().each(function () {
        $(this).html( $(this).html().replace(/#phnNumber/gi,PhnNumber) );
    });$("body").children().each(function () {
        $(this).html( $(this).html().replace(/#date/gi,Date) );
    });
}
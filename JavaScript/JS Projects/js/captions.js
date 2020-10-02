function show()
{
    var x=document.getElementById("fname").value;
    x=String(x)

    var y=document.getElementById("lname").value;
    y=String(y)

    z=document.getElementById("change").innerHTML=x+" "+y;
}
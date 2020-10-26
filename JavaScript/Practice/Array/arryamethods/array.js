var text="";
var numbers = [45, 4, 9, 16, 25];

numbers.forEach(function(value,index,arry){
        text=text+(value+12)+"<br/>"
}) 

document.getElementById("div").innerHTML=text
document.getElementById("div1").innerText=fruits
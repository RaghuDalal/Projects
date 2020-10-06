function calculate() {
    var value1 = document.getElementById('dob').value;
    var value2 = 2020;
    result =  value2 - parseInt(value1);
    if (result >= 18){
        document.getElementById('change').innerHTML = "You are Eligible";
    }
    else{
        document.getElementById('change').innerHTML = "You are not Eligible";

    }
    
}
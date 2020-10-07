function find() {
    var nmbr = document.getElementById('num').value;
    var number = parseInt(nmbr);
    if(number==0){
        document.getElementById('change').innerHTML = "It's Zero";
    }
    else if (number % 2 == 0 && number>0){
        document.getElementById('change').innerHTML = "The number is Even";
        
    } 
    
    else if(number < 0){
        document.getElementById('change').innerHTML = "Number is Negative";

    }
    else {
        document.getElementById('change').innerHTML = "The number is odd";

    }
}
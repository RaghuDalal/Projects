function check() {
    var nmbr = document.getElementById('num').value;
    var number = parseInt(nmbr);

    let isPrime = true;

    if (number === 1) {
        document.getElementById('change').innerHTML = "1 is not a Prime Number";
    } else if (number > 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            document.getElementById('change').innerHTML = number + " is a Prime Number";
        } else {
            document.getElementById('change').innerHTML = number + " is not a Prime Number";
        }
    } else {
        console.log("The number is not a prime number.");
    }


}
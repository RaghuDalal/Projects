function reverse(n) {
    let digit, result = 0;
    while (n) {
        digit = n % 10;
        result = (result * 10) + digit;
        n = n / 10 | 0;
    }

    return result;


}

function run() {
    val = document.getElementById("num").value;
    document.getElementById("change").innerHTML = reverse(val)
}
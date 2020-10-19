function convert(n) {
    const num = val;
    const arrayOfDigits = Array.from(String(num), Number);
    const result = [];

    for (let element of arrayOfDigits) {
        let nm = converter(element);
        result.push(nm);
    }

    return result;

}

function converter(nmbr) {
    if (nmbr == 0) {
        return ("Zero");
    } else if (nmbr == 1) {
        return ("One");
    } else if (nmbr == 2) {
        return ("Two");
    } else if (nmbr == 3) {
        return ("Three");
    } else if (nmbr == 4) {
        return ("Four");
    } else if (nmbr == 5) {
        return ("Five");
    } else if (nmbr == 6) {
        return ("Six");
    } else if (nmbr == 7) {
        return ("Seven");
    } else if (nmbr == 8) {
        return ("Eight");
    } else if (nmbr == 9) {
        return ("Nine");
    } else {
        return ("Please enter a positive number")
    }

}


function run() {
    val = document.getElementById("num").value;
    let StrArray = convert(val);
    let result = StrArray.join(' ');
    document.getElementById("change").innerHTML = result
}
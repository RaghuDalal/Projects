function loop(){
    let length = parseInt(document.getElementById('len').value);
    let randomNum = "";
    let n = charset.length
    for (let i = 0 ; i < length; ++i) {
        randomNum += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('result').innerHTML = randomNum;
}

function numOnly(){

    charset = "0123456789";
    loop();

}

function lowerCase(){

    charset = "abcdefghijklmnopqrstuvwxyz";
    loop();

}

function upperCase(){

    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    loop();

}

function lowerUpper(){

    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    loop();

}

function numAlpha(){

    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    loop();

}

function extreme(){

    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()<>?/";
    loop();
}
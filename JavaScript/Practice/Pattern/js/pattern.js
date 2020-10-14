function rightAngleTriangle() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";


    for (let row = 1; row <= number; row++) {

        for (let col = 1; col <= row; col++) {

            div = div + '*';
        }
        div = div + '<br>';

    }
    document.getElementById('star').style.textAlign = "left";
    document.getElementById('star').innerHTML = div;

}


function colTriangle() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";


    for (let row = 1; row <= number; row++) {

        for (let col = 1; col <= row; col++) {

            div = div + col;
        }
        div = div + '<br>';

    }
    document.getElementById('star').style.textAlign = "left";
    document.getElementById('star').innerHTML = div;

}


function rowTriangle() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";


    for (let row = 1; row <= number; row++) {

        for (let col = 1; col <= row; col++) {

            div = div + row;
        }
        div = div + '<br>';

    }
    document.getElementById('star').style.textAlign = "left";
    document.getElementById('star').innerHTML = div;

}

function squarePattern() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";


    for (let row = 1; row <= number; row++) {

        for (let col = 1; col <= number; col++) {

            div = div + number;
        }
        div = div + '<br>';

    }
    document.getElementById('star').innerHTML = div;

}

function rowReverseTriangle() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";


    for (let row = 1; row <= number; row++) {

        for (let col = 1; col <= row; col++) {

            div = div + (row - col + 1);
        }
        div = div + '<br>';

    }
    document.getElementById('star').innerHTML = div;

}

function invertedNumber() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";


    for (let row = 1; row <= number; row++) {

        for (let col = 1; col <= number - row + 1; col++) {

            div = div + (number - row + 1);
        }
        div = div + '<br>';

    }
    document.getElementById('star').style.textAlign = "left";
    document.getElementById('star').innerHTML = div;

}

function mirrorNumber() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";

    for (let row = 1; row <= number; row++) {
        for (let space = 1; space <= number - row; space++) {

            div = div + ' ';

        }
        for (let col = 1; col <= row; col++) {

            div = div + col;
        }
        div = div + '<br>';

    }
    document.getElementById('star').style.textAlign = "end";
    document.getElementById('star').innerHTML = div;

}

function mirrorStars() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";

    for (let row = 1; row <= number; row++) {
        for (let space = 1; space <= number - row; space++) {

            div = div + ' ';

        }
        for (let col = 1; col <= row; col++) {

            div = div + "*";
        }
        div = div + '<br>';

    }
    document.getElementById('star').style.textAlign = "end";
    document.getElementById('star').innerHTML = div;

}

function halfDiamond() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";

    for (let row = 1; row <= number; row++) {
        for (let space = 1; space <= number - row; space++) {

            div = div + '';

        }
        for (let col = 1; col <= row; col++) {

            div = div + "*";
        }
        div = div + '<br>';

    }
    document.getElementById('star').style.textAlign = "center";
    document.getElementById('star').innerHTML = div;

}

function Diamond() {

    let number = parseInt(document.getElementById('num').value);

    let div = "";


    let n1 = (number + 1) / 2



    for (let row = 1; row <= n1; row++) {

        for (let space = 1; space <= n1 - row; space++) {

            div = div + ' ';

        }
        for (let star = 1; star <= (2 * row - 1); star++) {

            div = div + ("*");
        }
        div = div + '<br>';
    }

    let n2 = number / 2
    for (let row = 1; row <= n2; row++) {
        for (let space2 = 1; space2 <= row; space2++) {
            div = div + ' ';

        }
        star2 = number - 2 * row
        for (star2; star2 > 0; star2--) {
            div = div + ("*");

        }
        div = div + '<br>';
    }


    document.getElementById('star').style.textAlign = "center";
    document.getElementById('star').innerHTML = div;

}
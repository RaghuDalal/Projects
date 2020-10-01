function Sum() {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    result = parseInt(value1) + parseInt(value2);
    document.getElementById('changeable').innerHTML = result;
}

function Sub() {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    result = parseInt(value1) - parseInt(value2);
    document.getElementById('changeable').innerHTML = result;
}

function Mul() {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    result = parseInt(value1) * parseInt(value2);
    document.getElementById('changeable').innerHTML = result;
}

function Div() {
    var value1 = document.getElementById('value1').value;
    var value2 = document.getElementById('value2').value;
    result = parseInt(value1) / parseInt(value2);
    document.getElementById('changeable').innerHTML = result;
}
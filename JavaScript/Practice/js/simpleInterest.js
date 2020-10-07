function find() {
    var p = document.getElementById('principle').value;
    var r = document.getElementById('rate').value;
    var t = document.getElementById('time').value;
    var si = (p * r * t) / 100;

    document.getElementById('change').innerHTML = si;

}
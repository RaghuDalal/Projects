function numberSum(N) {
    let total = 0;

    for(let i = 1; i <= N; i++){
        total += i;
      }
    return total;
}

function run(){
    val = document.getElementById("num").value;
    document.getElementById("change").innerHTML=numberSum(val)
    }
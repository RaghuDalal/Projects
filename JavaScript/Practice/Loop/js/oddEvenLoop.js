function calculate() {
  const number = document.getElementById("num").value;
  const nm = parseInt(number);

  const odd_array = [];
  const even_array = [];

  
  for (let index = 1; index < nm; index++) {
    if (index % 2 === 0) even_array.push(index);
    else odd_array.push(index);
  }

  document.getElementById("odd").innerHTML = "Odd List: " + odd_array;
  document.getElementById("even").innerHTML = "Even List: " + even_array;

}
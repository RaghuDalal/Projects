var todo = [
    "clean room",
    "brush teeth",
    "exercise",
    "study js",
    "eat healthy",
    "stay fit"
];

//for Loop (for adding ! in the end)
for (var i=0; i < todo.length; i++ ) {
    todo[i] = todo[i] + "!" ;
}

//for loop (for logging todo)

for (var i=0; i < todo.length; i++ ) {
    console.log(todo[i], i);
}

//for each Method/Loop (for logging todo)

todo.forEach(function(todo, i){
    console.log(todo, i);
})

//More efficent way of using For Each Loop

function logTodos(todo, i) {
    console.log(todo, i);
}
todo.forEach(logTodos);
//while Loop

var counterOne = 0;
while (counterOne < 10){
    console.log(counterOne);
    counterOne++ ;
}

//do while Loop

var counterTwo = 0
do {
    console.log("do while",counterTwo);
    counterTwo++;
} while (counterTwo < 10);
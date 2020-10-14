function pattern(){
    let n= parseInt(document.getElementById('num').value);

    let row = 1;
    while (row <= n){
        let space = 1;
        while (space <= n-row){
            document.write(" ");
            space++;
            }
        let col = 1;
        while (col <= row){
            document.write(col);
            col++;
            }
        document.write('<br/>');
        row++;
    }
}
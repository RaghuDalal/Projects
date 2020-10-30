function run(){

    let name = document.getElementById('name').value;
    let RollNo = document.getElementById('rollNo').value;
    let Date = document.getElementById('date').value;
    let MobileNo = document.getElementById('mobileNo').value;

    if (name && RollNo && Date && MobileNo !=null){
        document.getElementById('ShowData').innerHTML = "Success";
    }
}
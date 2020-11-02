function run(){

    let ID = parseInt(document.getElementById('id').value);
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let PhoneNo = parseInt(document.getElementById('phoneNo').value);
    let RollNo = parseInt(document.getElementById('rollNo').value);



}



function getData(){
    url = "http://localhost:54005/api/stduentapi/GetStudents/";
    fetch(url).then(response => response.json()).then(data => console.log(data))
}


function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )
}
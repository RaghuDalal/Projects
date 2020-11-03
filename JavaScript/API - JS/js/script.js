
function getData(){
    url = "http://localhost:54005/api/stduentapi/GetStudents/";
    fetch(url).then(response => response.json()).then(data => console.log(data))
}


function postData(){
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let PhoneNo = parseInt(document.getElementById('phoneNo').value);
    let RollNo = parseInt(document.getElementById('rollNo').value);
    url = "http://localhost:54005/api/stduentapi/PostStudent";
    data = {"name":""+Name+"","mobileNo":PhoneNo,"rollNo":RollNo,"emailid":""+Email+""}
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch(url, params).then(response=> response.text())
}

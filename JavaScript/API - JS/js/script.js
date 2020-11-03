
function getData(){
    var txt="";
    url = "http://localhost:54005/api/stduentapi/GetStudents/";
    fetch(url).then(response => response.json()).then(data => 
    {
        let table="<table border='1px' style='border-collapse:collapse;text-align:center;'><tr>   <td>ID</td>  <td>Name</td>  <td>Email</td>  <td>PhoneNo</td>  <td>RollNo</td></tr>"
        for(let x=0;x<data.length;x++)
        {
            table=table+"<tr><td>"+data[x].id+"</td><td>"+data[x].name+"</td><td>"+data[x].emailid+"</td><td>"+data[x].mobileNo+"</td><td>"+data[x].rollNo+"</td></tr>";
        }
        table=table+"</table>"
        document.getElementById("output").innerHTML=table;
    })
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
    fetch(url, params).then(response=> response.text()).then(getData())
}

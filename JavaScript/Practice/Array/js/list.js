var student = []
var studentList = {}

function StudentInsert() {

    var name = document.getElementById('name').value;
    var RollNo = document.getElementById('rollNo').value;
    var Date = document.getElementById('date').value;
    var MobileNo = document.getElementById('mobileNo').value;

    //student.push(name);

    studentList.name = name;
    studentList.rollno = RollNo;
    studentList.date = Date;
    studentList.mobileno = MobileNo;

    student.push(studentList);

    document.getElementById('name').value = '';
    document.getElementById('rollNo').value = '';
    document.getElementById('date').value = '';
    document.getElementById('mobileNo').value = '';

    StudentList();

}

function StudentUpdate() {

    var name = document.getElementById('name').value;
    var rollNO = document.getElementById('rollNo').value;
    var date = document.getElementById('date').value;
    var mobileNo = document.getElementById('mobileNo').value;


    var index = document.getElementById('index').value; 
    student[index] = name; 

    document.getElementById('name').value = '';
    document.getElementById('rollNo').value = '';
    document.getElementById('date').value = '';
    document.getElementById('mobileNo').value = '';
    document.getElementById('index').value = ''; 

    StudentList(); 
}

function StudentDelete(index) {

    // delete  student[index];
    student.splice(index, 1);
    StudentList();
}

function StudentById(index) {

    document.getElementById('name').value = student[index];
    document.getElementById('index').value = index;
    document.getElementById('btnInsert').style.display = 'none';
    document.getElementById('btnUpdate').style.display = 'block';

}

function StudentList() {
    var data = '<table> <tr>  <td>ID &nbsp </td>    <td> &nbsp &nbsp &nbsp Name </td>  <td> &nbsp &nbsp &nbsp Roll No </td>  <td> &nbsp &nbsp &nbsp Mobile No </td> <td> &nbsp &nbsp &nbsp Date </td> <td> &nbsp &nbsp &nbsp Edit </td>    <td> &nbsp &nbsp &nbsp Delete </td>  </tr>';

    for (var index = 0; index < studentList.length; index++) {
        data = data + '<tr> <td>' + (index + 1) + '</td>  <td>' + "&nbsp &nbsp &nbsp " + student[index] + '</td> ';
        data = data + ' <td>&nbsp &nbsp &nbsp <button onclick="StudentById(' + index + ')">Edit </button> </td>';
        data = data + '<td> &nbsp &nbsp &nbsp <button onclick="StudentDelete(' + index + ')">Delete </button> </td>';
        data = data + '  </tr>';

    }
    data = data + '</table>'
    document.getElementById('ShowData').innerHTML = data;

    document.getElementById('btnInsert').style.display = 'block';
    document.getElementById('btnUpdate').style.display = 'none';

}
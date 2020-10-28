var studentList = []
var student = {}

function StudentInsert() {

    var name = document.getElementById('name').value;
    var RollNo = document.getElementById('rollNo').value;
    var Date = document.getElementById('date').value;
    var MobileNo = document.getElementById('mobileNo').value;

    student = new Object;
    student.name = name;
    student.rollno = RollNo;
    student.date = Date;
    student.mobileno = MobileNo;

    studentList.push(student);

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
    studentList[index].name = name; 
    studentList[index].date = date; 
    studentList[index].rollno = rollNO; 
    studentList[index].mobileno = mobileNo; 

    document.getElementById('name').value = '';
    document.getElementById('rollNo').value = '';
    document.getElementById('date').value = '';
    document.getElementById('mobileNo').value = '';
    document.getElementById('index').value = ''; 

    StudentList(); 
}

function StudentDelete() {

    studentList.splice(0, 1);
    StudentList();
}

function StudentById(index) {

    document.getElementById('name').value = studentList[index].name;
    document.getElementById('rollNo').value = studentList[index].rollno;
    document.getElementById('date').value = studentList[index].date;
    document.getElementById('mobileNo').value = studentList[index].mobileno;

    document.getElementById('index').value = index;
    document.getElementById('btnInsert').style.display = 'none';
    document.getElementById('btnUpdate').style.display = 'block';

}

function StudentList() {
    
    var data = '<table> <tr>  <td>ID &nbsp </td>    <td> &nbsp &nbsp &nbsp Name </td>  <td> &nbsp &nbsp &nbsp Roll No </td>  <td> &nbsp &nbsp &nbsp Mobile No </td> <td> &nbsp &nbsp &nbsp Date </td> <td> &nbsp &nbsp &nbsp Edit </td>    <td> &nbsp &nbsp &nbsp Delete </td>  </tr>';

    for (var index = 0; index < studentList.length; index++) {
        data = data + '<tr> <td>' + (index + 1) + '</td>  <td>' + "&nbsp &nbsp &nbsp " + studentList[index].name + '</td>    <td>' + "&nbsp &nbsp &nbsp " + studentList[index].rollno+ '</td>  <td>' + "&nbsp &nbsp &nbsp " + studentList[index].mobileno+ '</td>  <td>' + "&nbsp &nbsp &nbsp " + studentList[index].date+ '</td> ';

        data = data + ' <td>&nbsp &nbsp &nbsp <button onclick="StudentById(' + index + ')">Edit </button> </td>';
        data = data + '<td> &nbsp &nbsp &nbsp <button onclick="StudentDelete(' + index + ')">Delete </button> </td>';
        data = data + '  </tr>';

    }
    data = data + '</table>'
    document.getElementById('ShowData').innerHTML = data;

    document.getElementById('btnInsert').style.display = 'block';
    document.getElementById('btnUpdate').style.display = 'none';

}
var student =[]
 
function StudentInsert()
{
 
     var name= document.getElementById('name').value;
 
    student.push(name);
    document.getElementById('name').value='';
StudentList();
 
}
 
function StudentUpdate()
{
 
     var name= document.getElementById('name').value;
     var index= document.getElementById('index').value;
      
     student[index]=name;
    
     document.getElementById('name').value='';
     document.getElementById('index').value='';
     
     alue= index;
 
   StudentList();
  
}
 
function StudentDelete(index)
{
 
   // delete  student[index];
    student.splice(index,1);
    StudentList();
}
 
function  StudentById(index)
{
 
    document.getElementById('name').value=student[index];
    document.getElementById('index').value= index;
    document.getElementById('btnInsert').style.display= 'none';
    document.getElementById('btnUpdate').style.display= 'block';
    
     
 
}
 
function StudentList()
{
    var data='<table><tr><td>SrNo &nbsp </td> <td>&nbsp &nbsp &nbsp Name</td><td> &nbsp &nbsp &nbsp  Edit</td><td> &nbsp &nbsp &nbsp Delete</td></tr>';
 
    for( var index=0; index< student.length; index++ )
    {
        data= data+'<tr> <td>'+(index+1)+'</td>  <td>'+"&nbsp &nbsp &nbsp " +student[index]+'</td> ';
        data= data+' <td>&nbsp &nbsp &nbsp <button onclick="StudentById('+index+')">Edit </button> </td>';
        data= data+'<td> &nbsp &nbsp &nbsp <button onclick="StudentDelete('+index+')">Delete </button> </td>';
        data= data+'  </tr>';
             
    }
    data=data+'</table>'
    document.getElementById('ShowData').innerHTML= data;
    
    document.getElementById('btnInsert').style.display= 'block';
    document.getElementById('btnUpdate').style.display= 'none';
    
 
}
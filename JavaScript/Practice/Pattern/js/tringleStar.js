function pattern()
{
 
  let number= parseInt(document.getElementById('num').value);
   

    for( let row=1; row<=number; row++)
    {
 
         for(let col=1; col<=row;col++)
         {
            //document.getElementById('change').innerHTML = (" * ");
            document.write(' * ');
            //div=div+'<span style="width:30px;"> *<\span>   ';
         }
    //div=div+'<br>';
    document.write('<br/>');
    //document.getElementById('change').innerHTML = ('<br/>');
    }
    document.getElementById('change').innerHTML= div;
      
}
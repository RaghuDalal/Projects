function pattern()
{
 
  let number= parseInt(document.getElementById('num').value);
    for( let row=1; row<=number; row++)
    {
 
         for(let col=1; col<=row;col++)
         {
            document.getElementById('change').innerHTML = (" * ");
            //document.write('*');
         }

    //document.write('<br/>');
    document.getElementById('change').innerHTML = ('<br/>');
    }
      
}
function rightAngleTriangle()
{
 
  let number= parseInt(document.getElementById('num').value);

  let div="";
   

    for( let row=1; row<=number; row++)
    {
 
         for(let col=1; col<=row;col++)
         {
            
            div=div+'<span style="width:30px;">*<\span>   ';
         }
    div=div+'<br>';

    }
    document.getElementById('star').innerHTML= div;
      
}


function colTriangle()
{
 
  let number= parseInt(document.getElementById('num').value);

  let div="";
   

    for( let row=1; row<=number; row++)
    {
 
         for(let col=1; col<=row;col++)
         {
            
            div=div+ col;
         }
    div=div+'<br>';

    }
    document.getElementById('star').innerHTML= div;
      
}


function rowTriangle()
{
 
  let number= parseInt(document.getElementById('num').value);

  let div="";
   

    for( let row=1; row<=number; row++)
    {
 
         for(let col=1; col<=row;col++)
         {
            
            div=div+ row;
         }
    div=div+'<br>';

    }
    document.getElementById('star').innerHTML= div;
      
}

function squarePattern()
{
 
  let number= parseInt(document.getElementById('num').value);

  let div="";
   

    for( let row=1; row<=number; row++)
    {
 
         for(let col=1; col<=number;col++)
         {
            
            div=div+ number;
         }
    div=div+'<br>';

    }
    document.getElementById('star').innerHTML= div;
      
}

function rowReverseTriangle()
{
 
  let number= parseInt(document.getElementById('num').value);

  let div="";
   

    for( let row=1; row<=number; row++)
    {
 
         for(let col=1; col<=row;col++)
         {
            
            div=div+ (row - col + 1 );
         }
    div=div+'<br>';

    }
    document.getElementById('star').innerHTML= div;
      
}

function invertedNumber()
{
 
  let number= parseInt(document.getElementById('num').value);

  let div="";
   

    for( let row=1; row<=number; row++)
    {
 
         for(let col=1; col<=number-row+1;col++)
         {
            
            div=div+ (number-row+1 );
         }
    div=div+'<br>';

    }
    document.getElementById('star').innerHTML= div;
      
}

function mirrorNumber()
{
 
  let number= parseInt(document.getElementById('num').value);

  let div="";

    for( let row=1; row<=number; row++)
    {
         for (let space=1;space<=number-row;space++){

            div=div+ '_';

         }
         for(let col=1; col<=row;col++)
         {
            
            div=div+ col;
         }
    div=div+'<br>';

    }
    document.getElementById('star').innerHTML= div;
      
}
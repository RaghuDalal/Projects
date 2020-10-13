function run()
  {
    let sum=0;
    let num = document.getElementById("num").value;
    let no = parseInt(num);
    while(no>0)
     {
       sum=sum+no%10;
       no=Math.floor(no/10);
      }
      document.getElementById('change').innerHTML = sum;  
         
   }
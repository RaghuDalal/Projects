function find(){
    var salary = document.getElementById('salary').value;
    var sal =  Number(salary);
    var dep = document.getElementById('dep').value;

    //Handling below 10k Salary Case

    if(9999<sal<=0){
        document.getElementById('change').innerHTML = ("Not Applicable");

    }
    
    else if (sal>=10000 && sal<=20000){
        
        if (dep=="Management"){
            var hra = sal*(10/100);
            var ta = sal*(15/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);

        }
        else if (dep=="Production"){
            var hra = sal*(5/100);
            var ta = sal*(10/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }

        else if(dep=="Maintainance"){
            var hra = sal*(6/100);
            var ta = sal*(12/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }

        else  {
            var hra = sal*(5/100);
            var ta = sal*(10/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }
    }

    //Between 20k - 50k Salary

    else if (sal>=20000 && sal<=50000){
       
        if (dep=="Management"){
            var hra = sal*(15/100);
            var ta = sal*(20/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }
        else if (dep=="Production"){
            var hra = sal*(10/100);
            var ta = sal*(15/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }
        else if(dep=="Maintainance"){
            var hra = sal*(10/100);
            var ta = sal*(20/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }
        else  {
            var hra = sal*(5/100);
            var ta = sal*(10/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }

    }

    


    //Above 50k Salary

    else{
      
        if (dep=="Management"){
            var hra = sal*(20/100);
            var ta = sal*(25/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }
        else if (dep=="Production"){
            var hra = sal*(15/100);
            var ta = sal*(20/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }
        else if(dep=="Maintainance"){
            var hra = sal*(15/100);
            var ta = sal*(25/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }
        else  {
            var hra = sal*(5/100);
            var ta = sal*(10/100);
            var total = sal + hra + ta;
            document.getElementById('change').innerHTML = total;
            document.getElementById('detail').innerHTML = ("Base Salary: "+ sal + " | " + "HRA: " + hra + " | " + "TA: " + ta);
        }


        
    }
    
}
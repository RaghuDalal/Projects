using System;
using System.Collections.Generic;
using System.Text;

namespace Practice.model
{
    public class StudentAction
    {
        public void ReadWriteStudent()
        {
            Student objectStudent = new Student();
            objectStudent.Name = "KMA SCHOOL";
            objectStudent.RollNo = 1;
            objectStudent.DOB = DateTime.Now;
            objectStudent.AnnualFee = 1250.50;

            Console.WriteLine("Student Detail is:");
            Console.WriteLine("==================");
            Console.WriteLine($"Name {objectStudent.Name}");
            Console.WriteLine("RollNo {0}",objectStudent.RollNo);
            Console.WriteLine("fee"+  objectStudent.AnnualFee.ToString());
            Console.WriteLine("Dob {0}" , objectStudent.DOB.ToString("mm/dd/yyyy"));




            Console.WriteLine("==================");


        }

    }
}

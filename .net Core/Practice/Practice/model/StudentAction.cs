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

            Console.WriteLine("Please enter name");
            objectStudent.Name = Convert.ToString(Console.ReadLine()); ;

            Console.WriteLine("Please enter Roll No");
            objectStudent.RollNo = Convert.ToInt32(Console.ReadLine()); ;

            //Console.WriteLine("Please enter your DOB");
            objectStudent.DOB = DateTime.Now;

            Console.WriteLine("Please enter Annual fee");
            objectStudent.AnnualFee = Convert.ToDouble(Console.ReadLine()); ;

            Console.WriteLine("Student Detail is:");
            Console.WriteLine("==================");
            Console.WriteLine($"Name {objectStudent.Name}");
            Console.WriteLine("RollNo {0}",objectStudent.RollNo);
            Console.WriteLine("Fee "+  objectStudent.AnnualFee.ToString());
            Console.WriteLine("Dob {0}" , objectStudent.DOB.ToString("mm/dd/yyyy"));




            Console.WriteLine("==================");


        }

    }
}

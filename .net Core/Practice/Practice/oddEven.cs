using System;
using System.Collections.Generic;
using System.Text;

namespace oddEven
{
    public class oddEvenFinder
    {
        public void oddevnFinder()
        {
            Int32 num;

            Console.WriteLine("Please enter a Number");
            num = Convert.ToInt32(Console.ReadLine());

            if (num % 2 == 0)
            {
                Console.WriteLine("Number is Even");
            }

            else
            {
                Console.WriteLine("Number is Odd");
            }

        }
    }
}

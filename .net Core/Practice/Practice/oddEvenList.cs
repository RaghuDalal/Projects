using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace oddEvenList
{
    public class oddevenList
    {
        public void oddevnListFinder()
        {
            Int32 num;

            Console.WriteLine("Please enter a Number");
            num = Convert.ToInt32(Console.ReadLine());

            for (int index = 1; index <= num; index++)
            {
                if (index % 2 == 0)
                {
                    Console.WriteLine("Even : "+ index);
                    
                }
                else
                {
                    Console.WriteLine("Odd : " + index);

                }
            }
        }
    }
}

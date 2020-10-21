using System;
using System.Collections.Generic;
using System.Text;

namespace primeFinder
{
    public class primeORnot
    {
        public void primeNumFinder()
        {
            Int32 num;

            Console.WriteLine("Please enter a Number");
            num = Convert.ToInt32(Console.ReadLine());

            bool isPrime = true;

            if (num == 1)
            {
                Console.WriteLine("1 is not a Prime Number");
            }
            else if (num > 1)
            {
                for (int i = 2; i < num; i++)
                {
                    if (num % i == 0)
                    {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime)
                {
                    Console.WriteLine(num + " is a Prime Number");
                }
                else
                {
                    Console.WriteLine(num + " is a not a Prime Number");
                }
            }
            else
            {
                Console.WriteLine(num + " is a not a Prime Number");
            }
        }
    }
}

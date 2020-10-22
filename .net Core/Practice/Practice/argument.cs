using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace ArgumentNamespace
{
    public class ArgumentClass
    {
        public void sum()
        {
            Int32 num1, num2;

            Console.WriteLine("Please enter Number 1");
            num1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Please enter Number 2");
            num2 = Convert.ToInt32(Console.ReadLine());

            int result = numberSum(num1, num2);

            Console.WriteLine("\n");
            Console.WriteLine(result);

            int numberSum(int num1, int num2)
            {
                return (num1 + num2);
            }

        }
    }
}

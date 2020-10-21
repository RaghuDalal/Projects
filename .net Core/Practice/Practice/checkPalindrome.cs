using System;
using System.Collections.Generic;
using System.Text;

namespace checkPalindrome
{
    public class checkPalindromeClass
    {
        public void palindrome()
        {
          
            Console.WriteLine("Please enter a Number");
            int num = Convert.ToInt32(Console.ReadLine());
            int checker = num;

            int digit, result = 0;

            while (num>0)
            {
                digit = num % 10;
                result = (result * 10) + digit;
                num = num / 10;
            }
    
            if (result == checker)
            {
                Console.WriteLine("True");
            }
            else
            {
                Console.WriteLine("False");
            }

        }
        
            
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace Pattern
{
    public class PrintPattern
    {
        public void star()
        {
            int num;
            Console.WriteLine("Enter Number : ");
            num = Convert.ToInt32(Console.ReadLine());

            int row, col,space;
            for(row=1;row<=num;row++)
            {
                for(space=1;space<=num-row;space++)
                {
                    Console.Write(" ");
                }
                for(col=1;col<=row;col++)
                {
                    Console.Write("*");
                }
                Console.WriteLine("\n");
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace whileloop
{
    class doWhile
    {
        public void loop()
        {
            
            int i = 0;
            String name = Console.ReadLine();
            do
            {
                Console.WriteLine(name);
                i++;
            }
            while (i <= 10);
        }
    }
}

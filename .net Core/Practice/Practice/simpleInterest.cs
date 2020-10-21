using System;
using System.Collections.Generic;
using System.Text;

namespace interestCalculator
{
    class simpleInterest
    {
        public void calculator()
        {
            int Principle, Time;
            float Rate, Si;

            Console.WriteLine("Please enter Principle amount");
            Principle = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Please enter Rate of Interest");
            Rate = Convert.ToSingle(Console.ReadLine());

            Console.WriteLine("Please enter Time(in Years)");
            Time = Convert.ToInt32(Console.ReadLine());

            Si = Principle * Rate * Time / 100;

            Console.WriteLine("Simple Interest is :{0}", Si);
        }
    }
}

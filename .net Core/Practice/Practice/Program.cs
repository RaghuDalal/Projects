using System;
using oddEven;
using oddEvenList;
using primeFinder;
using interestCalculator;
using checkPalindrome;
using Pattern;
using whileloop;
using Practice.model;
using ArgumentNamespace;

namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            /*Console.WriteLine("Argument Sum");
            ArgumentClass numSum = new ArgumentClass();
            numSum.sum();
            Console.WriteLine("\n");*/

            Console.WriteLine("Property Set / Get class");
            StudentAction studentAction = new StudentAction();
            studentAction.ReadWriteStudent();
            Console.WriteLine("\n");


            /*Console.WriteLine("Odd Even Finder");
            oddEvenFinder finder = new oddEvenFinder();
            finder.oddevnFinder();
            Console.WriteLine("\n");

            Console.WriteLine("Odd Even Loop");
            oddevenList list = new oddevenList();
            list.oddevnListFinder();
            Console.WriteLine("\n");

            Console.WriteLine("Prime or not");
            primeORnot find = new primeORnot();
            find.primeNumFinder();
            Console.WriteLine("\n");

            Console.WriteLine("Simple Interest Calculator");
            simpleInterest si = new simpleInterest();
            si.calculator();
            Console.WriteLine("\n");

            Console.WriteLine("Check Palindrome");
            checkPalindromeClass palindrome = new checkPalindromeClass();
            palindrome.palindrome();
            Console.WriteLine("\n");

            Console.WriteLine("Print Star");
            PrintPattern ptrn = new PrintPattern();
            ptrn.star();
            Console.WriteLine("\n");

            Console.WriteLine("Do While");
            doWhile loop= new doWhile();
            loop.loop();
            Console.WriteLine("\n");*/
        }
    }
}
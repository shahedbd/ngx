using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace DataPrep
{
    class Program
    {
        static void Main(string[] args)
        {

            PrepareData.Execute(500);
            Console.WriteLine("Data Generated Successfully.");
            Console.ReadLine();

        }

    }
}

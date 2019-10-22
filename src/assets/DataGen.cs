using System;
using System.IO;

namespace DataGen
{
    class Program
    {
        static void Main(string[] args)
        {
            Random random = new Random();
            string result = string.Empty;
            string resultAll = string.Empty;

            resultAll = "{\n";
            resultAll = resultAll + "\"BasicInfo\": [\n";

            for (long i = 1; i <= 50000; i++)
            {
                int range = 80 * 365; //80 years          
                var randomDate = DateTime.Today.AddDays(-random.Next(range)).ToShortDateString();

                result = result + "{\n";
                //result = result + " \"id\": " + random.Next(10000) + ",";
                result = result + " \"id\": " + i + ",";
                result = result + "\n \"Name\": \"User Name: " + random.Next(556677) + "\",";
                result = result + "\n \"DateofBirth\": " + "\"" + randomDate + "\",";
                result = result + "\n \"MobileNo\": \"Mobile No: " + random.Next(33556677) + "\",";
                result = result + "\n \"Country\": \"My Country: " + random.Next(9988) + "\"";
                result = result + "\n},\n";
                //if (i == 20) result = result + "\n}]}\n";
                //else result = result + "\n},\n";

                resultAll = resultAll + result;
                result = string.Empty;
            }
            resultAll = resultAll.Substring(0, (resultAll.Length - 2));
            resultAll = resultAll + "\n]}\n";
            using (StreamWriter writer = new StreamWriter("db.json"))
            {
                writer.Write(resultAll);
            }

        }

    }
}

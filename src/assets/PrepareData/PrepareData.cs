using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace DataPrep
{
    public static class PrepareData
    {
        public static void Execute(long NumberofRow)
        {
            Random random = new Random();
            long _longRandom = LongRandom(02222444466660, 0111133335555, random);
            string path = Path.GetFullPath(Path.Combine(Environment.CurrentDirectory, @"..\..\..\")) + @"Data\";

            string result = string.Empty;
            string resultAll = string.Empty;

            resultAll = "{\n";
            resultAll = resultAll + "\"BasicInfo\": [\n";

            for (long i = 1; i <= NumberofRow; i++)
            {
                int range = 80 * 365; //80 years          
                var randomDate = DateTime.Today.AddDays(-random.Next(range)).ToShortDateString();

                result = result + "{\n";
                result = result + " \"id\": " + i + ",";
                result = result + "\n \"Name\": \"User Name: " + random.Next(556677) + "\",";
                result = result + "\n \"DateofBirth\": " + "\"" + randomDate + "\",";
                result = result + "\n \"MobileNo\": \"" + _longRandom + "\",";

                result = result + "\n \"Country\": \"" + GetRandomCountryName(path + "Country.json", random) + "\"";

                result = result + "\n},\n";

                resultAll = resultAll + result;
                result = string.Empty;
            }
            resultAll = resultAll.Substring(0, (resultAll.Length - 2));
            resultAll = resultAll + "\n]}\n";


            string filePath = path + "db.json";
            if (!File.Exists(filePath))
            {
                using (StreamWriter _streamWriter = File.CreateText(filePath))
                {
                    _streamWriter.Write(resultAll);
                    _streamWriter.Flush();
                }
            }
            else if (File.Exists(filePath))
            {
                using (var _streamWriter = new StreamWriter(filePath))
                {
                    _streamWriter.Write(resultAll);
                    _streamWriter.Flush();
                }

            }


        }


        static string GetRandomCountryName(string filePath, Random random)
        {
            string _countryJson = File.ReadAllText(filePath);
            var _country = JsonConvert.DeserializeObject<List<Country>>(_countryJson);

            int index = random.Next(_country.Count);
            return _country[index].Name;
        }

        static long LongRandom(long min, long max, Random rand)
        {
            byte[] buf = new byte[8];
            rand.NextBytes(buf);
            long longRand = BitConverter.ToInt64(buf, 0);
            return (Math.Abs(longRand % (max - min)) + min);
        }
    }
}

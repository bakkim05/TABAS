using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace TABAS_REST.Models
{
    public class ProcessRequest
    {
        public string request()
        {
            String response = "";
            using (var conn = new SqlConnection(CONSTANTS.CONN_STR))
            {
                using (var command = conn.CreateCommand())
                {
                    command.CommandText = @"SELECT * 
                        FROM Usuarios;";
                    conn.Open();
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            response = response + reader.GetValue(0).ToString() + "-" +reader.GetValue(1).ToString() + "\n";

                        }
                    }
                    conn.Close();
                }
            }
            return response;
        }
    }        
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Npgsql;

namespace TABAS_REST.Models
{
    public class ProcessRequest
    {
        public string request()
        {
            String response = "";
            using (var conn = new SqlConnection(CONSTANTS.CONN_STR_SQL_SERVER))
            {
                using (var command = conn.CreateCommand())
                {
                    command.CommandText = CONSTANTS.COMMAND_SQL_SELECT_ALL_USERS;
                    conn.Open();
                    using (var reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            response = response + reader.GetValue(0).ToString() + "-" + reader.GetValue(1).ToString() + "\n";

                        }
                    }
                    conn.Close();
                }
            }
            return response;
        }

        /**
         * Procesa los get al consultar a todos los usuarios.
         * 
         */
        public List<UserModel> UsersControllerGet()
        {
            List<UserModel> lis = new List<UserModel>();

            using (var conn = new NpgsqlConnection(CONSTANTS.CONN_STR_POSTGRE_SQL))
            {
                conn.Open();

                // Retrieve all rows
                using (var cmd = new NpgsqlCommand(CONSTANTS.COMMAND_PSQL_SELECT_ALL_USERS, conn))
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        lis.Add(new UserModel
                        {
                            Cedula = reader.GetInt64(0),
                            Nombre = reader.GetString(1),
                            Apellido = reader.GetString(2),
                            Mail = reader.GetString(3),
                            Tel = reader.GetInt64(4),
                            Carnet = reader.GetString(5)
                        });
                    }
                }
                //Console.WriteLine(reader.GetString(0));

                conn.Close();
            }
            return lis;
        }

        /**
         * Procesa las solicutudes post al registrar un usuario
         */
        public void UserControllerPost(UserModel p_User)
        {
            using (var conn = new NpgsqlConnection(CONSTANTS.CONN_STR_POSTGRE_SQL))
            {
                conn.Open();

                // Insert some data
                using (var cmd = new NpgsqlCommand())
                {
                    cmd.Connection = conn;

                    cmd.CommandText = "INSERT INTO client (clientid, firstname, lastname, email, phone, carnet) VALUES (@a, @b, @c, @d, @e, @f)";
                    cmd.Parameters.AddWithValue("a", p_User.Cedula);
                    cmd.Parameters.AddWithValue("b", p_User.Nombre);
                    cmd.Parameters.AddWithValue("c", p_User.Apellido);
                    cmd.Parameters.AddWithValue("d", p_User.Mail);
                    cmd.Parameters.AddWithValue("e", p_User.Tel);
                    cmd.Parameters.AddWithValue("f", p_User.Carnet);
                    //       cmd.CommandText = CONSTANTS.INSERT
                    //+ CONSTANTS.CLIENT
                    //+ CONSTANTS.L_PAR
                    //+ CONSTANTS.PSQL_CEDULA + CONSTANTS.COMMA + CONSTANTS.PSQL_NOMBRE + ","
                    //+ CONSTANTS.PSQL_APELLIDO + CONSTANTS.COMMA
                    //+ CONSTANTS.PSQL_MAIL + CONSTANTS.COMMA
                    //+ CONSTANTS.PSQL_TELEFONO + CONSTANTS.COMMA
                    //+ CONSTANTS.PSQL_CARNET
                    //+ CONSTANTS.VALUES
                    //+ CONSTANTS.AT + CONSTANTS.CEDULA + CONSTANTS.COMMA
                    //+ CONSTANTS.AT + CONSTANTS.NOMBRE + CONSTANTS.COMMA
                    //+ CONSTANTS.AT + CONSTANTS.APELLIDO + CONSTANTS.COMMA
                    //+ CONSTANTS.AT + CONSTANTS.CORREO + CONSTANTS.COMMA
                    //+ CONSTANTS.AT + CONSTANTS.TELEFONO + CONSTANTS.COMMA
                    //+ CONSTANTS.AT + CONSTANTS.CARNET
                    //+ CONSTANTS.R_PAR;

                    //       cmd.Parameters.AddWithValue(CONSTANTS.PSQL_NOMBRE, p_User.Nombre);
                    //       cmd.Parameters.AddWithValue(CONSTANTS.PSQL_APELLIDO, p_User.Apellido);
                    //       cmd.Parameters.AddWithValue(CONSTANTS.PSQL_MAIL, p_User.Mail);
                    //       cmd.Parameters.AddWithValue(CONSTANTS.PSQL_TELEFONO, p_User.Tel);
                    //       cmd.Parameters.AddWithValue(CONSTANTS.PSQL_CARNET, p_User.Carnet);
                    //       cmd.Parameters.AddWithValue(CONSTANTS.PSQL_CEDULA, p_User.Cedula);



                    cmd.ExecuteNonQuery();
                }
                conn.Close();
            }
        }
        
        /**
         * Retorna todos los bagcarts
         */
        public List<VuelosModel> BagCartControllerGet()
        {
            List<VuelosModel> lis = new List<VuelosModel>();

            using (var conn = new NpgsqlConnection(CONSTANTS.CONN_STR_POSTGRE_SQL))
            {
                conn.Open();

                // Retrieve all rows
                using (var cmd = new NpgsqlCommand("SELECT * FROM bagcart", conn))
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        lis.Add(new VuelosModel
                        {
                            Id = reader.GetInt64(0),
                            Marca = reader.GetString(1),
                            Modelo = reader.GetInt32(2)
                        });
                    }
                }
                conn.Close();
                //Console.WriteLine(reader.GetString(0));

            }
            return lis;
        }

        /**
         * Procesa las solicutudes post al registrar un usuario
         */
        public void BagCartControllerPost(VuelosModel pCart)
        {
            using (var conn = new NpgsqlConnection(CONSTANTS.CONN_STR_POSTGRE_SQL))
            {
                conn.Open();

                // Insert some data
                using (var cmd = new NpgsqlCommand())
                {
                    cmd.Connection = conn;

                    cmd.CommandText = "INSERT INTO bagcart (bagcartid, brand, model) VALUES (@a, @b, @c)";
                    cmd.Parameters.AddWithValue("a", pCart.Id);
                    cmd.Parameters.AddWithValue("b", pCart.Marca);
                    cmd.Parameters.AddWithValue("c", pCart.Modelo);
                    //cmd.Parameters.AddWithValue("d", pCart.SecCode);

                    cmd.ExecuteNonQuery();
                }
                using (var cmd = new NpgsqlCommand())
                {
                    cmd.Connection = conn;

                    cmd.CommandText = "INSERT INTO flightxbagcart (bagcartid, flightid) VALUES (@a, @b)";
                    cmd.Parameters.AddWithValue("a", pCart.Id);
                    cmd.Parameters.AddWithValue("b", pCart.Vuelo);

                    cmd.ExecuteNonQuery();
                }
                conn.Close();
            }
        }

        /**
         * Retorna todas las maletas enlistadas en el sistema
         */
        public List<BagModel> BagControllerGet()
        {
            List<BagModel> lis = new List<BagModel>();

            using (var conn = new NpgsqlConnection(CONSTANTS.CONN_STR_POSTGRE_SQL))
            {
                conn.Open();

                // Retrieve all rows
                using (var cmd = new NpgsqlCommand("SELECT * FROM suitcase", conn))
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        lis.Add(new BagModel
                        {
                            Id = reader.GetInt64(0),
                            Color = reader.GetString(1),
                            Peso = reader.GetInt32(2),
                            Costo = reader.GetInt32(3),
                            Estado = reader.GetBoolean(4),
                            //UserID = reader.GetInt64(5)
                        });
                    }
                }
                conn.Close();
                //Console.WriteLine(reader.GetString(0));

            }
            return lis;
        }

        public List<EmployeeModel> EmployeeControllerGet()
        {
            List<EmployeeModel> lis = new List<EmployeeModel>();

            using (var conn = new NpgsqlConnection(CONSTANTS.CONN_STR_POSTGRE_SQL))
            {
                conn.Open();

                // Retrieve all rows
                using (var cmd = new NpgsqlCommand("SELECT * FROM employee", conn))
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        lis.Add(new EmployeeModel
                        {
                            Nombre = reader.GetString(0),
                            Apellido = reader.GetString(1),
                            Cedula = reader.GetInt64(2),
                            Rol = reader.GetString(3),
                            User = reader.GetString(4),
                            Password = reader.GetString(5)
                        });
                    }
                }
                conn.Close();
                //Console.WriteLine(reader.GetString(0));

            }
            return lis;
        }

        /**
         * Retorna todos los bagcarts
         */
        public List<FlightModelcs> VuelosControllerGet()
        {
            List<FlightModelcs> lis = new List<FlightModelcs>();

            using (var conn = new NpgsqlConnection(CONSTANTS.CONN_STR_POSTGRE_SQL))
            {
                conn.Open();

                // Retrieve all rows
                using (var cmd = new NpgsqlCommand("SELECT * FROM planexflight", conn))
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        lis.Add(new FlightModelcs
                        {
                            IdVuelo= reader.GetInt64(0),
                            IdAvion = reader.GetInt64(1),
                            //Partida = reader.GetTimeStamp(1).ToString(),
                            //Origen = reader.GetString(2),
                            //Destino = reader.GetString(3),
                            //Estado =reader.GetBoolean(4)
                        });
                    }
                }
                conn.Close();
                //Console.WriteLine(reader.GetString(0));

            }
            return lis;
        }


        public List<MaletasxUsuarioModel> MaletaXusuarioGet()
        {
            List<MaletasxUsuarioModel> lis = new List<MaletasxUsuarioModel>();

            using (var conn = new NpgsqlConnection(CONSTANTS.CONN_STR_POSTGRE_SQL))
            {
                conn.Open();

                // Retrieve all rows
                using (var cmd = new NpgsqlCommand("select client.firstname, client.lastname, client.clientid, count( clientxsuitcase.clientid) from client, clientxsuitcase where client.clientid = clientxsuitcase.clientid  group by client.clientid", conn))
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        lis.Add(new MaletasxUsuarioModel
                        {
                            Nombre = reader.GetString(0),
                            Apellido = reader.GetString(1),
                            Cedula = reader.GetInt64(2),
                            Maletas = reader.GetInt16(3).ToString(),
                            //Destino = reader.GetString(3),
                            //Estado =reader.GetBoolean(4)
                        });
                    }
                }
                conn.Close();
                //Console.WriteLine(reader.GetString(0));

            }
            return lis;
        }

    }
}
/*
 private void button1_Click(object sender, EventArgs e) {
  using (SqlConnection con = new SqlConnection(dc.Con)) {
    using (SqlCommand cmd = new SqlCommand("sp_Add_contact", con)) {
      cmd.CommandType = CommandType.StoredProcedure;

      cmd.Parameters.Add("@FirstName", SqlDbType.VarChar).Value = txtFirstName.Text;
      cmd.Parameters.Add("@LastName", SqlDbType.VarChar).Value = txtLastName.Text;

      con.Open();
      cmd.ExecuteNonQuery();
    }
  }
}*/



//Postrgres Sql parametrization

/**
 * var connString = "Host=myserver;Username=mylogin;Password=mypass;Database=mydatabase";

using (var conn = new NpgsqlConnection(connString))
{
    conn.Open();

    // Insert some data
    using (var cmd = new NpgsqlCommand())
    {
        cmd.Connection = conn;
        cmd.CommandText = "INSERT INTO data (some_field) VALUES (@p)";
        cmd.Parameters.AddWithValue("p", "Hello world");
        cmd.ExecuteNonQuery();
    }

    // Retrieve all rows
    using (var cmd = new NpgsqlCommand("SELECT some_field FROM data", conn))
    using (var reader = cmd.ExecuteReader())
        while (reader.Read())
            Console.WriteLine(reader.GetString(0));
}
 */

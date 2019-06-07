using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    public abstract class CONSTANTS
{
        /*String de conexión*/
        public const string CONN_STR_SQL_SERVER = "Server = tcp:tecairlines.database.windows.net,1433;Initial Catalog = TecAirlinesΩ; Persist Security Info=False;User ID =pasandobases; Password=bAsEs2019;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout = 30;";
        public const string CONN_STR_POSTGRE_SQL = "Server=txbas.postgres.database.azure.com;Database=postgres;Port=5432;User Id=postuser@txbas;Password=bAsEs2019;Ssl Mode=Require;";

        /*Nombres de mensaje*/
        public const string MESSAGE_TYPE = "MESSAGE_TYPE";
        public const string MESSAGE_DATA = "MESSAGE_DATA";

        public const string NUM_CED = "NUM_CED";

        //misc
        public const string L_PAR = "( ";
        public const string R_PAR = " )";
        public const string VALUES = ") VALUES ( ";
        public const string AT = "@";
        public const string COMMA = ", ";
        public const string INSERT = "INSERT INTO ";

        //Client - JUNG
        public const string NOMBRE="nombre";
        public const string TELEFONO= "tel";
        public const string CORREO= "correo";
        public const string CARNET= "carnet";
        public const string APELLIDO= "apellido";
        public const string CEDULA = "cedula";

        // Client - NICKO
        public const string PSQL_CEDULA = "clientid";
        public const string PSQL_NOMBRE = "firstname";
        public const string PSQL_APELLIDO = "lastname";
        public const string PSQL_MAIL = "email";
        public const string PSQL_TELEFONO = "phone";
        public const string PSQL_CARNET = "carnet";

        // tablas - POSTGRE
        public const string CLIENT = "client ";

        //BagCart Jung
        public const string CART_ID = "id";
        public const string CART_MARCA = "marca";
        public const string CART_MODELO = "modelo";
        public const string CART_SEC_CODE = "sec_code";

        // BagCart Nicko



        //public const string s = "";
        //public const string s = "";
    }
}

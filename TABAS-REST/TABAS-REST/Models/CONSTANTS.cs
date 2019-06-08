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

        // Requests Postrgres
        public const string COMMAND_SQL_SELECT_ALL_USERS = @"SELECT * FROM Usuarios;";
        public const string COMMAND_PSQL_SELECT_ALL_USERS = "SELECT * FROM client";

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
        public const string CART_VUELO = "vuelo";
        //public const string CART_AVION = "avion";

        public const string CART_SEC_CODE = "sec_code";

        // BagCart Nicko
        public const string PSQL_CART_ID = "bagcartid";
        public const string PSQL_CART_MARCA = "brand";
        public const string PSQL_CART_MODELO = "model";
        public const string PSQL_CART_SEC_CODE = "sec_code";

        //Bag - Jung

        public const string BAG_ID = CART_ID;
        public const string BAG_COLOR = "color";
        public const string BAG_PESO = "peso";
        public const string BAG_COSTO = "costo";
        public const string BAG_ESTADO = "estado";
        public const string BAG_USER = PSQL_CEDULA;

        //Bag - Nicko
        public const string PSQL_BAG_ID = "suitcaseid";
        public const string PSQL_BAG_COLOR = BAG_COLOR;
        public const string PSQL_BAG_PESO = "weight";
        public const string PSQL_BAG_COSTO = "cost";
        public const string PSQL_BAG_ESTADO = "estado";
        public const string PSQL_BAG_USER = CEDULA;

        //Employee - Jung
        public const string EMPL_NOMBRE = NOMBRE;
        public const string EMPL_APELLIDO = APELLIDO;
        public const string EMPL_ID = CEDULA;
        public const string EMPL_ROL = "rol";
        public const string EMPL_USER = "username";
        public const string EMPL_PWD = "password";

        //Employee - Nicko
        public const string PSQL_EMPL_NOMBRE = NOMBRE;
        public const string PSQL_EMPL_APELLIDO = APELLIDO;
        public const string PSQL_EMPL_ROL = EMPL_ROL;
        public const string PSQL_EMPL_USER = EMPL_USER;
        public const string PSQL_EMPL_PWD = EMPL_PWD;
        public const string PSQL_EMPL_ID = "id_number";

        // Vuelo
        public const string FL_ID = "flightid";
        public const string FL_PARTIDA = "departure_date";
        public const string FL_ORIGEN = "origin";
        public const string FL_DESTINO = "destiny";
        public const string FL_ESTADO = "state";
        public const string PLANE_ID = "planeid";

    }
}

        //public const string s = "";
        //public const string s = "";
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    public abstract class CONSTANTS
{
        /*String de conexión*/
        public const string CONN_STR = "Server = tcp:tecairlines.database.windows.net,1433;Initial Catalog = TecAirlinesΩ; Persist Security Info=False;User ID =pasandobases; Password=bAsEs2019;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout = 30;";

        /*Nombres de mensaje*/
        public const string MESSAGE_TYPE = "MESSAGE_TYPE";
        public const string MESSAGE_DATA = "MESSAGE_DATA";
        public const string NUM_CED = "NUM_CED";
        public const string s="";
}
}

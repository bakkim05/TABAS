using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    [DataContract]
    public class EmployeeModel
    {
        [DataMember(Name = CONSTANTS.EMPL_ID)]
        public Int64 Cedula { get; set; }

        [DataMember(Name = CONSTANTS.EMPL_NOMBRE)]
        public String Nombre { get; set; }

        [DataMember(Name = CONSTANTS.EMPL_APELLIDO)]
        public String Apellido { get; set; }

        [DataMember(Name = CONSTANTS.EMPL_ROL)]
        public String Rol { get; set; }

        [DataMember(Name = CONSTANTS.EMPL_USER)]
        public String User { get; set; }

        [DataMember(Name = CONSTANTS.EMPL_PWD)]
        public String Password { get; set; }


    }
}

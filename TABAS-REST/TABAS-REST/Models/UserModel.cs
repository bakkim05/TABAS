using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    [DataContract]
    public class UserModel
    {
        [DataMember(Name = CONSTANTS.NOMBRE)]
        public String Nombre { get; set; }

        [DataMember(Name = CONSTANTS.TELEFONO)]
        public String Tel { get; set; }

        [DataMember(Name = CONSTANTS.CORREO)]
        public String Mail { get; set; }

        [DataMember(Name = CONSTANTS.CARNET)]
        public String Carnet { get; set; }

        [DataMember(Name = CONSTANTS.APELLIDO)]
        public String Apellido { get; set; }

        [DataMember(Name = CONSTANTS.CEDULA)]
        public Int64 Cedula { get; set; }
    }
}

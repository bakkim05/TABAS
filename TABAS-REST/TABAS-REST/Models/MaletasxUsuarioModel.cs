using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    [DataContract]
    public class MaletasxUsuarioModel
    {

        [DataMember(Name = CONSTANTS.NOMBRE)]
        public string Nombre { get; set; }

        [DataMember(Name = CONSTANTS.APELLIDO)]
        public string Apellido { get; set; }

        [DataMember(Name = CONSTANTS.CEDULA)]
        public Int64 Cedula { get; set; }


        [DataMember(Name = CONSTANTS.CANT_MALETAS)]
        public string Maletas { get; set; }
    }
}

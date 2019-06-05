using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    [DataContract]
    public class PutojungModel
    {
        [DataMember(Name = "name")]
        public string Nombre { get; set; }

        [DataMember(Name = "tel")]
        public int Tel { get; set; }

        [DataMember(Name = "correo")]
        public string Mail { get; set; }

        [DataMember(Name = "carnet")]
        public int Carnet { get; set; }

        //[DataMember(Name = "apellido")]
        public string Apellido { get; set; }


    }
}

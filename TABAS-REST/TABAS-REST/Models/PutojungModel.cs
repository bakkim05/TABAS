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
        public String Nombre { get; set; }

        [DataMember(Name = "tel")]
        public Int32 Tel { get; set; }

        [DataMember(Name = "correo")]
        public String Mail { get; set; }

        [DataMember(Name = "carnet")]
        public Int32 Carnet { get; set; }

        //[DataMember(Name = "apellido")]
        public String Apellido { get; set; }


    }
}

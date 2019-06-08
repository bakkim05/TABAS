using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    [DataContract]
    public class FlightModelcs
    {

        [DataMember(Name = CONSTANTS.FL_ID)]
        public Int64 Id { get; set; }

        [DataMember(Name = CONSTANTS.FL_PARTIDA)]
        public string Partida { get; set; }

        [DataMember(Name = CONSTANTS.FL_ORIGEN)]
        public string Origen { get; set; }

        [DataMember(Name = CONSTANTS.FL_DESTINO)]
        public string Destino { get; set; }

        [DataMember(Name = CONSTANTS.FL_ESTADO)]
        public bool Estado { get; set; }
    }
}

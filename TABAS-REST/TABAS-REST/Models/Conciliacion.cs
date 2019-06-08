using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    [DataContract]
    public class Conciliacion
    {
        [DataMember(Name = CONSTANTS.CONC_N_VUELO)]
        public Int64 NumeroVuelo { get; set; }

        [DataMember(Name = CONSTANTS.CONC_TIPO_AVION)]
        public Int64 TipoAvion { get; set; }

        [DataMember(Name = CONSTANTS.CONC_CAPACIDAD)]
        public Int64 Capacidad { get; set; }

        [DataMember(Name = CONSTANTS.CONC_EN_CART)]
        public Int64 MaletasBagCart { get; set; }

        [DataMember(Name = CONSTANTS.CONC_EN_AVION)]
        public Int64 MaletasAvion { get; set; }
    }

//    Número de Vuelo
//Tipo de Avión
//Capacidad Total de Maletas
//Total de Maletas en Bag Cart
// Total de Maletas en el Avión Rechazadas

}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    [DataContract]
    public class BagModel
    {

        [DataMember(Name = CONSTANTS.BAG_ID)]
        public Int64 Id { get; set; }

        [DataMember(Name = CONSTANTS.BAG_COLOR)]
        public String Color { get; set; }

        [DataMember(Name = CONSTANTS.BAG_PESO)]
        public Int32 Peso { get; set; }

        [DataMember(Name = CONSTANTS.BAG_COSTO)]
        public Int32 Costo { get; set; }

        [DataMember(Name = CONSTANTS.BAG_ESTADO)]
        public Boolean Estado { get; set; }

        [DataMember(Name = CONSTANTS.BAG_USER)]
        public Int64 UserID { get; set; }
    }
}

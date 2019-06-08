using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace TABAS_REST.Models
{
    [DataContract]
    public class BagCartModel
    {
        [DataMember(Name = CONSTANTS.CART_ID)]
        public Int64 Id { get; set; }

        [DataMember(Name = CONSTANTS.CART_MARCA)]
        public String Marca { get; set; }

        [DataMember(Name = CONSTANTS.CART_MODELO)]
        public Int32 Modelo { get; set; }

        //[DataMember(Name = CONSTANTS.CART_SEC_CODE)]
        //public String SecCode { get; set; }
    }
}

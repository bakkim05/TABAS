using System;
using System.Runtime.Serialization;

namespace TABAS_REST.Models
{
    [DataContract]
    public class VuelosModel
    {
        [DataMember(Name = CONSTANTS.CART_ID)]
        public Int64 Id { get; set; }

        [DataMember(Name = CONSTANTS.CART_MARCA)]
        public String Marca { get; set; }

        [DataMember(Name = CONSTANTS.CART_MODELO)]
        public Int32 Modelo { get; set; }

        //[DataMember(Name = CONSTANTS.CART_SEC_CODE)]
        public String SecCode { get; set; }


        [DataMember(Name = CONSTANTS.CART_VUELO)]
        public Int64 Vuelo { get; set; }

    }
}

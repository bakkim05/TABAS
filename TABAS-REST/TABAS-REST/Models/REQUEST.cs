using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace TABAS_REST.Models
{
    [DataContract]
    public class REQUEST
    {
        [DataMember(Name = CONSTANTS.MESSAGE_TYPE)]
        public string M_type { get; set; }


        [DataMember(Name = CONSTANTS.MESSAGE_DATA)]
        public string M_data { get; set; }
        
        [DataMember(Name = CONSTANTS.MESSAGE_DATA)]
        public string M_data { get; set; }

    }
}

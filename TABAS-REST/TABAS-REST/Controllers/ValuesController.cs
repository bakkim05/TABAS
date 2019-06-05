using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TABAS_REST.Models;
using Microsoft.AspNetCore.Cors;
using Newtonsoft.Json;

namespace TABAS_REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowMyOrigin")]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        [EnableCors("AllowMyOrigin")]
        public IEnumerable<string> Get()
        {
            //ProcessRequest req = new ProcessRequest();
            List<PutojungModel> lis = new List<PutojungModel>();
            PutojungModel jng = new PutojungModel
            {
                Nombre = "Puto Jung",
                Apellido = "kabron",
                Mail = "Jung@carepicha.com",
                Tel = 666666666,
                Carnet = 2015127575                
            };
            lis.Add(jng);
            yield return JsonConvert.SerializeObject(jng, Formatting.Indented);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

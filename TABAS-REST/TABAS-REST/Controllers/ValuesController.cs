using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TABAS_REST.Models;
using Microsoft.AspNetCore.Cors;

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
            return new String [] { "{\"nombre\":\"Annmaria Jenicke\",\"tel\": 66136901\",\"correo\":\"ajenicke9@constantcontact.com\",\"carnet\": \"2015735845\"}" } ;//req.request().ToString();
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

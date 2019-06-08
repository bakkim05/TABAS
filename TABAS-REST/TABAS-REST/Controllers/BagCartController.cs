using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TABAS_REST.Models;

namespace TABAS_REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BagCartController : ControllerBase
    {
        // GET: api/BagCart
        [HttpGet]
        public ActionResult<IEnumerable<BagCartModel>> Get()
        {
            return new ProcessRequest().BagCartControllerGet();
        }

        // GET: api/BagCart/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/BagCart
        [HttpPost]
        public void Post([FromBody] BagCartModel value)
        {
            new ProcessRequest().BagCartControllerPost(value);

        }

        // PUT: api/BagCart/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

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
    public class BagsController : ControllerBase
    {
        // GET: api/Bags
        [HttpGet]
        public ActionResult<IEnumerable<BagModel>> Get()
        {
            return new ProcessRequest().BagControllerGet();
        }

        // GET: api/Bags/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Bags
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Bags/5
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

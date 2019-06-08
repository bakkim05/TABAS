using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TABAS_REST.Models;

namespace TABAS_REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        // GET: api/Users
        [HttpGet]
        public ActionResult<IEnumerable<UserModel>> Get()
        {
            return new ProcessRequest().UsersControllerGet();
        }

        // GET: api/Users/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Users
        [HttpPost]
        public ActionResult<IEnumerable<UserModel>> Post([FromBody] UserModel value)
        {
            //new ProcessRequest().UserControllerPost(value);
            return new List<UserModel>() { value };
        }

        // PUT: api/Users/5
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

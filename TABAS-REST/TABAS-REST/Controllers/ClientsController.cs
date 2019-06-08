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
    [EnableCors("AllowMyOrigin")]
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
        public ActionResult<IEnumerable<UserModel>> Post([FromForm] UserModel value)
        {
            //UserModel value = JsonConvert.DeserializeObject<UserModel>(p_Value);
            new ProcessRequest().UserControllerPost(value);
            return new List<UserModel>() { value };
        }

        [HttpPost]
        public ActionResult<IEnumerable<UserModel>> Post1([FromBody] UserModel value)
        {
            //UserModel value = JsonConvert.DeserializeObject<UserModel>(p_Value);
            new ProcessRequest().UserControllerPost(value);
            return new List<UserModel>() { value };
        }

        [HttpPost]
        public ActionResult<IEnumerable<UserModel>> Post2([FromQuery] UserModel value)
        {
            //UserModel value = JsonConvert.DeserializeObject<UserModel>(p_Value);
            new ProcessRequest().UserControllerPost(value);
            return new List<UserModel>() { value };
        }

        //// POST: api/Users
        //[HttpPost]
        //public ActionResult<IEnumerable<UserModel>> Post([FromForm] string p_Value)
        //{
        //    UserModel value = JsonConvert.DeserializeObject<UserModel>(p_Value);
        //    new ProcessRequest().UserControllerPost(value);
        //    return new List<UserModel>() { value };
        //}

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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TABAS_REST.Models;

namespace TABAS_REST.Controllers
{
    [ApiController]
    public class BagsController : ControllerBase
    {
        // GET: api/Bags
        [HttpGet]
        [Route("api/bags")]
        public ActionResult<IEnumerable<BagModel>> Get()
        {
            return new ProcessRequest().BagControllerGet();
        }

        // GET: api/BagCart
        [HttpGet]
        [Route("api/bags/users")]
        public ActionResult<IEnumerable<MaletasxUsuarioModel>> Get1()
        {
            return new ProcessRequest().MaletaXusuarioGet();
        }

        //GET: api/BagCart report conciliacio
       [HttpGet]
       [Route("api/bags/conciliacion")]
        public ActionResult<IEnumerable<Conciliacion>> Get2()
        {
            return new ProcessRequest().MaletaConciliacionGet();
        }

        // GET: api/Bags/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Bags
        [HttpPost]
        [Route("api/bags")]
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

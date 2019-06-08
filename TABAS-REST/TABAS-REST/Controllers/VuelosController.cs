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
    public class VuelosController : ControllerBase
    {
        // GET: api/Vuelos
        [HttpGet]
        public ActionResult<IEnumerable<FlightModelcs>> Get()
        {
            return new ProcessRequest().VuelosControllerGet();
        }
    }
}

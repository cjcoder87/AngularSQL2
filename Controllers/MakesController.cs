using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vega.Controllers.Resources;
using vega.Data;
using vega.Models;

namespace vega.Controllers
{
    public class MakesController : Controller
    {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;

        public  MakesController(VegaDbContext context, IMapper mapper)
        {
            this.context =context;
            this.mapper = mapper;
        }

[HttpGet("/api/makes")]
         public async Task<IEnumerable<MakeResource>> GetMakesAsync(){
var makes = await context.Makes.Include(m => m.Models).ToListAsync();
return mapper.Map<List<Make>, List<MakeResource>>(makes);
            }

            
    }
}
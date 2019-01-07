using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using vega.Controllers.Resources;
using vega.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using vega.Mapping;
using vega.Data;

namespace vega.Controllers
{
    public class FeaturesController : Controller
    {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;
        public  FeaturesController(VegaDbContext context, IMapper mapper)
        {
            this.context =context;
            this.mapper = mapper;
        }
        [HttpGet("/api/features")]
         public async Task<IEnumerable<FeatureResource>> GetFeaturesAsync(){
var features = await context.Features.ToListAsync();
return mapper.Map<List<Feature>, List<FeatureResource>>(features);
            }
    }
}
using Microsoft.EntityFrameworkCore;
using vega.Models;

namespace vega.Data
{
    public class VegaDbContext : DbContext
    {
        public VegaDbContext(DbContextOptions<VegaDbContext> options):base(options)
        {
            
        }

        public DbSet<Make> Makes {get; set;}
        //public DbSet<Model> Models {get; set;}
        
    }
}
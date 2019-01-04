using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace vega.Models
{
    public class Make
    {
        [Key]
        public int Id{  get; set;}
        [Required]
        [StringLengthAttribute(255)]
        public string MakeName {get; set;}
        public ICollection<Model> Models {get; set;} 
        public Make()
        {
            Models = new Collection<Model>();
        }
        


    }
}
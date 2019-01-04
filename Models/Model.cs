using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace vega.Models
{
    [Table("Models")]
    public class Model
    {
 
        [Key]
        public int Id{  get; set;}
        [Required]
        [StringLengthAttribute(255)]
        public string ModelName {get; set;}

        public Make Make { get; set; }

        //public int MakeId { get; set; }
    }
}
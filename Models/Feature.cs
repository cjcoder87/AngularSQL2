using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace vega.Models
{
    public class Feature
    {
        [Key]
        public int Id{  get; set;}
        [Required]
        [StringLengthAttribute(255)]
        public string FeatureName {get; set;}

    }
}
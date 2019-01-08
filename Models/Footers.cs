using System;
using System.Collections.Generic;

namespace vega.Models
{
    public partial class Footers
    {
        public int FooterId { get; set; }
        public string Footer { get; set; }
        public int SnippetId { get; set; }

        public virtual Snippet Snippet { get; set; }
    }
}

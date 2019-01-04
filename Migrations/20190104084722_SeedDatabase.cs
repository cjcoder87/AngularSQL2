using Microsoft.EntityFrameworkCore.Migrations;

namespace vega.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
migrationBuilder.Sql("INSERT INTO Makes (MakeName) VALUES('BMW')");
            migrationBuilder.Sql("INSERT INTO Makes (MakeName) VALUES('Mercedes-Benz')");
            migrationBuilder.Sql("INSERT INTO Makes (MakeName) VALUES('Dodge')");

            migrationBuilder.Sql("INSERT INTO Models (ModelName, MakeID) VALUES('BMW-330i', (SELECT ID FROM MAKES WHERE MakeName = 'BMW'))");
            migrationBuilder.Sql("INSERT INTO Models (ModelName, MakeID) VALUES('BMW-M8', (SELECT ID FROM MAKES WHERE MakeName = 'BMW'))");
            migrationBuilder.Sql("INSERT INTO Models (ModelName, MakeID) VALUES('BMW-430i', (SELECT ID FROM MAKES WHERE MakeName = 'BMW'))");

            migrationBuilder.Sql("INSERT INTO Models (ModelName, MakeID) VALUES('Mercedes-Benz-C300', (SELECT ID FROM MAKES WHERE MakeName = 'Mercedes-Benz'))");
            migrationBuilder.Sql("INSERT INTO Models (ModelName, MakeID) VALUES('Mercedes-Benz-Maybach', (SELECT ID FROM MAKES WHERE MakeName = 'Mercedes-Benz'))");
            migrationBuilder.Sql("INSERT INTO Models (ModelName, MakeID) VALUES('Mercedes-Benz-S550', (SELECT ID FROM MAKES WHERE MakeName = 'Mercedes-Benz'))");

            migrationBuilder.Sql("INSERT INTO Models (ModelName, MakeID) VALUES('Dodge-Viper', (SELECT ID FROM MAKES WHERE MakeName = 'Dodge'))");
            migrationBuilder.Sql("INSERT INTO Models (ModelName, MakeID) VALUES('Dodge-Challenger', (SELECT ID FROM MAKES WHERE MakeName = 'Dodge'))");
            migrationBuilder.Sql("INSERT INTO Models (ModelName, MakeID) VALUES('Dodge-Charger',  (SELECT ID FROM MAKES WHERE MakeName = 'Dodge'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE From Makes");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace vega.Migrations
{
    public partial class SeedFeature : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Features_Features_FeatureId",
                table: "Features");

            migrationBuilder.DropIndex(
                name: "IX_Features_FeatureId",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "FeatureId",
                table: "Features");

                migrationBuilder.Sql("INSERT INTO Features (FeatureName) VALUES('Airbags')");
            migrationBuilder.Sql("INSERT INTO Features (FeatureName) VALUES('AC')");
            migrationBuilder.Sql("INSERT INTO Features (FeatureName) VALUES('PowerSeats')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FeatureId",
                table: "Features",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Features_FeatureId",
                table: "Features",
                column: "FeatureId");

            migrationBuilder.AddForeignKey(
                name: "FK_Features_Features_FeatureId",
                table: "Features",
                column: "FeatureId",
                principalTable: "Features",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

                migrationBuilder.Sql("DELETE From Features");
        }
    }
}

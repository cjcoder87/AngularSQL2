using Microsoft.EntityFrameworkCore.Migrations;

namespace vega.Migrations
{
    public partial class FeatureFKRemove : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Features_Models_ModelId",
                table: "Features");

            migrationBuilder.DropIndex(
                name: "IX_Features_ModelId",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "ModelId",
                table: "Features");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ModelId",
                table: "Features",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Features_ModelId",
                table: "Features",
                column: "ModelId");

            migrationBuilder.AddForeignKey(
                name: "FK_Features_Models_ModelId",
                table: "Features",
                column: "ModelId",
                principalTable: "Models",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

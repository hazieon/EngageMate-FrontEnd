//check thumb feature on feature menu

function checkingForThumbOMeterFeature() {
  describe("Checking feature menu of app for Thumbometer and navigating to page", () => {
    it("Check for Thumbometer heading under icon by p tag", () => {
      cy.wait(1000);
      cy.get("section")
        .eq(0)
        .find("p")
        .should("have.id", "theThumb")
        .contains("Thumbometer");
    });

    it("Get the ThumbOMeter link and click the link", () => {
      cy.wait(1000);
      cy.get("section").eq(0).find("a").click();
    });

    it("Get the heading once on Thumbometer page and confirm has 'Thumbometer' as text", () => {
      cy.wait(1000);
      cy.get("h2")
        .should(
          "have.class",
          "chakra-heading heading_container__2B5Og css-zey6tx"
        )
        .contains("Thumbometer");
    });
  });
}

export default checkingForThumbOMeterFeature;

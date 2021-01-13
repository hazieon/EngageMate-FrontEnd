//check thumb feature on feature menu

function checkingForThumbOMeterFeature() {
  describe("Checking feature menu of app for Thumb-o-meter", () => {
    it("Get the thumb-o-meter feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("section")
        .eq(0)
        .find("p")
        .should("have.id", "theThumb")
        .contains("Thumb-o-meter");
    });
  });

  describe("Click the Thumb-O-Meter link on the feature menu", () => {
    it("Get the Thumb-O-Meter link and click the link", () => {
      cy.wait(1500);
      cy.get("section").eq(0).find("a").click();
    });
  });

  describe("Checking contents Thumbometer page", () => {
    it("Get the heading by class name and confirm has 'Thumbometer' as text", () => {
      cy.wait(1500);
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

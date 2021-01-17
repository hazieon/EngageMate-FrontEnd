//check hand feature on feature menu

function checkingForHandFeature() {
  describe("Checking feature menu of app for Raise A Hand", () => {
    it("Get the raise a hand feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("section")
        .eq(1)
        .find("p")
        .should("have.id", "theHand")
        .contains("Raise a Hand");
    });
  });

  describe("Click the raise a hand link on the feature menu", () => {
    it("Get the raise a hand link and click the link", () => {
      cy.wait(1500);
      cy.get("section").eq(1).find("a").click();
    });
  });

  describe("Checking contents Raise a Hand page", () => {
    it("Get the heading by class name and confirm has 'Raise Hand' as text", () => {
      cy.wait(1000);
      cy.get("h2")
        .should(
          "have.class",
          "chakra-heading heading_container__2B5Og css-zey6tx"
        )
        .contains("Raise Hand");
    });
  });
}

export default checkingForHandFeature;

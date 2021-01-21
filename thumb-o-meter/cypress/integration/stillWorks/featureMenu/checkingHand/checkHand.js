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
}

export default checkingForHandFeature;

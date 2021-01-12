//check thumb feature on feature menu

function CheckingForThumbOMeterFeature() {
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

  describe("Checking contents Thumb-O-Meter page", () => {
    it("Get the heading by class name and confirm has 'Thumb-O-Meter' as text", () => {
      cy.wait(1500);
      cy.get("h1")
        .should("have.class", "thumb-o-meter_heading__2W637")
        .contains("Thumb-O-Meter");
    });
  });
}

export default CheckingForThumbOMeterFeature;

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

  // describe("Checking contents Thumb-O-Meter page", () => {
  //   it("Get the heading by class name and confirm has 'Thumbometer' as text", () => {
  //     cy.wait(1500);
  //     // cy.get("div")
  //     //   .should("have.class", "css-k008qs")
  //     //   .eq(0)
  //     //   .get("div")
  //     //   .should("have.class", "thumb-o-meter_container__Lu33A css-ue0kqe")
  //     //   .eq(0);
  //     cy.get("div")
  //       .should("have.class", "css-gmuwf")
  //       .eq(0)
  //       .find("p")
  //       .should(
  //         "have.class",
  //         "chakra-text thumb-o-meter_heading__2W637 css-zm3qx2"
  //       )
  //       .contains("Thumbometer");
  //   });
  // });
}

export default checkingForThumbOMeterFeature;

// cy.get("div")
//   .should("have.class", "gmuwbf")
//   .eq(0)

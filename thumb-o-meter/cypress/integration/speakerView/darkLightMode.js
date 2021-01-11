function changingBetweenDarkAndLightMode() {
  describe("Demonstrating changing to dark mode", () => {
    it("should get the button that controls dark mode and clicks it", () => {
      //changing to dark mode
      cy.wait(1000);
      cy.get("button")
        .should("have.class", "chakra-button css-j47tpi")
        .eq(0)
        .click();
      cy.wait(1000);
    });
  });

  describe("Demonstrating changing to light mode", () => {
    it("should get the button that controls light mode and clicks it", () => {
      //changes to light mode
      cy.wait(1000);
      cy.get("button")
        .should("have.class", "chakra-button css-14g9kwn")
        .eq(0)
        .click();
      cy.wait(1000);
    });
  });
}

export default changingBetweenDarkAndLightMode;

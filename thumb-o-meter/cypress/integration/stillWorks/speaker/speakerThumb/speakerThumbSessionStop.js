function speakerStopThumbSession() {
  describe("Check for stop timer button", () => {
    it("get stop timer button", () => {
      cy.wait(1000);
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "skView_buttons__1X2Y_");

      cy.get("button")
        .should("have.class", "chakra-button skView_button__1AOqf css-mdlog5")
        .contains("Stop Timer")
        .click();
      cy.wait(1000);
    });
  });
}

export default speakerStopThumbSession;

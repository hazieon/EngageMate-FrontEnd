//checking raise a hand for features that are specific to participant
//check functionality?????

function raiseAHand() {
  //finds raise a hand link on featuremenu and clicks
  describe("Click the Raise A Hand link on the feature menu", () => {
    it("Get the Raise A Hand link and click the link", () => {
      cy.wait(1500);
      cy.get("main").find("section").eq(1).find("a").click();
    });
  });

  //check contents of page
  //checks for heading of the page
  describe("Checking contents Raise A Hand page", () => {
    it("Get the heading by class name and confirm has 'Raise Hand' as text", () => {
      cy.wait(1500);
      cy.get("h1")
        .should("have.class", "raise-hand_heading__nX0Sv")
        .contains("Raise Hand");
    });
  });

  //checks for hand raise
  describe("Checking for hand raise", () => {
    it("Get the div by class name, the heading by class name and confirm has 'Click To Raise Hand' as text and the hand raise image by class name", () => {
      cy.wait(1500);
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "ptHand_container__LHcFf");
      cy.get("h2")
        .should("have.class", "subheading_subheading__3iiDQ")
        .contains("Click To Raise Hand");
      cy.get("div").should("have.class", "hand_container__1Cdv5");
      cy.get("img").should("have.class", "hand_hand__2-yiY");
    });
  });

  //checks for input field
  describe("Check for input field", () => {
    it("Get div and input field", () => {
      cy.wait(1500);
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div")
        .should("have.class", "ptHand_container__LHcFf")
        .find("input");
    });
  });
}

export default raiseAHand;

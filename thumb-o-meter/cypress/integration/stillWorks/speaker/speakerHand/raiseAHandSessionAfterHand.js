function speakerRaiseHandAfterHand() {
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

  // describe("Checking feature menu of app for notification on Raise A Hand", () => {
  //   it("Check for notification on raise a hand", () => {
  //     cy.wait(1500);
  //     cy.get("div")
  //       .should("have.class", "menu_container__16sI5")
  //       .find("div")
  //       .should("have.class", "menu_players__3qFH2")
  //       .find("div")
  //       .should("have.class", "menu_notify__sAV1M css-0")
  //       .find("p")
  //       .contains(1);
  //   });
  // });

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

  describe("Checking the list of hand raises", () => {
    it("Get the ul and check for list item with same as participant input", () => {
      cy.get("div")
        .should("have.class", "skHand_container__20KHR")
        .find("section")
        .should("have.class", "skHand_handsList__2asfu")
        .find("ul")
        .find("li")
        .should("have.class", "skHand_handRaise__1plw0")
        .contains("Test?");
    });
  });

  describe("Getting rid of question", () => {
    it("Get the X to lower the hand", () => {
      cy.get("div")
        .should("have.class", "skHand_container__20KHR")
        .find("section")
        .should("have.class", "skHand_handsList__2asfu")
        .find("ul")
        .find("li")
        .should("have.class", "skHand_handRaise__1plw0")
        .find("button")
        .should("have.class", "skHand_myBtn__198zE")
        .click();
    });
  });
}

export default speakerRaiseHandAfterHand;

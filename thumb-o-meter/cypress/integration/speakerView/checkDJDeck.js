//checking DJ Deck
//check functionality?????

function dJDeck() {
  //finds DJ Deck link on featuremenu and clicks
  describe("Click the DJ Deck link on the feature menu", () => {
    it("Get the DJ Deck and click the link", () => {
      cy.wait(1500);
      cy.get("main").find("section").eq(3).find("a").click();
    });
  });

  // //check contents of page
  // //checks for heading of the page
  // describe("Checking contents DJDeck page", () => {
  //   it("Get the heading by class name and confirm has 'DJ Deck' as text", () => {
  //     cy.wait(1500);
  //     cy.get("h1")
  //       .should("have.class", "")
  //       .contains("");
  //   });
  // });

  //checks for songs?
  describe("Checking for songs", () => {
    it("Get the div by class name, first section then heading and confirming has 'Breakout Room 1' as text", () => {
      cy.wait(1500);
      cy.get("div").should("have.class", "deck_container__2w_Hb");
      cy.get("div").should("have.class", "deck_players__3ETmX");
      cy.get("section").eq(0).find("h1").contains("Breakout Room 1");
    });
  });

  //checks for songs?
  describe("Finding and playing a song", () => {
    it("Get the div by class name, a song, playing it", () => {
      cy.wait(1500);
      cy.get("div")
        .should("have.class", "player_subheading__1oXZ8")
        .eq(3)
        .get("button")
        .eq(12)
        .contains("Play")
        .click();
      cy.wait(5000);
      cy.get("div")
        .should("have.class", "player_subheading__1oXZ8")
        .eq(3)
        .get("button")
        .eq(13)
        .contains("Pause")
        .click();
    });
  });
}

export default dJDeck;

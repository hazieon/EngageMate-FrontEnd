function speakerDjDeck() {
  describe("Speaker using the dj deck and playing tunes", () => {
    it("Find play button on hackathon and click", () => {
      //checking that is hackathon by label
      cy.get("section")
        .find("div")
        .eq(14)
        .should("have.class", "deck_player__3EZHJ")
        .find("p")
        .contains("Hackathon");
      //playing hackathon tune for 5 seconds
      cy.get("section")
        .find("div")
        .eq(14)
        .should("have.class", "deck_player__3EZHJ")
        .find("button")
        .eq(0)
        .click();
      cy.wait(5000);
      //stops playing hackathon
      cy.get("section")
        .find("div")
        .eq(14)
        .should("have.class", "deck_player__3EZHJ")
        .find("button")
        .eq(2)
        .click();
    });
    it("Find play button on Chris 'Engaged 1' and click", () => {
      //checking that is Engaged 1 by label
      cy.get("section")
        .find("div")
        .eq(0)
        .should("have.class", "deck_player__3EZHJ")
        .find("p")
        .contains("Engaged 1");
      //playing Chris Engaged 1 tune
      cy.get("section")
        .find("div")
        .eq(0)
        .should("have.class", "deck_player__3EZHJ")
        .find("button")
        .eq(0)
        .click();
      cy.wait(5000);
      //stops playing Chris Engaged 1 tune
      //   cy.get("section")
      //     .find("div")
      //     .eq(0)
      //     .should("have.class", "deck_player__3EZHJ")
      //     .find("button")
      //     .eq(2)
      //     .click();
    });
  });
}

export default speakerDjDeck;

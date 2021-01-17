function participantRaiseHandSession() {
  describe("Participant raising hand session", () => {
    it("Find input field and type topic into it, find image and click to raise the hand", () => {
      cy.get("input")
        .should("have.class", "chakra-input css-1m7lgs4")
        .type("Test?");
    });
  });

  describe("Participant raising hand session", () => {
    it("Find image and click to raise the hand", () => {
      cy.get("img").should("have.class", "hand_hand__2-yiY").click();
    });
  });
}

export default participantRaiseHandSession;

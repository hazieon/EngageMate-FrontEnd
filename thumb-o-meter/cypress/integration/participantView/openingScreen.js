//getting to the opening screen

function openingScreen() {
  describe("Getting to opening screen", () => {
    it("should show callback cats log in page of app", () => {
      cy.visit("http://localhost:3000");
      cy.wait(1500);
    });
  });
}

//may have to change to deployed one

export default openingScreen;

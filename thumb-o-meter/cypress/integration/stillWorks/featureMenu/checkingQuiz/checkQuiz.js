//check quiz feature on feature menu

function CheckingForQuizFeature() {
  describe("Checking feature menu of app for Live Quiz", () => {
    it("Get the live quiz feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("section")
        .eq(2)
        .find("p")
        .should("have.id", "theQuiz")
        .contains("Live Quiz");
    });
  });
}

export default CheckingForQuizFeature;

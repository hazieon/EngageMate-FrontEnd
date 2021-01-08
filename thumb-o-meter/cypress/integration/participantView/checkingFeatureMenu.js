/////
//feature menu (checking if features are there)
//thumb
//hand
//quiz

function CheckingForThumbOMeterFeature() {
  describe("Checking feature menu of app for Thumb-o-meter", () => {
    it("Get the thumb-o-meter feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("main");
      cy.get("p")
        .should("have.class", "chakra-text css-0")
        .contains("Thumb-o-meter");
    });
  });
}

function CheckingForRaiseAHandFeature() {
  describe("Checking feature menu of app for RaiseAHand", () => {
    it("Get the raise a hand feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("main");
      cy.get("p")
        .should("have.class", "chakra-text css-0")
        .contains("Raise a Hand");
    });
  });
}

function CheckingForLiveQuiz() {
  describe("Checking feature menu of app for LiveQuiz", () => {
    it("Get the live quiz feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("main");
      cy.get("p")
        .should("have.class", "chakra-text css-0")
        .contains("Live Quiz");
    });
  });
}

function checkingFeatureMenu() {
  CheckingForThumbOMeterFeature();
  CheckingForRaiseAHandFeature();
  CheckingForLiveQuiz();
}

export default checkingFeatureMenu;

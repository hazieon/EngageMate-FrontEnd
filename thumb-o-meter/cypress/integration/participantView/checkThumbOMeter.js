//checking thumbometer for features that are specific to participant
//check functionality?????

function thumbOMeter() {
  //finds thumbometer link on featuremenu and clicks
  describe("Click the Thumb-O-Meter link on the feature menu", () => {
    it("Get the Thumb-O-Meter link and click the link", () => {
      cy.wait(1500);
      cy.get("main").find("section").eq(0).find("a").click();
    });
  });

  //check contents of page
  //checks for heading of the page
  describe("Checking contents Thumb-O-Meter page", () => {
    it("Get the heading by class name and confirm has 'Thumb-O-Meter' as text", () => {
      cy.wait(1500);
      cy.get("h1")
        .should("have.class", "thumb-o-meter_heading__2W637")
        .contains("Thumb-O-Meter");
    });
  });

  //checks for question heading
  describe("Checking for the question heading", () => {
    it("Get the div by class name and confirm has 'Waiting session start' as text", () => {
      cy.wait(1500);
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "ptView_container__2x3LO");
      cy.get("h1").contains("Waiting session start");
    });
  });

  //checks for slider
  describe("Check for slider", () => {
    it("Get div by class name to confirm participant screen has a slider on it", () => {
      cy.wait(1500);
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "ptView_container__2x3LO");
      cy.get("div").should("have.class", "chakra-slider css-1e3e5yf");
    });
  });
}

export default thumbOMeter;

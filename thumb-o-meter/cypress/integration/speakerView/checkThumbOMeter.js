//checking thumbometer for features that are specific to speaker
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

  //checks for question and timer dropdown
  describe("Checking for the question and timer dropdown", () => {
    it("Get the div and select by class name and confirm first option has value 'Select Question' as text", () => {
      cy.wait(1500);
      //question
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(0);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(0);
      cy.get("option").eq(0).contains("Select Question");
      //timer
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(1)
        .find("option")
        .eq(5)
        .contains("Timer Amount");
    });
  });

  //checks for start and stop timer buttons
  describe("Check for start and stop timer buttons", () => {
    it("Get div and buttons by class name and confirm has appropiate text", () => {
      cy.wait(1500);
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "skView_buttons__1X2Y_");
      cy.get("button")
        .should("have.class", "chakra-button css-ywjnlx")
        .contains("Start Timer");
      cy.get("button")
        .should("have.class", "chakra-button css-mdlog5")
        .contains("Stop Timer");
    });
  });
}

export default thumbOMeter;

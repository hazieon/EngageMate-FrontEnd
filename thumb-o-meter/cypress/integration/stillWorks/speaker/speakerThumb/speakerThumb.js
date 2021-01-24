//speaker setting a seesion on thumbometer page

function speakerThumbSession() {
  //get question dropdown
  describe("Check for question dropdown", () => {
    it("get question drop down", () => {
      cy.wait(1000);
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(0);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(0);
      cy.get("option").eq(0).contains("Select Question");
      //set custom question
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(0);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(0)
        .select("Set a custom question.")
        .should("have.value", "custom");
      cy.get("input")
        .should("have.class", "chakra-input css-1kzfnz9")
        .eq(0)
        .type("Testing?");
      cy.wait(1000);
    });
  });

  //get custom timer and type in 100
  describe("Check for timer dropdown", () => {
    it("get timer drop down", () => {
      cy.wait(1000);
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(1);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(1);
      cy.get("option").eq(5).contains("Timer Amount");
      //trying to select timer
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(1);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(1)
        .select("Set a custom time.")
        .should("have.value", "custom");
      cy.get("input")
        .should("have.class", "chakra-input css-1kzfnz9")
        .eq(1)
        .type(100);
      cy.wait(1000);
    });
  });

  //get start timer button
  describe("Check for start timer button", () => {
    it("get start timer button", () => {
      cy.wait(1000);
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "skView_buttons__1X2Y_");
      cy.get("button")
        .should("have.class", "chakra-button skView_button__1AOqf css-ywjnlx")
        .contains("Start Timer")
        .click();
      cy.wait(1000);
    });
  });
  //get stop timer button
  // describe("Check for stop timer button", () => {
  //   it("get stop timer button", () => {
  //     cy.wait(1500);
  //     cy.get("div").should("have.class", "skView_container__8oHCA");
  //     cy.get("div").should("have.class", "css-gmuwbf");
  //     cy.get("div").should("have.class", "skView_container__8oHCA");
  //     cy.get("div").should("have.class", "skView_buttons__1X2Y_");

  //     cy.get("button")
  //       .should("have.class", "chakra-button skView_button__1AOqf css-mdlog5")
  //       .contains("Stop Timer");
  //       .click();
}

export default speakerThumbSession;

function speakerLiveQuizSession() {
  describe("Speaker starting a live quiz session", () => {
    it("Find select a question drop down, select custom question and input testing?", () => {
      cy.get("div")
        .should("have.class", "skPoll_container__22UU2")
        .get("form")
        .get("select")
        .should("have.class", "chakra-select css-18wj7tk")
        .get("option")
        .eq(0)
        .contains("Select a question");
      cy.get("select")
        .should("have.class", "chakra-select css-18wj7tk")
        .select("Set a custom question")
        .should("have.value", "custom");
      cy.get("input")
        .should("have.class", "chakra-input css-1j4w011")
        .type("Testing?");
    });
  });

  describe("Make options and input test text into them", () => {
    it("Get the input field for option 1 and type text into it", () => {
      cy.get("div")
        .should("have.class", "skPoll_container__22UU2")
        .get("form")
        .get("div")
        .should("have.class", "chakra-stack css-d9swal")
        .get("button")
        .should("have.class", "chakra-button css-pazafr")
        .eq(3)
        .click();
      cy.get("input")
        .should("have.class", "chakra-input css-k8y3ie")
        .eq(1)
        .type("Option 1");
    });
    it("Get the input field for option 2 and type text into it", () => {
      cy.get("div")
        .should("have.class", "skPoll_container__22UU2")
        .get("form")
        .get("div")
        .should("have.class", "chakra-stack css-d9swal")
        .get("button")
        .should("have.class", "chakra-button css-pazafr")
        .eq(3)
        .click();
      cy.get("input")
        .should("have.class", "chakra-input css-k8y3ie")
        .eq(3)
        .type("Option 2");
    });
    it("Get the input field for option 3 and type text into it", () => {
      cy.get("div")
        .should("have.class", "skPoll_container__22UU2")
        .get("form")
        .get("div")
        .should("have.class", "chakra-stack css-d9swal")
        .get("button")
        .should("have.class", "chakra-button css-pazafr")
        .eq(3)
        .click();
      cy.get("input")
        .should("have.class", "chakra-input css-k8y3ie")
        .eq(5)
        .type("Option 3");
    });
    it("Make an option 4 and then delete it", () => {
      cy.get("div")
        .should("have.class", "skPoll_container__22UU2")
        .get("form")
        .get("div")
        .should("have.class", "chakra-stack css-d9swal")
        .get("button")
        .should("have.class", "chakra-button css-pazafr")
        .eq(3)
        .click();
      cy.get("div")
        .should("have.class", "skPoll_container__22UU2")
        .get("form")
        .get("div")
        .should("have.class", "chakra-stack css-d9swal")
        .get("button")
        .should("have.class", "chakra-button css-102nuie")
        .eq(3)
        .click();
    });
    it("Select the correct answer", () => {
      cy.get("input")
        .should("have.class", "chakra-input css-k8y3ie")
        .eq(2)
        .click();
    });
    it("Submit the quiz to participant", () => {
      cy.get("button")
        .should("have.class", "chakra-button css-102nuie")
        .contains("Submit")
        .click();
    });
  });
}

export default speakerLiveQuizSession;

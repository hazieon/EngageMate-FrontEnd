function participantQuizSession() {
  describe("Participant Live Quiz session", () => {
    it("Check for the question heading and has correct text", () => {
      cy.get("div")
        .should("have.class", "ptPoll_sessionBox__1iNpr")
        .get("h1")
        .contains("Testing?");
    });

    it("Check for option 1 and contains correct text", () => {
      cy.get("ul")
        .should("have.class", "ptPoll_optionsList__3eCrO")
        .get("li")
        .should("have.class", "ptPoll_option__16rq-")
        .eq(0)
        .contains("Option 1");
    });

    it("Select option 1 as the answer", () => {
      cy.get("ul")
        .should("have.class", "ptPoll_optionsList__3eCrO")
        .get("li")
        .should("have.class", "ptPoll_option__16rq-")
        .eq(0)
        .contains("Option 1")
        .find("button")
        .click();
    });
    it("Submit participant answer", () => {
      cy.get("div")
        .should("have.class", "ptPoll_container__fLWer")
        .get("button")
        .should("have.class", "chakra-button css-1d88tv1")
        .contains("Submit")
        .click();
    });
    it("Check participant answer correct", () => {
      cy.get("main")
        .find("div")
        .should("have.class", "ptPoll_container__fLWer")
        .find("div")
        .should("have.class", "skPollResults_resultsDiv__twIt2")
        .find("div")
        .should("have.class", "chakra-stack css-1ovnguh")
        .find("div")
        .eq(0)
        .should("have.class", "skPollResults_progressDiv__1-Yic")
        .find("div")
        .should("have.class", "css-qe4vho")
        .find("div")
        .should("have.class", "css-tez3s")
        .should("have.css", "background-color", "#38A169");
    });
  });
}

export default participantQuizSession;

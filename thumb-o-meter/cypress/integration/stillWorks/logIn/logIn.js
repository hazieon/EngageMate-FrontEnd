//sign in and getting to feature menu

function logIn(email, password) {
  // describe("Log in app page", () => {
  //   it("Get heading by class name and confirm has 'EngageMate' as the text, get button by class name and confirm has 'Log In' and then clicks the 'Log In' button", () => {
  //     cy.wait(1000);
  //     cy.get("h2")
  //       .should("have.class", "chakra-heading css-zey6tx")
  //       .contains("EngageMate");
  //     cy.get("button")
  //       .should("have.class", "chakra-button css-q6vfdv")
  //       .contains("Log In");
  //     cy.wait(1000);
  //     cy.get("button").should("have.class", "chakra-button css-q6vfdv").click();
  //   });
  // });

  describe("Log in app page", () => {
    it("Get EngageMate logo image tag, tagline confirming text and get button by class name and confirm has 'Log In' and then clicks the 'Log In' button", () => {
      // cy.wait(1000);
      cy.get("img").should("have.class", "login_myImg__2i5yo");
      cy.get("p")
        .should("have.class", "chakra-text login_heading__34g74 css-0")
        .contains("EngageMate");
      cy.get("h2")
        .should("have.class", "subheading_subheading__3iiDQ")
        .contains("Your real time remote learning companion");
      cy.get("div")
        .should("have.class", "chakra-stack css-d9swal")
        .eq(0)
        .find("button")
        .should("have.class", "loginButton_loginButton__105Rd")
        .contains("Log In")
        .click();
    });
  });

  describe("Auth0 log in page", () => {
    it("Get div with the input field for the username by class name and type in username, get div with the input field for the password by class name and type password in and get button by class name and confirm has text 'Log In' and then clicks the 'Log In' button", () => {
      // cy.wait(1000);
      cy.get("div").should(
        "have.class",
        "auth0-lock-input-block auth0-lock-input-email"
      );
      cy.get("div")
        .should(
          "have.class",
          "auth0-lock-input-wrap auth0-lock-input-wrap-with-icon"
        )
        .get("input")
        .should("have.class", "auth0-lock-input")
        .first()
        .type(email);
      // cy.wait(1000);
      cy.get("div").should(
        "have.class",
        "auth0-lock-input-block auth0-lock-input-show-password"
      );
      cy.get("div").should(
        "have.class",
        "auth0-lock-input-block auth0-lock-input-password"
      );
      cy.get("div")
        .should(
          "have.class",
          "auth0-lock-input-wrap auth0-lock-input-wrap-with-icon"
        )
        .get("input")
        .should("have.class", "auth0-lock-input")
        .last()
        .type(password);
      // cy.wait(1000);
      cy.get("button").should("have.class", "auth0-lock-submit").click();
    });
  });
}

export default logIn;

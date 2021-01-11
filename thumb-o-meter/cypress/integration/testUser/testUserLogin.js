describe("login to app", () => {
  it("should show log in page of app", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("login to app", () => {
  it("get heading and confirm has Callback Cats as the text", () => {
    cy.get("h2")
      .should("have.class", "chakra-heading css-zey6tx")
      .contains("Callback Cats");
  });
});

describe("login to app", () => {
  it("get button and confirm has Log In as the text", () => {
    cy.get("button")
      .should("have.class", "chakra-button css-q6vfdv")
      .contains("Log In");
  });
});

// describe("login to app", () => {
//   it("should show log in page of app, grab heading and check if has the text callback cats, grab log in button and check has text log in button", () => {
//     cy.visit("http://localhost:3000");
//     cy.get("h2").should("have.text", "Callback Cats");
//     cy.get("button").should("have.text", "Log In");
//   });
// });

describe("login to app", () => {
  it("should grab login button and click it", () => {
    cy.get("button").should("have.class", "chakra-button css-q6vfdv").click();
  });
});

// describe("login to app", () => {
//   it("should select username input field and fill with username ", () => {
//     cy.get("div").get("input")
//       .should("have.class", "auth0-lock-input")
//       .should("have.id", "1-email")
//       .type("e2e-testing@mydomain.com");
//     // cy.get("input")
//     //   .should("have.class", "auth0-lock-input")
//     //   .type("s#m3R4nd0m-pass");
//   });
// });

describe("login to app", () => {
  it("have div with the input field username in and type in username", () => {
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
      .type("e2e-testing@mydomain.com");
  });
});

describe("login to app", () => {
  it("have div with the input field password in and type password in", () => {
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
      .type("s#m3R4nd0m-pass");
  });
});

describe("login to app", () => {
  it("should grab login button and click it", () => {
    cy.get("button").should("have.class", "auth0-lock-submit").click();
  });
});

// describe("login to app", () => {
//   it("should select password input field and fill with password", () => {
//     cy.get("input")
//       .should("have.class", "auth0-lock-input")
//       .should("have.id", "1-email")
//       .type("e2e-testing@mydomain.com");
//     // cy.get("input")
//     //   .should("have.class", "auth0-lock-input")
//     //   .type("s#m3R4nd0m-pass");
//   });
// });

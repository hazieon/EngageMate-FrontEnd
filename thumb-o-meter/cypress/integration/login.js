// describe("login", () => {
//   it("should successfully log into our app", () => {
//     cy.login()
//       .then((resp) => {
//         return resp.body;
//       })
//       .then((body) => {
//         const { access_token, expires_in, id_token } = body;
//         const auth0State = {
//           nonce: "",
//           state: "some-random-state",
//         };
//         const callbackUrl = `http://localhost:3000/#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
//         cy.visit(callbackUrl, {
//           onBeforeLoad(win) {
//             win.document.cookie =
//               "com.auth0.auth.some-random-state=" + JSON.stringify(auth0State);
//           },
//         });
//       });
//   });
// });

// This test is checking that we can go to the local host page see the correct heading click log in and type in username and password to log into the app. 
// wrap this test in a component function so it an be used in other tests!

describe("login to app", () => {
  it("should successfull log into the app", ()=>{ 
    cy.visit('http://localhost:3000');
    cy.get("#loginHeading").should('have.text', "Callback Cats");
    cy.get("#loginButton").click(); 
    cy.wait(1000); 
    cy.get("#1-email").type("e2e-testing@mydomain.com"); 
    cy.get('input:last').should('have.attr', 'placeholder', 'your password').type("s#m3R4nd0m-pass"); 
    cy.get("button:last").should("have.type", "submit").click(); 
  }), 
} 

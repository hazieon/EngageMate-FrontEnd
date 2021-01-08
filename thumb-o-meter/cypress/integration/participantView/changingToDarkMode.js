/* <div class="css-kzw5fa">
<nav class="navBar_container__16Rem css-q1py9o"></nav>
<button type="button" class="chakra-button css-j47tpi"></button> */

function changingToDarkMode() {
  describe("Changing the view of the app to dark mode", () => {
    it("Get the dark mode button by going through the nav bar and div elements checking them with their class names, and then click the button", () => {
      cy.wait(1500);
      //cy.get("div").should("have.class", "css-kzw5fa");
      //cy.get("nav").should("have.class", "navBar_container__16Rem css-q1py9o");
      cy.get("button")
        .should("have.class", "chakra-button css-j47tpi")
        .click()
        .eq(0);
    });
  });
}

export default changingToDarkMode;

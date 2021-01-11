//needs cleaning and waits removed
function orderOfTest() {
  //opening screen
  describe("Getting to opening screen", () => {
    it("should show callback cats log in page of app", () => {
      cy.visit("http://localhost:3000");
      cy.wait(1500);
    });
  });
  //log in speaker
  describe("Log in app page", () => {
    it("Get heading by class name and confirm has 'Callback Cats' as the text, get button by class name and confirm has 'Log In' and then clicks the 'Log In' button", () => {
      cy.wait(1000);
      cy.get("h2")
        .should("have.class", "chakra-heading css-zey6tx")
        .contains("Callback Cats");
      cy.get("button")
        .should("have.class", "chakra-button css-q6vfdv")
        .contains("Log In");
      cy.wait(1000);
      cy.get("button").should("have.class", "chakra-button css-q6vfdv").click();
    });
  });

  describe("Auth0 log in page", () => {
    it("Get div with the input field for the username by class name and type in username, get div with the input field for the password by class name and type password in and get button by class name and confirm has text 'Log In' and then clicks the 'Log In' button", () => {
      cy.wait(1000);
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
        .type("speakerview@gmail.com");
      cy.wait(1000);
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
        .type("(callbackCats)");
      cy.wait(1000);
      cy.get("button").should("have.class", "auth0-lock-submit").click();
    });
  });
  //check skfmthumb
  describe("Checking feature menu of app for Thumb-o-meter", () => {
    it("Get the thumb-o-meter feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("main");
      cy.get("p")
        .should("have.class", "chakra-text css-0")
        .contains("Thumb-o-meter");
    });
  });
  //sk get to skthumb
  describe("Click the Thumb-O-Meter link on the feature menu", () => {
    it("Get the Thumb-O-Meter link and click the link", () => {
      cy.wait(1500);
      cy.get("main").find("section").eq(0).find("a").click();
    });
  });
  //check for thumbpage
  describe("Checking contents Thumb-O-Meter page", () => {
    it("Get the heading by class name and confirm has 'Thumb-O-Meter' as text", () => {
      cy.wait(1500);
      cy.get("h1")
        .should("have.class", "thumb-o-meter_heading__2W637")
        .contains("Thumb-O-Meter");
    });
  });
  //get question dropdown
  describe("Check for question dropdown", () => {
    it("get question drop down", () => {
      cy.wait(1500);
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(0);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(0);
      cy.get("option").eq(0).contains("Select Question");
      //select custom question and input testing?
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
      cy.wait(1500);
    });
  });

  //get custom timer and type in 50
  describe("Check for timer dropdown", () => {
    it("get timer drop down", () => {
      cy.wait(1500);
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
      cy.wait(1500);
    });
  });

  //get start timer button
  describe("Check for start timer button", () => {
    it("get start timer button", () => {
      cy.wait(1500);
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "skView_buttons__1X2Y_");
      cy.get("button")
        .should("have.class", "chakra-button css-ywjnlx")
        .contains("Start Timer")
        .click();
      cy.wait(1500);
    });
  });

  //logout sk
  describe("Log out of app", () => {
    it("Get the logout button by going through the nav bar and div elements checking them with their class names, confirm has 'Log Out' as text and then click the 'Log Out' button", () => {
      cy.wait(1500);
      // cy.get("div").should("have.class", "css-kzw5fa");
      cy.get("nav").should("have.class", "navBar_container__16Rem css-q1py9o");
      cy.get("div").should("have.class", "navBar_box__2huli css-ozv6cb");
      cy.get("div").should("have.class", "navBar_navigation__2KIo9 css-k008qs");
      cy.get("button")
        .should("have.class", "chakra-button logout_btn__1eIMF css-1sqhvct")
        .contains("Log Out")
        .click();
    });
  });

  //login pt
  describe("Log in app page", () => {
    it("Get heading by class name and confirm has 'Callback Cats' as the text, get button by class name and confirm has 'Log In' and then clicks the 'Log In' button", () => {
      cy.wait(1000);
      cy.get("h2")
        .should("have.class", "chakra-heading css-zey6tx")
        .contains("Callback Cats");
      cy.get("button")
        .should("have.class", "chakra-button css-q6vfdv")
        .contains("Log In");
      cy.wait(1000);
      cy.get("button").should("have.class", "chakra-button css-q6vfdv").click();
    });
  });

  describe("Auth0 log in page", () => {
    it("Get div with the input field for the username by class name and type in username, get div with the input field for the password by class name and type password in and get button by class name and confirm has text 'Log In' and then clicks the 'Log In' button", () => {
      cy.wait(1000);
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
        .type("participantview@gmail.com");
      cy.wait(1000);
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
        .type("(callbackCats)");
      cy.wait(1000);
      cy.get("button").should("have.class", "auth0-lock-submit").click();
    });
  });

  //pt featuremenu
  describe("Checking feature menu of app for Thumb-o-meter", () => {
    it("Get the thumb-o-meter feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("main");
      cy.get("p")
        .should("have.class", "chakra-text css-0")
        .contains("Thumb-o-meter");
    });
  });
  //get pt thumb
  describe("Click the Thumb-O-Meter link on the feature menu", () => {
    it("Get the Thumb-O-Meter link and click the link", () => {
      cy.wait(1500);
      cy.get("main").find("section").eq(0).find("a").click();
    });
  });
  //check for thumbpage
  describe("Checking contents Thumb-O-Meter page", () => {
    it("Get the heading by class name and confirm has 'Thumb-O-Meter' as text", () => {
      cy.wait(1500);
      cy.get("h1")
        .should("have.class", "thumb-o-meter_heading__2W637")
        .contains("Thumb-O-Meter");
    });
  });
  //get pt slider
  describe("Checks for slider", () => {
    it("Checks for a slider", () => {
      cy.wait(1500);
      cy.get("div")
        .should("have.class", "css-gmuwbf")
        .get("div")
        .should("have.class", "ptView_container__2x3LO")
        .get("div")
        .should("have.class", "chakra-slider css-1e3e5yf")
        .get("div")
        .should("have.class", "chakra-slider__track css-cpqk08")
        .get("div")
        .should("have.class", "chakra-slider__thumb css-1qjoqa1");
      //input value
      //   cy.get("div")
      //     .should("have.class", "css-gmuwbf")
      //     .get("div")
      //     .should("have.class", "ptView_container__2x3LO")
      //     .get("div")
      //     .should("have.class", "chakra-slider css-1e3e5yf")
      //     .get("input[type = hidden]")
      //     .should("have.value", "30");
      //
      //
      //move slider
      cy.wait(1500);
      cy.get("div")
        .should("have.class", "css-gmuwbf")
        .get("div")
        .should("have.class", "ptView_container__2x3LO")
        .get("div")
        .should("have.class", "chakra-slider css-1e3e5yf")
        .eq(0)
        .wait(1000)
        .click(600, 590)
        .wait(1000);
    });
  });
  //log out pt
  describe("Log out of app", () => {
    it("Get the logout button by going through the nav bar and div elements checking them with their class names, confirm has 'Log Out' as text and then click the 'Log Out' button", () => {
      cy.wait(1500);
      // cy.get("div").should("have.class", "css-kzw5fa");
      cy.get("nav").should("have.class", "navBar_container__16Rem css-q1py9o");
      cy.get("div").should("have.class", "navBar_box__2huli css-ozv6cb");
      cy.get("div").should("have.class", "navBar_navigation__2KIo9 css-k008qs");
      cy.get("button")
        .should("have.class", "chakra-button logout_btn__1eIMF css-1sqhvct")
        .contains("Log Out")
        .click();
    });
  });
  //log in speaker
  describe("Log in app page", () => {
    it("Get heading by class name and confirm has 'Callback Cats' as the text, get button by class name and confirm has 'Log In' and then clicks the 'Log In' button", () => {
      cy.wait(1000);
      cy.get("h2")
        .should("have.class", "chakra-heading css-zey6tx")
        .contains("Callback Cats");
      cy.get("button")
        .should("have.class", "chakra-button css-q6vfdv")
        .contains("Log In");
      cy.wait(1000);
      cy.get("button").should("have.class", "chakra-button css-q6vfdv").click();
    });
  });

  describe("Auth0 log in page", () => {
    it("Get div with the input field for the username by class name and type in username, get div with the input field for the password by class name and type password in and get button by class name and confirm has text 'Log In' and then clicks the 'Log In' button", () => {
      cy.wait(1000);
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
        .type("speakerview@gmail.com");
      cy.wait(1000);
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
        .type("(callbackCats)");
      cy.wait(1000);
      cy.get("button").should("have.class", "auth0-lock-submit").click();
    });
  });
  //check skfmthumb
  describe("Checking feature menu of app for Thumb-o-meter", () => {
    it("Get the thumb-o-meter feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("main");
      cy.get("p")
        .should("have.class", "chakra-text css-0")
        .contains("Thumb-o-meter");
    });
  });
  //sk get to skthumb
  describe("Click the Thumb-O-Meter link on the feature menu", () => {
    it("Get the Thumb-O-Meter link and click the link", () => {
      cy.wait(1500);
      cy.get("main").find("section").eq(0).find("a").click();
    });
  });
  //get stop timer button
  describe("Check for stop timer button", () => {
    it("get stop timer button", () => {
      cy.wait(1500);
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "skView_buttons__1X2Y_");

      cy.get("button")
        .should("have.class", "chakra-button css-mdlog5")
        .contains("Stop Timer")
        .click();
    });
  });
  //log out sk
  describe("Log out of app", () => {
    it("Get the logout button by going through the nav bar and div elements checking them with their class names, confirm has 'Log Out' as text and then click the 'Log Out' button", () => {
      cy.wait(1500);
      // cy.get("div").should("have.class", "css-kzw5fa");
      cy.get("nav").should("have.class", "navBar_container__16Rem css-q1py9o");
      cy.get("div").should("have.class", "navBar_box__2huli css-ozv6cb");
      cy.get("div").should("have.class", "navBar_navigation__2KIo9 css-k008qs");
      cy.get("button")
        .should("have.class", "chakra-button logout_btn__1eIMF css-1sqhvct")
        .contains("Log Out")
        .click();
    });
  });
}

orderOfTest();

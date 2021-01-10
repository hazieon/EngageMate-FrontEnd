/*
opening screen
login in participant 
check ptview feature menu
click pt thumb page
check pt thumb page(slider)
pt feature menu
pt log out 
opening screen?
login speaker
check skview feature menu
click sk thumb
check sk thumb page (question, timer, start timer button, stop timer button)
choose question
choose timer 
click start timer button (check if timer moving timer > 0)
sk feature menu
sk log out 
opening screen?
pt login
pt thumb page 
pt move slider(check if percentage change > 0)
pt log out
opening screen
sk login
sk thumb page 
sk check if value changed > 0
sk stop timer?
*/

function OpeningScreen() {
  describe("Getting to opening screen", () => {
    it("should show callback cats log in page of app", () => {
      cy.visit("http://localhost:3000");
      cy.wait(1500);
    });
  });
}

function LogIn(email, password) {
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
        .type(email);
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
        .type(password);
      cy.wait(1000);
      cy.get("button").should("have.class", "auth0-lock-submit").click();
    });
  });
}

function CheckingForThumbOMeterFeature() {
  describe("Checking feature menu of app for Thumb-o-meter", () => {
    it("Get the thumb-o-meter feature by going through the elements and class names", () => {
      cy.wait(1500);
      cy.get("main");
      cy.get("p")
        .should("have.class", "chakra-text css-0")
        .contains("Thumb-o-meter");
    });
  });
}

function ptThumbOMeter() {
  describe("Click the Thumb-O-Meter link on the feature menu", () => {
    it("Get the Thumb-O-Meter link and click the link", () => {
      cy.wait(1500);
      cy.get("main").find("section").eq(0).find("a").click();
    });
  });

  //check contents of page (and functionality?)
  //checks for heading
  describe("Checking contents Thumb-O-Meter page", () => {
    it("Get the heading by class name and confirm has 'Thumb-O-Meter' as text", () => {
      cy.wait(1500);
      cy.get("h1")
        .should("have.class", "thumb-o-meter_heading__2W637")
        .contains("Thumb-O-Meter");
    });
  });

  describe("Checks for question heading", () => {
    it("Confirm has 'Waiting session start' as text", () => {
      cy.get("div")
        .should("have.class", "css-gmuwbf")
        .get("div")
        .should("have.class", "ptView_container__2x3LO")
        .get("h1")
        .contains("Waiting session start");
    });
  });

  describe("Checks for slider", () => {
    it("Checks for a slider", () => {
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
      cy.get("div")
        .should("have.class", "css-gmuwbf")
        .get("div")
        .should("have.class", "ptView_container__2x3LO")
        .get("div")
        .should("have.class", "chakra-slider css-1e3e5yf")
        .get("input[type = hidden]")
        .should("have.value", "30");
    });
  });
}

function movePtViewSlide() {
  describe("Click the Thumb-O-Meter link on the feature menu", () => {
    it("Get the Thumb-O-Meter link and click the link", () => {
      cy.wait(1500);
      cy.get("main").find("section").eq(0).find("a").click();
    });
  });

  describe("Checks for slider", () => {
    it("Checks for a slider", () => {
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
      cy.get("div")
        .should("have.class", "css-gmuwbf")
        .get("div")
        .should("have.class", "ptView_container__2x3LO")
        .get("div")
        .should("have.class", "chakra-slider css-1e3e5yf")
        .get("input[type = hidden]");
      //trying to change it
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
      // .get("input[type = hidden]")
      // .click()
      // .invoke("val", "70");
      //.trigger("mouseup");
      //.trigger("change");
      // .first()
      // .trigger("mousedown")
      // .trigger("mousemove", "200", "200");

      // .get("input")
      // .as("hidden")
      // .invoke("val", "70")
      // .trigger("change");
    });
  });
}

function skThumbOMeter() {
  describe("Click the Thumb-O-Meter link on the feature menu", () => {
    it("Get the Thumb-O-Meter link and click the link", () => {
      cy.wait(1500);
      cy.get("main").find("section").eq(0).find("a").click();
    });
  });

  //check contents of page (and functionality?)
  //checks for heading
  describe("Checking contents Thumb-O-Meter page", () => {
    it("Get the heading by class name and confirm has 'Thumb-O-Meter' as text", () => {
      cy.wait(1500);
      cy.get("h1")
        .should("have.class", "thumb-o-meter_heading__2W637")
        .contains("Thumb-O-Meter");
    });
  });

  describe("Check for question dropdown", () => {
    it("get question drop down", () => {
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div")
        .should("have.class", "chakra-select__wrapper css-42b2qy")
        .eq(0);
      cy.get("select")
        .should("have.class", "chakra-select skView_select__39swe css-ts6fv")
        .eq(0);
      cy.get("option").eq(0).contains("Select Question");
      //trying to select question
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
    });
  });

  describe("Check for timer dropdown", () => {
    it("get timer drop down", () => {
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
        .type(50);
    });
  });

  describe("Check for start timer button", () => {
    it("get start timer button", () => {
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "skView_buttons__1X2Y_");
      cy.get("button")
        .should("have.class", "chakra-button css-ywjnlx")
        .contains("Start Timer");
    });
  });

  describe("Check for stop timer button", () => {
    it("get stop timer button", () => {
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "skView_buttons__1X2Y_");

      cy.get("button")
        .should("have.class", "chakra-button css-mdlog5")
        .contains("Stop Timer");
    });
  });

  describe("Click for start timer button", () => {
    it("get start timer button and click", () => {
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "skView_buttons__1X2Y_");
      cy.get("button")
        .should("have.class", "chakra-button css-ywjnlx")
        .contains("Start Timer")
        .click();
    });
  });
}

function checkingSkViewValue() {
  describe("Checking value more than 0", () => {
    it("check value more than 0", () => {
      cy.get("main").find("section").eq(0).find("a").click();
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "css-gmuwbf");
      cy.get("div").should("have.class", "skView_container__8oHCA");
      cy.get("div").should("have.class", "skView_buttons__1X2Y_");

      cy.get("button")
        .should("have.class", "chakra-button css-mdlog5")
        .contains("Stop Timer")
        .click();
      cy.wait(2000);
      cy.get("div")
        .should("have.class", "skView_container__8oHCA")
        .get("div")
        .should("have.class", "skView_valueInformation__1CRnI")
        .get("h3")
        .contains(70);
    });
  });
}

function LogOut() {
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

OpeningScreen();
// LogIn("participantview@gmail.com", "(callbackCats)");
// CheckingForThumbOMeterFeature();
// ptThumbOMeter();
// LogOut();
LogIn("speakerview@gmail.com", "(callbackCats)");
CheckingForThumbOMeterFeature();
skThumbOMeter();
LogOut();
//OpeningScreen();
LogIn("participantview@gmail.com", "(callbackCats)");
CheckingForThumbOMeterFeature();
//ptThumbOMeter();
movePtViewSlide();
LogOut();
LogIn("speakerview@gmail.com", "(callbackCats)");
CheckingForThumbOMeterFeature();
skThumbOMeter();
checkingSkViewValue();

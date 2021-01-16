import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import checkingForThumbOMeterFeature from "./featureMenu/checkingThumb/checkThumb";
import checkingForHandFeature from "./featureMenu/checkingHand/checkHand";
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
import checkingForDjDeckFeature from "./featureMenu/checkingDj/checkDj";
import speakerThumbSession from "./speaker/speakerThumb/speakerThumb";
import participantThumbSession from "./participant/participantThumb/participantThumb";
import speakerStopThumbSession from "./speaker/speakerThumb/speakerThumbSessionStop";
import backButton from "./backButton/backButton";
import darkMode from "./darkMode/darkMode";
import lightMode from "./lightMode/lightMode";
import logOut from "./logOut/logOut";

//
// function viewport() {
//   describe("change page size", () => {
//     it("change screen size", () => {
//       cy.wait(1000);
//       cy.viewport("macbook-15");
//     });
//   });
// }
//viewport();
openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
//
darkMode();
//lightMode();
//darkMode();
checkingForThumbOMeterFeature();
speakerThumbSession();
logOut();
logIn("participantview@gmail.com", "(callbackCats)");
darkMode();
//lightMode();
//darkMode();
checkingForThumbOMeterFeature();
participantThumbSession();
logOut();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
checkingForThumbOMeterFeature();
speakerStopThumbSession();
// backButton();
// checkingForHandFeature();
// backButton();
// checkingForQuizFeature();
// backButton();
// checkingForDjDeckFeature();
// backButton();
logOut();

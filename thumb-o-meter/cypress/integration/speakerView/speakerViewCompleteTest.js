import openingScreen from "./openingScreen";
import logIn from "./logIn";
import changingBetweenDarkAndLightMode from "./darkLightMode";
import checkingFeatureMenu from "./checkingFeatureMenu";
import thumbOMeter from "./checkThumbOMeter";
import raiseAHand from "./checkRaiseHand";
import liveQuiz from "./checkLiveQuiz";
import dJDeck from "./checkDJDeck";
import backButton from "./backButton";
import logOut from "./logOut";

function speakerViewTest() {
  openingScreen();
  logIn("speakerview@gmail.com", "(callbackCats)");
  changingBetweenDarkAndLightMode();
  checkingFeatureMenu();
  thumbOMeter();
  backButton();
  raiseAHand();
  backButton();
  liveQuiz();
  backButton();
  dJDeck();
  backButton();
  logOut();
}

//speakerViewTest();

export default speakerViewTest;

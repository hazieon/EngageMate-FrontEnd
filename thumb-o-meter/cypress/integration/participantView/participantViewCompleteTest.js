import openingScreen from "./openingScreen";
import logIn from "./logIn";
import checkingFeatureMenu from "./checkingFeatureMenu";
import thumbOMeter from "./checkThumbOMeter";
import raiseAHand from "./checkRaiseHand";
import liveQuiz from "./checkLiveQuiz";
import backButton from "./backButton";
import logOut from "./logOut";

function participantViewTest() {
  openingScreen();
  logIn("participantview@gmail.com", "(callbackCats)");
  checkingFeatureMenu();
  thumbOMeter();
  backButton();
  raiseAHand();
  backButton();
  liveQuiz();
  backButton();
  logOut();
}

//participantViewTest();

export default participantViewTest;

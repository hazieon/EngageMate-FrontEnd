import OpeningScreen from "./openingScreen";
import LogIn from "./logIn";
import CheckingFeatureMenu from "./checkingFeatureMenu";
import ThumbOMeter from "./checkThumbOMeter";
import RaiseAHand from "./checkRaiseHand";
import LiveQuiz from "./checkLiveQuiz";
import DJDeck from "./checkDJDeck";
import BackButton from "./backButton";
import LogOut from "./logOut";

function SpeakerViewTest() {
  //OpeningScreen();
  LogIn("speakerview@gmail.com", "(callbackCats)");
  CheckingFeatureMenu();
  // ThumbOMeter();
  // BackButton();
  // RaiseAHand();
  // BackButton();
  // LiveQuiz();
  // BackButton();
  DJDeck();
  BackButton();
  CheckingFeatureMenu();
  LogOut();
}
OpeningScreen();
SpeakerViewTest();

export default SpeakerViewTest;

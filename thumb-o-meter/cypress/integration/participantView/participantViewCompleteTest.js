import OpeningScreen from "./openingScreen";
import LogIn from "./logIn";
import CheckingFeatureMenu from "./checkingFeatureMenu";
import ThumbOMeter from "./checkThumbOMeter";
import RaiseAHand from "./checkRaiseHand";
import LiveQuiz from "./checkLiveQuiz";
import BackButton from "./backButton";
import LogOut from "./logOut";

function ParticipantViewTest() {
  OpeningScreen();
  LogIn("participantview@gmail.com", "(callbackCats)");
  CheckingFeatureMenu();
  ThumbOMeter();
  BackButton();
  RaiseAHand();
  BackButton();
  LiveQuiz();
  BackButton();
  LogOut();
}

export default ParticipantViewTest;

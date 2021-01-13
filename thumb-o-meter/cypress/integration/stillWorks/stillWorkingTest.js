import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import checkingForThumbOMeterFeature from "./featureMenu/checkingThumb/checkThumb";
import checkingForHandFeature from "./featureMenu/checkingHand/checkHand";
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
import checkingForDjDeckFeature from "./featureMenu/checkingDj/checkDj";
import speakerThumbSession from "./speaker/speakerThumb/speakerThumb";
import backButton from "./backButton/backButton";
import logOut from "./logOut/logOut";
import changingBetweenDarkAndLightMode from "./darkLightMode";
//
//
openingScreen();
//logIn("speakerview@gmail.com", "(callbackCats)");
logIn("participantview@gmail.com", "(callbackCats)");
//changingBetweenDarkAndLightMode();
checkingForThumbOMeterFeature();
//speakerThumbSession();
//backButton();
//checkingForHandFeature();
// backButton();
//checkingForQuizFeature();
// backButton();
// checkingForDjDeckFeature();
// backButton();
//logOut();

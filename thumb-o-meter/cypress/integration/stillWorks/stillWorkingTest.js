import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import checkingForThumbOMeterFeature from "./featureMenu/checkingThumb/checkThumb";

import checkingForHandFeature from "./featureMenu/checkingHand/checkHand";
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
import speakerThumbSession from "./speakerThumb/speakerThumb";
import backButton from "./backButton/backButton";
import logOut from "./logOut/logOut";

openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
checkingForThumbOMeterFeature();
speakerThumbSession();
backButton();
// checkingForHandFeature();
// checkingForQuizFeature();
//logOut();

//logIn("participantview@gmail", "(callbackCats)")

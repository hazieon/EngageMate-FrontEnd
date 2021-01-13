import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import checkingForThumbOMeterFeature from "./featureMenu/checkingThumb/checkThumb";

import checkingForHandFeature from "./featureMenu/checkingHand/checkHand";
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
import speakerThumbSession from "./speaker/speakerThumb/speakerThumb";
import backButton from "./backButton/backButton";
import logOut from "./logOut/logOut";
import changingBetweenDarkAndLightMode from "./darkLightMode";
openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
changingBetweenDarkAndLightMode();
//checkingForThumbOMeterFeature();
// speakerThumbSession();
// backButton();
// checkingForHandFeature();
// checkingForQuizFeature();
//logOut();

//logIn("participantview@gmail", "(callbackCats)")

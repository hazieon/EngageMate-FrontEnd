/*
openingscreen
login participant
check feature menu
click raise a hand
check raise a hand
find input
type in input
find image 
click image
logout 
login speaker
check feature menu
click raise a hand
check raise a hand
find list 
find topic text
check topic text
logout
maybe login as ppt and check that participant hand down???
*/
import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import darkMode from "./darkMode/darkMode";
import checkingForHandFeature from "./featureMenu/checkingHand/checkHand";
import participantRaiseHandSession from "./participant/participantHand/raiseAHandSession";
import speakerRaiseHandPreHand from "./speaker/speakerHand/raiseAHandSessionPreHand";
import speakerRaiseHandAfterHand from "./speaker/speakerHand/raiseAHandSessionAfterHand";
import logOut from "./logOut/logOut";

openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
speakerRaiseHandPreHand();
logOut();
logIn("participantview@gmail.com", "(callbackCats)");
darkMode();
checkingForHandFeature();
participantRaiseHandSession();
logOut();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
speakerRaiseHandAfterHand();
logOut();

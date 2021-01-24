import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import darkMode from "./darkMode/darkMode";
import checkingForDjDeck from "./featureMenu/checkingDj/checkDj";
import speakerDjDeck from "./speaker/speakerDj/speakerDjDeck";
import logOut from "./logOut/logOut";

openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
checkingForDjDeck();
speakerDjDeck();
logOut();

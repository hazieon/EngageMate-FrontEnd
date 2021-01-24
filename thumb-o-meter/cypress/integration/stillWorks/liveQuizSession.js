import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import darkMode from "./darkMode/darkMode";
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
import speakerLiveQuizSession from "./speaker/speakerQuiz/liveQuizSpeakerSession";
import participantQuizSession from "./participant/participantQuiz/participantQuizSession";
import logOut from "./logOut/logOut";

openingScreen();
logIn("speakerview@gmail.com", "(callbackCats)");
darkMode();
checkingForQuizFeature();
speakerLiveQuizSession();
logOut();
logIn("participantview@gmail.com", "(callbackCats)");
darkMode();
checkingForQuizFeature();
participantQuizSession();
logOut();

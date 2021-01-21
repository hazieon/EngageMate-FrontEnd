//opening screen
//log in speakerview
//dark mode
//check feature menu
//click quiz
//check quiz page
//select custom question
//type in input field
//click to add option
//type in option 1
//click add option
//type in option 2
//click add option
//type in option 3
//click add to option
//click remove option
//select correct answer
//click submit
//log out
//log in participant
//dark mode
//check feature menu
//click live quiz
//check live quiz page
//find question confirm has correct text
//find option(s) confirm has correct text
//click select on an option
//click submit
//find result check 1
//log out

import openingScreen from "./openingScreen/openingScreen";
import logIn from "./logIn/logIn";
import darkMode from "./darkMode/darkMode";
import checkingForQuizFeature from "./featureMenu/checkingQuiz/checkQuiz";
import speakerLiveQuizSession from "./speaker/speakerPoll/liveQuizSpeakerSession";
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

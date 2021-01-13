import {
  FaQuestionCircle,
  FaMusic,
  FaHandPaper,
  FaThumbsUp,
} from "react-icons/fa";

const features = [
  {
    alt: "thumbometer",
    src: "/thumb.png",
    link: "/thumb",
    icon: { FaThumbsUp },
    heading: "Thumbometer",
    subheading: "Hows it going?",
    myClass: "myIcon thumb",
    id: "theThumb",
  },
  {
    alt: "raisehand",
    src: "/raisehand.png",
    link: "/raisehand",
    icon: { FaHandPaper },
    heading: "Raise a Hand",
    myClass: " myIcon hand",
    id: "theHand",
  },

  {
    alt: "livequiz",
    src: "/quizzical.png",
    link: "/quiz",
    icon: { FaQuestionCircle },
    heading: "Live Quiz",
    myClass: "myIcon quiz",
    id: "theQuiz",
  },
];

const coachFeatures = [
  {
    alt: "thumbometer",
    src: "/thumb.png",
    link: "/thumb",
    icon: { FaThumbsUp },
    heading: "Thumbometer",
    subheading: "Hows it going?",
    myClass: "myIcon thumb",
    id: "theThumb",
  },
  {
    alt: "raisehand",
    src: "/raisehand.png",
    link: "/raisehand",
    icon: { FaHandPaper },
    heading: "Raise a Hand",
    myClass: "myIcon hand",
    id: "theHand",
  },

  {
    alt: "livequiz",
    src: "/quizzical.png",
    link: "/quiz",
    icon: { FaQuestionCircle },
    heading: "Live Quiz",
    myClass: "myIcon quiz",
    id: "theQuiz",
  },
  {
    alt: "djDeck",
    src: "/music.png",
    link: "/deck",
    icon: { FaMusic },
    heading: "DJ Deck",
    myClass: "myIcon deck",
    id: "theDeck",
  },
];

export { features, coachFeatures };

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
    heading: "Thumb-o-meter",
    subheading: "Hows it going?",
    myClass: "myIcon thumb",
  },
  {
    alt: "raisehand",
    src: "/raisehand.png",
    link: "/raisehand",
    icon: { FaHandPaper },
    heading: "Raise a Hand",
    myClass: "hand",
  },

  {
    alt: "livequiz",
    src: "/quizzical.png",
    link: "/quiz",
    icon: { FaQuestionCircle },
    heading: "Live Quiz",
    myClass: "myIcon quiz",
  },
];

const coachFeatures = [
  {
    alt: "thumbometer",
    src: "/thumb.png",
    link: "/thumb",
    icon: { FaThumbsUp },
    heading: "Thumb-o-meter",
    subheading: "Hows it going?",
    myClass: "myIcon thumb",
  },
  {
    alt: "raisehand",
    src: "/raisehand.png",
    link: "/raisehand",
    icon: { FaHandPaper },
    heading: "Raise a Hand",
    myClass: "myIcon hand",
  },

  {
    alt: "livequiz",
    src: "/quizzical.png",
    link: "/quiz",
    icon: { FaQuestionCircle },
    heading: "Live Quiz",
    myClass: "myIcon quiz",
  },
  {
    alt: "djDeck",
    src: "/music.png",
    link: "/deck",
    icon: { FaMusic },
    heading: "DJ Deck",
    myClass: "myIcon deck",
  },
];

export { features, coachFeatures };

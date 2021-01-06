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
  },
  {
    alt: "raisehand",
    src: "/raisehand.png",
    link: "/raisehand",
    icon: { FaHandPaper },
    heading: "Raise a Hand",
  },

  {
    alt: "livequiz",
    src: "/quizzical.png",
    link: "/quiz",
    icon: { FaQuestionCircle },
    heading: "Live Quiz",
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
  },
  {
    alt: "raisehand",
    src: "/raisehand.png",
    link: "/raisehand",
    icon: { FaHandPaper },
    heading: "Raise a Hand",
  },

  {
    alt: "livequiz",
    src: "/quizzical.png",
    link: "/quiz",
    icon: { FaQuestionCircle },
    heading: "Live Quiz",
  },
  {
    alt: "djDeck",
    src: "/music.png",
    link: "/deck",
    icon: { FaMusic },
    heading: "DJ Deck",
  },
];

export { features, coachFeatures };

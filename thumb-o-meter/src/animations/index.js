export const animationOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const transistion = {
  duration: 5,
};

export const animationTwo = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    transistion: {
      duration: 5,
    },
  },
  out: {
    opacity: 0,
    y: "-100vh",
  },
};

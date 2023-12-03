export const zoomOut = (delay) => {
  return {
    hidden: {
      transform: "scale(0.8)",
      opacity: 0,
    },
    show: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        //duration: 0.3, // Adjust the duration as needed
        type: "tween",
        duration: 0.3,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

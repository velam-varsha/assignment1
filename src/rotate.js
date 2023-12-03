export const rotate = (delay) => {
  return {
    hidden: {
      opacity: 0,
      rotate: 180, // Initial rotation
    },
    show: {
      opacity: 1,

      rotate: 360, // Rotate 360 degrees
      transition: {
        type: "tween",
        duration: 0.2, // Adjust the duration as needed
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

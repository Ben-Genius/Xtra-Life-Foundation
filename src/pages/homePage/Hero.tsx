// import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // More pronounced animation variants
  const textAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  const imageAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1.5,
        ease: 'easeOut',
      },
    },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div className="overflow-hidden">
      <motion.div
        className="background bg-cover give overlay relative text-white max-w-full h-[17rem] sm:h-screen bg-center bg-no-repeat "
        initial="hidden"
        animate="visible"
        variants={imageAnimation}
      >
        <div className="p-3 md:p-5 w-full mb-3 flex flex-col items-center h-full justify-center relative">
          <motion.div
            className="p-3 md:p-5 w-full mb-3 flex flex-col items-start h-full justify-center"
            initial="hidden"
            animate="visible"
            variants={textAnimation}
          >
            <h3 className="font-serif">We are ready to help them</h3>
            <h1 className="mt-3 md:mt-10 text-2xl md:text-6xl font-bold max-w-xs md:max-w-md lg:max-w-3xl lg:text-[4rem]">
              You can change their lifestyle
            </h1>
            <motion.button
              className="bg-blue-400 mt-4 sm:mt-8 px-8 cursor-pointer hover:bg-blue-600 py-2 text-sm text-center rounded-[1.2rem]"
              initial="hidden"
              animate="visible"
              variants={buttonAnimation}
            >
              Read More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

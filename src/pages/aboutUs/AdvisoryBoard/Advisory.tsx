import { motion } from "framer-motion";
import AdvisoryCard from "./AdvisoryCard";
import { advisory } from "../../../data/data";

const Advisory = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div className="overflow-hidden" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div
        className="bg-cover give overlay relative text-white max-w-full h-[17rem] sm:h-screen  bg-center bg-no-repeat background"
        variants={itemVariants}
      >
        <div className="p-3 md:p-5 w-full mb-3 flex flex-col items-center h-full justify-center relative">
          <motion.h1
            className="font-bold sm:max-w-full text-4xl sm:6xl text-center font-sans"
            variants={itemVariants}
          >
            FOR THE FUTURE GHANA ADVISORY BOARD 
          </motion.h1>
        </div>
      </motion.div>

      <motion.section className="max-w-full sm:max-w-[94%] mx-auto" variants={itemVariants}>
        <motion.div className="p-10 bg-blue-500 mt-16" variants={itemVariants}>
          <h1 className="font-bold text-white text-xl sm:text-2xl md:text-4xl"> XTF ADVISORY BOARD </h1>
          <p className="text-md text-white mt-9">
            Duis deserunt sunt ex esse consequat aute qui.Irure pariatur enim adipisicing tempor.
            Aute dolor sint aute aliquip <b className="text-green-500">reprehenderit proident consectetur ullamco aliquip </b>laborum officia commodo consequat.
            Aute consectetur deserunt consectetur tempor nostrud magna.Esse duis anim non excepteur dolor nostrud reprehenderit ipsum nostrud exercitation ea pariatur deserunt incididunt.Fugiat incididunt sunt tempor ex sint sint cupidatat nulla reprehenderit aliqua sit qui.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 w-full gap-4 mt-12" variants={itemVariants}>
          {advisory.map((member, index) => (
            <AdvisoryCard 
                key={index} 
                image={member.image} 
                name={member.name} 
                position={member.position} 
            />
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  )
}

export default Advisory;

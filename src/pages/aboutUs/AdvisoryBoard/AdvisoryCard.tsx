import { motion } from "framer-motion";

interface AdvisoryProps {
  image: string;
  name: string;
  position: string;
}

const AdvisoryCard: React.FC<AdvisoryProps> = ({name, image, position}) => {

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const textVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div className="border p-2 shadow mt-6" initial="hidden" animate="visible">
      <motion.img 
        src={image} 
        alt="advisor" 
        className="h-[24rem] object-cover w-full  rounded" 
        variants={imageVariants}
      />
      <motion.div className="bg-gray-500 text-white mt-4 p-2" variants={textVariants}>
        <center>{name}</center>
        <center><b>{position}</b></center>
      </motion.div>
    </motion.div>
  )
}

export default AdvisoryCard;

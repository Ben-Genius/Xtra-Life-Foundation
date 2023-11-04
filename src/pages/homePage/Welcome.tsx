import { motion } from 'framer-motion';
import WelCard from '../../assets/welCard.jpeg';
const Welcome = () => {
  return (
    <motion.div
      className='mx-auto md:flex items-center w-[90%] justify-center mt-32 gap-10'
      initial={{ opacity: 0 }}  // Initial state (invisible)
      animate={{ opacity: 1 }}  // Animated state (fade in)
      transition={{ duration: 1 }}  // Transition settings
    >
      <motion.div
        className='bg-red-300 max-w-lg p-4 mb-10'
        initial={{ opacity: 0 }}  // Initial state (invisible)
        animate={{ opacity: 1 }}  // Animated state (fade in)
        transition={{ duration: 1, delay: 0.5 }}  // Transition settings
      >
        <center className='text-3xl font-bold py-3'>
          Welcome To The Foundation of Ghanaian Youth
        </center>
        <p className='md:p-4 text-sm leading-loose sm:pb-0'>
       Eu qui sunt ea commodo mollit tempor Lorem aliquip cupidatat.Sit duis pariatur duis nisi incididunt cupidatat duis cillum esse occaecat mollit aliqua.
       Sint eu aliquip et excepteur nisi enim tempor nostrud dolore.Exercitation esse proident velit anim aliqua cupidatat amet minim anim duis enim.
       Voluptate labore ex laborum aute id ut velit.Esse eiusmod laboris in incididunt adipisicing voluptate elit.
       Consectetur sint nulla dolor eiusmod cupidatat eu nisi pariatur excepteur laboris pariatur.Fugiat aute nisi ipsum ullamco laboris cupidatat velit.
         </p>
      </motion.div>
      <motion.img
        src={WelCard}
        alt="Card Image"
        width={700}
        className='object-contain mt-'
        initial={{ opacity: 0 }}  // Initial state (invisible)
        animate={{ opacity: 1 }}  // Animated state (fade in)
        transition={{ duration: 1, delay: 1 }}  // Transition settings
      />
    </motion.div>
  );
};

export default Welcome;

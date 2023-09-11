import Logo from "../assets/logo.png";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion, Variants } from "framer-motion";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <header  className="relative">
    <motion.div initial={false} animate={isOpen ? "open" : "closed"}  className="sticky top-0 z-50 ">
      <motion.nav className="flex items-center justify-between mr-10 ">
        <motion.img animate={{ rotate: 90,  transition: { duration: 2}, }}   initial={{ rotate:-20, }}
   whileInView={{ rotate: 0,  transition: { duration: 1 }, }} 

 whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }} src={Logo} alt="website logo" width="200rem" className="logo cursor-pointer" />
        <motion.ul
          animate={{ x: 0, y: 2 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="sm:flex xs:hidden items-center sm:gap-4 sm:text-sm lg:gap-10 gap-5 lg:text-[0.95rem] whitespace-nowrap justify-between"
        >
          <motion.li
            animate={{ y: 40, opacity:1}}
            transition={{ ease: "easeOut", duration: 2 }}
            className="-mt-20 text-blue-400 hover:text-red-400 transition-colors duration-300 cursor-pointer"
          >
            Home
          </motion.li>
          <motion.li
            animate={{ y: -40 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="text-blue-400  mt-20  hover:text-red-400 transition-colors duration-300 cursor-pointer"
          >
            About Us
          </motion.li>
          <motion.li
            animate={{ y: 40 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="text-blue-400  hover:text-red-400 -mt-20 transition-colors duration-300 cursor-pointer"
          >
            Projects
          </motion.li>
          <motion.li
            animate={{ y: -40 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="text-blue-400 mt-20  hover:text-red-400 transition-colors duration-300 cursor-pointer"
          >
            Blog
          </motion.li>
          <motion.li
            animate={{ y: 40 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="text-blue-400 hover:text-red-400 -mt-20 transition-colors duration-300 cursor-pointer"
          >
            Contact
          </motion.li>
          <motion.li
            animate={{ y: 40 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="text-blue-400 hover:text-red-400 -mt-20 transition-colors duration-300 cursor-pointer"
          >
            FAQs
          </motion.li>
          <motion.li
            animate={{ y: -40 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="text-blue-400 hover:text-red-400 transition-colors duration-300  mt-20 cursor-pointer"
          >
            Donate Now
          </motion.li>
          <motion.li
            animate={{ y: 40 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="text-blue-400 hover:text-red-400  -mt-20 transition-colors duration-300 cursor-pointer"
          >
            About
          </motion.li>
        </motion.ul>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.5 }}
          style={{ originY: 0.55 }}
          className="sm:hidden"
        >
          <HiOutlineMenuAlt3 />
        </motion.button>
      </motion.nav>
      <motion.ul
        className={` text-blue-400 hover:text-red-400 py-2 text-sm absolute -mt-2 z-20 w-full`}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% )",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.4,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% )",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none", display: isOpen ? "block" : "none" }}
      >
        <motion.li
          variants={itemVariants}
          className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm  "
        >
          {" "}
          Home
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm "
        >
          About Us{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm "
        >
          Projects{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm "
        >
          Blog{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm "
        >
          Contact{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm "
        >
          FAQ{" "}
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="bg-white text-blue-400 border-b-[1.5px] hover:text-red-400 py-2 px-3 text-sm "
        >
          Donate Now{" "}
        </motion.li>
      </motion.ul>
    </motion.div>
    </header>
  );
};

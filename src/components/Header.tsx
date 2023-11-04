import Logo from "../assets/logo.png";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false)
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <header className="relative">
      <motion.div initial={false} animate={isOpen ? "open" : "closed"} className="sticky top-0 z-50 ">
        <motion.nav className="flex items-center justify-between mr-10 ">
          <Link to='/'>
          <motion.img 
            whileInView={{ rotate: 0, transition: { duration: 1 }, }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }} src={Logo} alt="website logo" width="200rem" className="logo cursor-pointer" />

          </Link>
         
          <motion.ul
            animate={{ x: 0, y: 2 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="sm:flex xs:hidden items-center sm:gap-4 sm:text-sm lg:gap-10 gap-5 lg:text-[0.95rem] whitespace-nowrap justify-between"
          >

            <motion.li
              animate={{ y: 40, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="-mt-20 ml-6 text-blue-400 hover:text-red-400 transition-colors duration-300 cursor-pointer"
            >
              <Link to='/' className="m-0 p-0">
                Home
              </Link>

            </motion.li>

            <motion.li
              animate={{ y: -40 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="text-blue-400 relative  mt-20  transition-colors duration-300 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              About Us {show ? <MdArrowDropUp size='1.5rem' className="inline items-center m-0 p-0 text-red-400" /> : <MdOutlineArrowDropDown size='1.5rem' className="inline items-center m-0 p-0" />}
              <ul className={` ${show ? 'block' : 'hidden'} absolute top-9 bg-white  px-2 text-start list-none border-[1px] border-blue-200 `}>
                <Link to='/about'> <li className="border-b-[1px] border-gray p-2 hover:text-red-400">History</li>
                </Link>
                <Link to="/advisory-board">            <li className="border-b-[1px] border-gray p-2 hover:text-red-400">Advisory Board</li>
                </Link>
                <Link to='/team'>            <li className="border-b-[1px] border-gray p-2 hover:text-red-400">The Team</li>
                </Link>
              </ul>
            </motion.li>
            <motion.li
              animate={{ y: 40 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="text-blue-400  hover:text-red-400 -mt-20 transition-colors duration-300 cursor-pointer"
            >
              <Link to='project'>
              Projects
              </Link>
            </motion.li>
            <motion.li
              animate={{ y: -40 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="text-blue-400 mt-20  hover:text-red-400 transition-colors duration-300 cursor-pointer"
            >
               <Link to='/event' className="m-0 p-0">
               Events
              </Link>
             
            </motion.li>
            <motion.li
              animate={{ y: 40 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="text-blue-400 hover:text-red-400 -mt-20 transition-colors duration-300 cursor-pointer"
            >
              <Link to="/contact-us">
              Contact
              </Link>
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
          style={{ pointerEvents: isOpen ? "auto" : "none", display: isOpen ? "block" : "none" }}>
          <motion.li
            variants={itemVariants}
            className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm  "
          >
            {" "}
            Home
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="bg-white relative text-blue-400  border-b-[1px]  py-2 px-3 text-sm "
            onClick={() => setShow(!show)}
          >
            <span className="flex items-center justify-between">
              <h4>About Us{" "}</h4>
              {show ? <MdArrowDropUp size='1.5rem' className="inline items-center m-0 p-0 text-red-400" /> : <MdOutlineArrowDropDown size='1.5rem' className="inline items-center m-0 p-0" />}

            </span>

            <ul className={` ${show ? 'show' : 'hidden'}  bg-white  px-2 absolute top-10 left-0 text-start w-full first-letter:list-none border-[1px] border-blue-200 `} onClick={()=> setShow(false)}>
              <Link to='/about'> <li className="border-b-[1px] border-gray p-2 hover:text-red-400">History</li>
              </Link>
              <Link to="/advisory-board">            <li className="border-b-[1px] border-gray p-2 hover:text-red-400">Advisory Board</li>
              </Link>
              <Link to='/team'>            <li className="border-b-[1px] border-gray p-2 hover:text-red-400">The Team</li>
              </Link>
            </ul>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm "
          >
            <Link to="/project"> Projects </Link>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm "
          >
            <Link to='/event' className="m-0 p-0">
              Event
              </Link>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="bg-white text-blue-400 border-b-[1px] hover:text-red-400 py-2 px-3 text-sm "
          >
            <Link to='/contact-us'>
              Contact
              </Link>
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

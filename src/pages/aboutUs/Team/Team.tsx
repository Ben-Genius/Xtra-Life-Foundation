import React from 'react';
import { motion } from 'framer-motion';
import { advisory } from '../../../data/data';
const Team: React.FC = () => {



interface MemberProps {
    member: {
        name: string;
        position: string;
        image: string;
    };
}

const MemberCard: React.FC<MemberProps> = ({ member }) => {
    return (
        <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="border rounded overflow-hidden"
        >
            <img src={member.image} alt={member.name} className= "h-[24rem] object-cover w-full  rounded"/>
            <div className="p-4 bg-blue-600 text-white">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.position}</p>
            </div>
        </motion.div>
    );
}



    return (
        <>
           <div
        className="bg-cover give overlay relative text-white max-w-full h-[17rem] sm:h-screen  bg-center bg-no-repeat bg-imgSm sm:bg-imgMd lg:bg-imgLg"

      >
        <div className="p-3 md:p-5 w-full mb-3 flex flex-col items-center h-full justify-center relative">
          
          <h1 className="font-bold sm:max-w-full text-4xl sm:6xl  text-center font-sans">FOR THE FUTURE GHANA TEAM </h1>

        </div>
</div>
        
     
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='max-w-[80%] mx-auto'>
            
          
            <div className=" p-10 bg-blue-500 mt-16 mb-20">
              <h1 className="font-bold text-white text-xl sm:text-2xl md:text-4xl"> XTF GHANA TEAM </h1>
              <p className="text-md text-white mt-9">
                Duis deserunt sunt ex esse consequat aute qui.Irure pariatur enim adipisicing tempor.
                Aute dolor sint aute aliquip <b className="text-green-500">reprehenderit proident consectetur ullamco aliquip </b>laborum officia commodo consequat.
                Aute consectetur deserunt consectetur tempor nostrud magna.Esse duis anim non excepteur dolor nostrud reprehenderit ipsum nostrud exercitation ea pariatur deserunt incididunt.Fugiat incididunt sunt tempor ex sint sint cupidatat nulla reprehenderit aliqua sit qui.
              </p>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 w-full gap-6 mt-12">
                {advisory.map((member, index) => (
                    <MemberCard key={index} member={member} />
                ))}
            </div>
        </motion.div>
        </>
    );
}

export default Team;



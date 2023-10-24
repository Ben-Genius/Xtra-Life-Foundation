
const Hero = () => {
  return (
    <div className="overflow-hidden">
       <div
        className="bg-cover give overlay relative text-white max-w-full h-[17rem] sm:h-screen  bg-center bg-no-repeat bg-imgSm sm:bg-imgMd lg:bg-imgLg">
           <div className="p-3 md:p-5 w-full mb-3 flex flex-col items-center h-full justify-center relative">
           <div className="p-3 md:p-5 w-full mb-3 flex flex-col items-start h-full justify-center">
   <h3 className="font-serif">We are ready to help them </h3>
      <h1 className="mt-3 md:mt-10 text-2xl  md:text-6xl  font-bold max-w-xs md:max-w-md lg:max-w-3xl lg:text-[4rem]">You can change their lifestyle</h1>
      <button className="bg-blue-400 mt-4 sm:mt-8 px-8 cursor-pointer hover:blue-600 py-2 text-sm text-center rounded-[1.2rem]">
        {" "}
        Read More
      </button>
   </div>

        </div>
  
    </div>
    </div>
  );
};
export default Hero;

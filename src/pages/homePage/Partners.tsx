import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import the autoplay CSS
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


import log1 from "../../assets/logo1.png";
import log2 from "../../assets/logo2.png";
import log3 from "../../assets/logo3.png";
import log4 from "../../assets/logo4.png";
import log5 from "../../assets/logo5.jpeg";
import log6 from "../../assets/logo5.jpg";
import log7 from "../../assets/logo6.png";
import log8 from "../../assets/logo7.png";

const Partners = () => {
  const images = [log1, log2, log3, log4, log5, log6, log7, log8];
  const partnerNames = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6", "Partner 7", "Partner 8"]; // Replace with actual partner names

  return (
    <>
      <center className='mt-16'><h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2'>Our Partners</h1></center>
      <Swiper
        spaceBetween={40}
        loop={true}
        autoplay={{ // Enable autoplay
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]} // Add Autoplay module
        className="mySwiper mt-4 mb-14 w-[80%] mx-auto"
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={partnerNames[index]}
              className="max-w-full h-[10rem] object-contain mb-4 rounded-md shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Partners;
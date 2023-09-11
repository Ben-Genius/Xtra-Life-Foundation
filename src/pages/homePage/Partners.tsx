import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

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
  return (
    <>
      <center><h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2'>Our Partners </h1></center>
      <Swiper
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-4"
        breakpoints={{
          // when window width is >= 640pxa
          0: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          // when window width is >= 1024px
                    1024: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Image ${index}`}
              className="max-w-full h-full object-cover rounded-md "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Partners;

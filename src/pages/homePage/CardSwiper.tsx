import { Carousel } from '@mantine/carousel';
import {data} from '../../data/data';
import { Card } from "../../components/SwiperCard";

const CardSwiper = () => {
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
          <Card {...item} />
        </Carousel.Slide>
      ));
  return (
    <div className="sm:container sm:mx-auto mx-2 mt-4 ">
           <Carousel
    slideGap={20}
        dragFree
        align="start"
        withControls={false}
        loop
      >
        {slides}
      </Carousel>
    </div>
  )
}

export default CardSwiper

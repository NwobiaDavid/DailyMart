// import Swiper core and required modules
import one from '../assets/carousel/elaine-casap-qgHGDbbSNm8-unsplash.jpg';
import two from '../assets/carousel/megan-thomas-xMh_ww8HN_Q-unsplash.jpg';
import three from '../assets/carousel/syd-wachs-epqNIYI6S7E-unsplash.jpg';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function Heropage() {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div style={{backgroundImage: `url(${one});  objectFit: cover;`}} className="object-cover h-[35rem] font-semibold flex justify-center items-center bg-red-200">
            {/* <h1>Slide 1</h1> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: `url(${two})`}} className="object-cover h-[35rem] font-semibold flex justify-center items-center bg-blue-200">
            {/* <h1>Slide 2</h1> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: `url(${three})`}} className="object-cover h-[35rem] font-semibold flex justify-center items-center bg-lime-200">
            {/* <h1>Slide 3</h1> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import '../index.css'

import one from '../assets/carousel/elaine-casap-qgHGDbbSNm8-unsplash.jpg';
import two from '../assets/carousel/megan-thomas-xMh_ww8HN_Q-unsplash.jpg';
import three from '../assets/carousel/syd-wachs-epqNIYI6S7E-unsplash.jpg';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/parallax';

export default function Heropage() {
  return (
    <div className="poppins-font ">
      <Swiper className=''
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
        spaceBetween={50}
        slidesPerView={1}
        parallax
        // navigation
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div style={{backgroundImage: `url(${one})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat' }} className="rounded-2xl h-[35rem] font-semibold flex justify-end items-end p-3 bg-green-200">
            <h1 className='text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-6xl w-[65%] text-right '>Farm to Fork, Delivered to Your Doorstep: Discover the Freshest Produce Online!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: `url(${two})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat' }} className="rounded-2xl h-[35rem] font-semibold flex justify-end items-end p-3 bg-green-200">
          <h1 className='text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-6xl w-[65%] text-right '>Your Culinary Adventure Starts Here: Explore Our Garden of Freshness Online.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{backgroundImage: `url(${three})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat' }} className="rounded-2xl h-[35rem] font-semibold flex justify-end items-end p-3 bg-green-200">
          <h1 className='text-white font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-6xl w-[65%] text-right '>From Harvest to Your Home: Taste the Difference of Freshness, Order Online Today!</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

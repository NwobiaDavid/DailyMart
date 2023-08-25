import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

// or only core styles
import '@splidejs/react-splide/css/core';

import fruits from '../assets/categories/fruits.jpg';
import meat from '../assets/categories/meats.webp';
import veges from '../assets/categories/veges.png';
import grains from '../assets/categories/grains.webp';
import tubers from '../assets/categories/tubers.jpg';
import legumes from '../assets/categories/legumes.jpg';
import spices from '../assets/categories/spices.jpeg';
import { Link } from 'react-router-dom';

export default function TodaysDeal() {
  return (
    <div className="flex flex-col my-32 ">
      <div className="h-20 rounded-lg flex mb-3 p-3 bg-gray-300 ">
        <h1 className=" text-4xl font-bold capitalize">today's deals</h1>
      </div>
      <div>
        <Splide
          options={{
            rewind: true,
            width: 1600,
            gap: '1rem',
            height: 300,
            type: 'loop',
            perPage: 3,
            focus: 3,
            omitEnd: true,
          }}
          hasTrack={false}
          aria-label="My Favorite Images"
        >
          <SplideTrack>
            <SplideSlide>
              <div className="h-full flex flex-col">
                {/* <div
                  className="h-full flex justify-center items-end duration-100 hover:scale-105 "
                  style={{
                    backgroundImage: `url(${spices})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                ></div> */}
                <div className='w-full'>
                  <img className='h-[50%] ' src={spices} alt="" />

                  <h1 className='h-[50%] '>spices and maggi</h1>
                </div>
                <Link to={'/a'}>
                  <h1 className="text-white p-3 text-xl rounded-lg my-4 bg-black ">
                    add to cart
                  </h1>
                </Link>
              </div>
            </SplideSlide>

            <SplideSlide>
              <Link to={'/a'}>
                <div
                  className="h-full"
                  style={{
                    backgroundImage: `url(${tubers})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1>hey there</h1>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={'/a'}>
                <div
                  className="h-full"
                  style={{
                    backgroundImage: `url(${veges})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1>hey there</h1>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={'/a'}>
                <div
                  className="h-full"
                  style={{
                    backgroundImage: `url(${grains})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1>hey there</h1>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={'/a'}>
                <div
                  className="h-full"
                  style={{
                    backgroundImage: `url(${meat})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1>hey there</h1>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={'/a'}>
                <div
                  className="h-full"
                  style={{
                    backgroundImage: `url(${legumes})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1>hey there</h1>
                </div>
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to={'/a'}>
                <div
                  className="h-full"
                  style={{
                    backgroundImage: `url(${fruits})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <h1>hey there</h1>
                </div>
              </Link>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </div>
  );
}

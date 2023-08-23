import fruits from '../assets/categories/fruits.jpg';
import meat from '../assets/categories/meats.webp';
import veges from '../assets/categories/veges.png';
import grains from '../assets/categories/grains.webp';
import tubers from '../assets/categories/tubers.jpg';
import legumes from '../assets/categories/legumes.jpg';
import spices from '../assets/categories/spices.jpeg';
import { Link } from 'react-router-dom';

// bg-gradient-to-b from-gray-300 to-white

export default function Categories() {
  return (
    <div className="py-4">
      <div className="h-20 rounded-lg flex mb-3 p-3 bg-gray-300  ">
        <h2 className="text-4xl font-bold">Categories</h2>
      </div>

      <div className="grid gap-5  grid-cols-3 grid-rows-2">
        <Link
          to={'/fruits'}
          className="h-[300px] hover:scale-105 duration-200 hover:rounded-2xl flex items-end text- justify-center"
          style={{
            backgroundImage: `url(${fruits})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-2xl font-bold bg-black rounded-lg text-white px-3 py-2 mb-2 ">
            Fruits
          </p>
        </Link>

        <Link
        to={'/livestocks'}
          className="h-[300px] hover:scale-105 duration-200 hover:rounded-2xl flex items-end text- justify-center"
          style={{
            backgroundImage: `url(${meat})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-2xl font-bold bg-black rounded-lg text-white px-3 py-2 mb-2 ">
            Livestock
          </p>
        </Link>

        <Link
        to={'/vegetables'}
          className="h-[300px] hover:scale-105 duration-200 hover:rounded-2xl flex items-end text- justify-center"
          style={{
            backgroundImage: `url(${veges})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-2xl font-bold bg-black rounded-lg text-white px-3 py-2 mb-2 ">
            vegetable
          </p>
        </Link>

        <Link
        to={'/grains'}
          className="h-[300px] hover:scale-105 duration-200 hover:rounded-2xl flex items-end text- justify-center"
          style={{
            backgroundImage: `url(${grains})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-2xl font-bold bg-black rounded-lg text-white px-3 py-2 mb-2 ">
            Grains
          </p>
        </Link>

        <Link
        to={'/spices'}
          className="h-[300px] hover:scale-105 duration-200 hover:rounded-2xl flex items-end text- justify-center"
          style={{
            backgroundImage: `url(${spices})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-2xl font-bold bg-black rounded-lg text-white px-3 py-2 mb-2 ">
            Spices
          </p>
        </Link>

        <Link
        to={'/legames'}
          className="h-[300px] hover:scale-105 duration-200 hover:rounded-2xl flex items-end text- justify-center"
          style={{
            backgroundImage: `url(${legumes})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-2xl font-bold bg-black rounded-lg text-white px-3 py-2 mb-2 ">
            Legume
          </p>
        </Link>

        <Link
        to={'/tubers'}
          className="h-[300px] hover:scale-105 duration-200 hover:rounded-2xl flex items-end text- justify-center"
          style={{
            backgroundImage: `url(${tubers})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p className="text-2xl font-bold bg-black rounded-lg text-white px-3 py-2 mb-2 ">
            Tubers
          </p>
        </Link>

        <Link
        to={'/others'}
          className="h-[300px] hover:scale-105 duration-200 hover:rounded-2xl bg-gray-200 hover:bg-gray-400  flex items-center justify-center"
          // style={{
          //   backgroundImage: `url(${fruits})`,
          //   backgroundSize: 'cover',
          //   backgroundRepeat: 'no-repeat',
          // }}
        >
          <p className="text-2xl font-bold bg-gray-500 rounded-lg flex justify-center items-center w-[80%] h-[80%] text-white px-3 py-2 mb-2 ">
            Others
          </p>
        </Link>
      </div>
    </div>
  );
}

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

// or only core styles
import '@splidejs/react-splide/css/core';


import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../hooks/ProductHooks';
import MessageBox from '../components/MessageBox';
import { ApiError } from '../types/ApiError';
import LoadingBox from '../components/LoadingBox';
import { getError } from '../utils';

import { useContext } from "react";
import { Product } from '../types/Product';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import { Store } from "../Store";
import { convertProductToCartItem } from "../utils";
import { CartItem } from "../types/Cart";
import { toast } from "react-toastify";
import { FaNairaSign } from "react-icons/fa6";



function Item({ product }: { product: Product }) {

  const { state, dispatch } = useContext(Store)
  const {
    cart: { cartItems },
  } = state;



  const addToCartHandler = async (item: CartItem) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert('sorry out of stock')
      return
    }

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity }
    })
    toast.success('Product added to the cart')
  }
    return (

      <div className="w-full h-full">
      <Card className="hover:shadow-lg h-[400px] duration-200 shadow-black">
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} className=" " alt={product.name} />
        </Link>

        <Card.Body>
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text>
            <div className="flex mb-2 text-lg items-center">
              <FaNairaSign size={18} /> {product.price}
            </div>
          </Card.Text>

          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Out of stock
            </Button>
          ) : (
            <Button
              onClick={() => addToCartHandler(convertProductToCartItem(product))}
              className="bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700"
            >
              Add to cart
            </Button>
          )}

        </Card.Body>
      </Card>
    </div>
    )
  }

  export default function TodaysDeal() {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return isLoading ? (
      <LoadingBox />
    ) : error ? (
      <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
    ) : (
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
              height: 400,
              type: 'loop',
              perPage: 7,
              focus: 1,
              omitEnd: true,
            }}
            hasTrack={false}
            aria-label="My Favorite Images"
          >
            <SplideTrack>

              {products!.map((products) => (
                <SplideSlide key={products.slug} >
                  <Item product={products} />
                </SplideSlide>
              ))}

            </SplideTrack>
          </Splide>
        </div>
      </div>
    );
  }

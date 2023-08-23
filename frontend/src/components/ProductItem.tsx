/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { Product } from '../types/Product';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { Store } from "../Store";
import { convertProductToCartItem } from "../utils";
import { CartItem } from "../types/Cart";
import { toast } from "react-toastify";

function ProductItem({ product }: { product: Product }) {
  const {state, dispatch} = useContext(Store)
  const {
    cart: {cartItems},
  } = state;



  const addToCartHandler = async (item: CartItem) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert('sorry out of stock')
      // toast.warn('Sorry. Product is out of stock')
      return
    }
    // ctxDispatch({
    //   type: 'CART_ADD_ITEM',
    //   payload: { ...item, quantity },
    // })
    
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: {...item, quantity}
    })
    toast.success('Product added to the cart')
  }

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={()=> addToCartHandler(convertProductToCartItem(product))} className='bg-blue-500'>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
 
import { useContext } from "react";
import { Row, Col, ListGroup , Card, Badge, Button} from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductDetailsBySlugQuery } from '../hooks/ProductHooks';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { convertProductToCartItem, getError } from '../utils';
import { ApiError } from '../types/ApiError';
import Rating from '../components/Rating';
import { Store } from '../Store';
import { toast } from "react-toastify";
import { FaNairaSign } from "react-icons/fa6";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const { slug } = params;
  const {
    data: product,
    isLoading,
    error
  } = useGetProductDetailsBySlugQuery(slug!);

const {state, dispatch} = useContext(Store);
const {cart} = state;

const navigate = useNavigate();

const addToCartHandler = () =>{
  const existItem = cart.cartItems.find((x) => x._id === product!._id)
  const quantity = existItem ? existItem.quantity + 1 : 1
  if (product!.countInStock < quantity) {
    toast.warn('Sorry. Product is out of stock')
    return
  }
  dispatch({
    type: 'CART_ADD_ITEM',
    payload: { ...convertProductToCartItem(product!), quantity },
  })
  toast.success('Product added to the cart')
  navigate('/cart')
}

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : !product ? (
    <MessageBox variant="danger">product not found</MessageBox>
  ) : (
        <div className="h-[80vh] poppins-font">
        <Row className="h-full justify-center">
        <Col md={6} className="lg:flex justify-center items-center">
          <img className="lg:h-[70%] w-fit h-fit lg:w-[70%]  " src={product.image} alt={product.name}></img>
        </Col>
        <Col md={3} className=" pt-[10%]">
         
            <ListGroup className="md:h-[80%]" variant="flush">
              <ListGroup.Item>
                <Helmet>
                  <title>{product.name}</title>
                </Helmet>
                <h1 className="text-4xl">{product.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item  >
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </ListGroup.Item>
              <ListGroup.Item className="text-xl flex">Price : <span className="flex items-center"> <FaNairaSign /> {product.price}
              </span></ListGroup.Item>
              <ListGroup.Item className="text-xl">
                Description:
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
        
        </Col>

        <Col md={3} className="lg:pt-[10%]">
          <Card  >
            <Card.Body>
              <ListGroup  variant="flush">

                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col><span className="flex items-center"> <FaNairaSign /> {product.price} </span> </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item >
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addToCartHandler} variant="primary" className='bg-green-500 border-green-500 hover:bg-green-700 hover:border-green-70000'>Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  );
}

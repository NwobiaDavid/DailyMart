import { Row, Col } from 'react-bootstrap';
import MessageBox from '../components/MessageBox';
import ProductItem from '../components/ProductItem';
import { Helmet } from 'react-helmet-async';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import LoadingBox from '../components/LoadingBox';
import { useGetProductsQuery } from '../hooks/ProductHooks';

import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import TodaysDeal from '../components/TodaysDeal';

export default function Homepage() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>daily mart</title>
      </Helmet>
      <div className="mb-5 ">
        <Carousel />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <TodaysDeal />
      </div>
      <div className="h-20 rounded-lg flex mb-3 p-3 bg-gray-300 ">
        <h1 className=" text-4xl font-bold capitalize">featured products</h1>
      </div>
          {products!.map((products) => (
            <Col className='' key={products.slug} sm={6} md={4} lg={3}>
              <ProductItem product={products} />
            </Col>
          ))}
    </Row>
  );
}

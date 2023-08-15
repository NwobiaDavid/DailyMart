import { Row, Col } from 'react-bootstrap';
import MessageBox from '../components/MessageBox';
import ProductItem from '../components/ProductItem';
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from '../hooks/ProductHooks';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import loadingBox from '../components/loadingBox';


export default function Homepage() {

    const {data: products, isLoading, error} = useGetProductsQuery()
  return isLoading ? (
    <loadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
        <Helmet>
            <title>daily mart</title>
        </Helmet>
      {products!.map((products) => (
        <Col key={products.slug} sm={6} md={4} lg={3}>
          <ProductItem product={products} />
        </Col>
      ))}
    </Row>
  );
}

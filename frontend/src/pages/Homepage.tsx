import { Row , Col} from "react-bootstrap";
import { sampleProducts } from "../data";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <Row>
          {sampleProducts.map((products)=>(
            <Col key={products.slug} sm={6} md={4} lg={3}>
                <Link to={'/product/'+products.slug} >
                <img className="max-w-[400px] w-full " src={products.image} alt={products.slug} />
              <h2>{products.name}</h2>
              <p>${products.price}</p>
                </Link>
             
            </Col>
          )) }
        </Row>
  )
}

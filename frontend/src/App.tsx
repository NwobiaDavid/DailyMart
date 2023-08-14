import { sampleProducts } from "./data";
import { Row ,Col} from "react-bootstrap";


function App() {

  return (
    <div >
     <header className="flex px-3 bg-slate-950 text-white justify-between py-[1rem] items-center">
          <div>DAILY MART </div>
        <div className="flex">
          <a href="/cart" className="nav-link">Cart</a>
          <a href="/signin" className="ml-2 nav-link">signin</a>
        </div>
      </header>
     <main className="flex items-center justify-center ">
      <div className="mt-3 px-3">
        <Row>
          {sampleProducts.map((products)=>(
            <Col key={products.slug} sm={6} md={4} lg={3}>
              <img className="max-w-[400px] w-full " src={products.image} alt={products.slug} />
              <h2>{products.name}</h2>
              <p>${products.price}</p>
            </Col>
          )) }
        </Row>
      </div>
     </main>
     <footer><div className="text-center">all rights reserved</div></footer>
    </div>
  )
}

export default App

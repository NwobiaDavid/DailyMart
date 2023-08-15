import { Link, Outlet } from 'react-router-dom';
import { Store } from './Store';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useContext, useEffect } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

function App() {
  const {
    state: { mode, cart },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' });
  };

  return (
    <div>
      <ToastContainer position='bottom-center' limit={3} />
      <header className="flex px-3 bg-slate-950 text-white justify-between py-[1rem] items-center">
        <LinkContainer to="/">
          <div className='cursor-pointer'>DAILY MART </div>
        </LinkContainer>
        <div className="flex items-center">
          <Link to="/cart" className="nav-link">
            Cart
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </Badge>
            )}
          </Link>
          <a href="/signin" className="ml-2 nav-link">
            signin
          </a>
          <Button variant={mode} onClick={switchModeHandler}>
            <i
              className={
                mode === 'light' ? 'fa fa-sun text-white' : 'fas fa-moon'
              }
            ></i>
          </Button>
        </div>
      </header>
      <main className="flex items-center justify-center ">
        <div className="mt-3 px-3">
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="text-center">all rights reserved</div>
      </footer>
    </div>
  );
}

export default App;

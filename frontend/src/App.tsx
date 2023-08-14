import { Outlet } from "react-router-dom";


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
        <Outlet />
      </div>
     </main>
     <footer><div className="text-center">all rights reserved</div></footer>
    </div>
  )
}

export default App

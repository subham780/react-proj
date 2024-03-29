import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import Footer from "./components/Footer";
import { 
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  } from "react-router-dom";

import Cart from "./pages/Cart";
import { productsData } from "./api/Api";


const Layout = () => {
return (
  <div>
    <Header />
    <Outlet />
    <Footer />

  </div>
);
  
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
      path: "/",
      element: <Home />,
      Loader: productsData,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont" >
      <RouterProvider router={router}/>
     

    </div>
  );
}

export default App;

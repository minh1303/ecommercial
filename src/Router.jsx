import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ShopContextProvider  from "./ShopContext";
import Products from "./Components/Pages/Products/Products";
import Cart from "./Components/Pages/Cart/Cart";
import ProductDetail from "./Components/Pages/Products/ProductDetail/ProductDetail";
const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/products", element: <Products></Products> },
    {path:"/cart", element: <Cart></Cart>},
    {path:"/product/:id", element: <ProductDetail></ProductDetail>}
  ]);
  return (
    <ShopContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ShopContextProvider>
  );
};

export default Router;

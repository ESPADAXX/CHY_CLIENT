import { createBrowserRouter } from "react-router-dom";
import Home from "../views/client/Home/Home";
import App from "../App";
import Contact from "../views/client/Contact/Contact";
import Product from "../views/client/Product/Product";
import ProductAdmin from "../views/admin/Product/Product";
import ProductDetails from "../views/client/ProductDetails/ProductDetails";
import Dashboard from "../views/admin/Dashboard/Dashboard";
import Category from "../views/admin/category/Category";
import Order from "../views/admin/order/Order";
import Transaction from "../views/admin/transaction/Transaction";
import HomeAdmin from "../views/admin/home/Home";
import AddProduct from "../views/admin/Product/addProduct/AddProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "admin",
        element: <HomeAdmin />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "products",
            element: <ProductAdmin />,
          },
          {
            path: "products",
            element: <Category />,
          },
          {
            path: "addProduct",
            element: <AddProduct />,
          },
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "order",
            element: <Order />,
          },
          {
            path: 'transaction',
            element:<Transaction/>
          },
        ],
      },
    ],
  },
]);
export default Router;

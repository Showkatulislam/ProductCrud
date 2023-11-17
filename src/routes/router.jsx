import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Home from "../page/home";
import PrivateRoute from "../private/PrivateRoute";
import AddProduct from "../page/AddProduct";
import ProductList from "../page/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/home",
    element: <Home />,
    children:[
      {
        path:'',
        element:<ProductList/>
      },
      {
        path:'add-Product',
        element:<AddProduct/>
      }
    ]
  },
  {
    path: "/auth",
    element: <Login />,
  },
]);

export default router;

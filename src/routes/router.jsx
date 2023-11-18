import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Login";
import Home from "../page/home";
import PrivateRoute from "../private/PrivateRoute";
import AddProduct from "../page/AddProduct";
import ProductList from "../page/ProductList";
import UpdateProduct from "../page/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/home",
    element:<PrivateRoute><Home /></PrivateRoute> ,
    children:[
      {
        path:'',
        element:<ProductList/>
      },
      {
        path:'add-Product',
        element:<AddProduct/>
      },
      {
        path:'update-Product/:id',
        element:<UpdateProduct/>
      }
    ]
  },
  {
    path: "/auth",
    element: <Login />,
  },
]);

export default router;

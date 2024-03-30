import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Errorpage from "../pages/Errorpage";
import Adminpage from "../pages/Adminpage";

import { adminRoute } from './adminRoute.jsx'
import ProductDetails from "../pages/ProductsDetails.jsx";
export  const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout/>,
    children: [
      {
        index:true,
        element: <Home />,
        errorElement: <Errorpage />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <Errorpage />,
      },
      {
        path:'products/:productId',
        element:<ProductDetails/>,
        errorElement:<Errorpage/>
      }
    ],
    errorElement: <Errorpage />,
  },
  {
    path: "/admin",
    element: <Adminpage />,
    children: adminRoute,
    errorElement: <Errorpage />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Category from "../Pages/Category/Category";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashboard";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SellerDashboard from "../Pages/Dashboard/Seller/SellerDashboard";
import UserDashboard from "../Pages/Dashboard/Users/UserDashboard";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:name",
        element: (
          <PrivateRoutes>
            <Category></Category>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`),
      },
      {
        path: "/category",
        element: (
          <PrivateRoutes>
            <Category></Category>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
        <Main></Main>
    ),
    children: [
        {
            path: "/dashboard",
            element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
        },
      {
        path: "/dashboard/seller",
        element: (
            <PrivateRoutes><SellerDashboard></SellerDashboard></PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/user",
        element: (
            <PrivateRoutes><UserDashboard></UserDashboard></PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/admin",
        element: (
            <PrivateRoutes><AdminDashboard></AdminDashboard></PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;

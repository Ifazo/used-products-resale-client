import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs';
import Category from '../Pages/Category/Category';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Login/Signup';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:name',
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.name}`),
                element: <Category></Category>
            },
            {
                path: '/dashboard',
                element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default router;
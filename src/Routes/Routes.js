import { createBrowserRouter } from 'react-router-dom';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error></Error>
    }
])

export default router;
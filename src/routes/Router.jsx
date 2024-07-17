import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import MainLayout from '../layout/MainLayout';
import Register from '../pages/authentication/Register';
import Login from '../pages/authentication/Login';
import ProtectedRoute from './ProtectedRoute';
// import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                )
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
]);

export default router;

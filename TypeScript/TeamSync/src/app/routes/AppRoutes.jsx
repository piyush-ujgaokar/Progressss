
import {createBrowserRouter, RouterProvider} from 'react-router'
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../../features/auth/ui/pages/LoginPage';
import RegisterPage from '../../features/auth/ui/pages/RegisterPage';
import DashBoardLayout from '../layouts/DashBoardLayout';
import Home from '../../features/dashboard/ui/pages/Home';
const AppRoutes = () => {

    const router=createBrowserRouter([
        {
            path:"/auth",
            element:<AuthLayout/>,
            children:[
                {
                    path:"login",
                    element:<LoginPage/>
                },
                {
                    path:"register",
                    element:<RegisterPage/>
                }
            ]
        },
        {
            path:"/home",
            element:<DashBoardLayout/>,
            children:[
                {
                    path:"",
                    element:<Home/>

                }
            ]
        }
    ])



  return <RouterProvider router={router} />
}

export default AppRoutes;

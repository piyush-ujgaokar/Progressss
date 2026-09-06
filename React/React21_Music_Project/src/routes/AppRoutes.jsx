import {createBrowserRouter,RouterProvider} from 'react-router'
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
const AppRoutes = () => {

    const router=createBrowserRouter([
        {
            path:"",
            element:<MainLayout/>,
            children:[
                {
                    index:true,
                    element:<HomePage/>
                },
                {
                    path:"about",
                    element:<AboutPage/>
                }
            ]
        },
        {
            path:"/auth",
            element:<AuthLayout/>,
            children:[
                {
                    path:'login',
                    element:<LoginPage/>
                },
                {
                    path:'register',
                    element:<RegisterPage/>
                }
            ]
        }
    ])



  return <RouterProvider router={router}/>
}

export default AppRoutes;

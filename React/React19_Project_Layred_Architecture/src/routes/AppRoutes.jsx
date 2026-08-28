import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import AuthLayout from "../app/layouts/AuthLayout";
import PublicProtected from "./protected/PublicProtected";
import MainLayout from "../app/layouts/MainLayout";
import MainProtected from "./protected/MainProtected";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/products/ui/pages/ProductPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import CartPage from "../features/cards/ui/pages/CartPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateUserAction } from "../features/auth/state/authActions";
import AboutPage from "../shared/ui/pages/AboutPage";

const AppRoutes = () => {

    let dispatch=useDispatch()

useEffect(()=>{
    (async()=>{
        try {
           dispatch(hydrateUserAction())
            
        } catch (error) {
            console.log("error in hydrate-->",error)
        }
    })()
},[])


  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "login",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "order",
              element: <OrderPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;

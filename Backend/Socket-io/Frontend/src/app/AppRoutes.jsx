import {createBrowserRouter, RouterProvider} from "react-router"
import Join from "../pages/Join";

const AppRoutes = () => {

    const router=createBrowserRouter([
        {
            path:"/join",
            element:<Join/>
        }
    ])


  return <RouterProvider router={router}/>
}

export default AppRoutes;



import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayouts from "../MainLayouts/MainLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayouts from "../MainLayouts/MainLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableCars from "../pages/AvailableCars/AvailableCars";
import AddCar from "../pages/AddCar/AddCar";
import MyCar from "../pages/MyCar.jsx/MyCar";
import MyBookings from "../pages/MyBookings/MyBookings";
import CarsDetails from "../pages/AvailableCars/CarsDetails";
import UpdateDetails from "../pages/MyCar.jsx/UpdateDetails";
import PrivateRoute from "../pages/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Chart from "../pages/Chart";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://assignment-11-server-ten-ecru.vercel.app/cars')
            },
            {
                path:'/availableCars',
                element:<AvailableCars></AvailableCars>,
                loader:()=>fetch('https://assignment-11-server-ten-ecru.vercel.app/cars')
            },
            {
                path:'/carsDetails/:id',
                element:<CarsDetails></CarsDetails>,
                loader:({params})=>fetch(`https://assignment-11-server-ten-ecru.vercel.app/cars/${params.id}`)
            },
            {
                path:'/addCar',
                element:<PrivateRoute><AddCar></AddCar></PrivateRoute>
            },
            {
                path:'/myCars',
                element:<PrivateRoute><MyCar></MyCar></PrivateRoute>
            },
            {
                path:'/myBookings',
                element:<PrivateRoute><MyBookings></MyBookings> </PrivateRoute>
            },
            {
                path:'/updateDetails/:id',
                element:<PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>
            },
            {
                path:'/chart',
                element:<Chart></Chart>
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
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
                path:'/availableCars',
                element:<AvailableCars></AvailableCars>,
                loader:()=>fetch('http://localhost:5000/cars')
            },
            {
                path:'/carsDetails/:id',
                element:<CarsDetails></CarsDetails>,
                loader:({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
            },
            {
                path:'/addCar',
                element:<AddCar></AddCar>
            },
            {
                path:'/myCars',
                element:<MyCar></MyCar>
            },
            {
                path:'/myBookings',
                element:<MyBookings></MyBookings> 
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
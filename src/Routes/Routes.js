import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Reviews from '../Pages/Reviews/Reviews';
import PrivateRoute from '../Routes/PrivateRoute';
import Dashboard from "../Layout/Dashboard/Dashboard";
import MyAppointment from "../AdminPages/MyAppointment/MyAppointment";
import AllUserList from "../AdminPages/AllUserList/AllUserList";
import Book from "../AdminPages/Book/Book";




export const route = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/about', element: <About></About>
            },
            {
                path: '/appointment', element: <Appointment></Appointment>
            },
            {
                path: '/reviews', element: <Reviews></Reviews>
            },
            {
                path: '/contact-us', element: <ContactUs></ContactUs>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },

        ]
    },

    {
        path: '/dashboard', element: <Dashboard></Dashboard>, children: [

            {
                path: '/dashboard', element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users', element: <AllUserList></AllUserList>
            }
        ]





    }
])
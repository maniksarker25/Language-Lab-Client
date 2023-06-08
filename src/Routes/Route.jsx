import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import PrivateRoute from "./PrivateRoute";
import StudentHome from "../Pages/StudentDashboard/StudentHome/StudentHome";
import MySelectedClass from "../Pages/StudentDashboard/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../Pages/StudentDashboard/MyEnrolledClass/MyEnrolledClass";
import AddAClass from "../Pages/InstructorDashboard/AddAClass/AddAClass";
import MyClasses from "../Pages/InstructorDashboard/MyClasses/MyClasses";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Payment from "../Pages/StudentDashboard/Payment/Payment";
import PaymentHistory from "../Pages/StudentDashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/AdminDashboard/AdminHome/AdminHome";
import ManageClasses from "../Pages/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/instructors',
        element:<Instructors/>
      },
      {
        path:'/classes',
        element:<Classes/>
      }
    ],
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'studentHome',
        element:<StudentHome/>
      },
      {
        path:'mySelectedClass',
        element:<MySelectedClass></MySelectedClass>
      },
      {
        path:'myEnrolledClass',
        element:<MyEnrolledClass/>
      },
      {
        path:'payment',
        element:<Payment/>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory/>
      },
      // instructor routes
      {
        path:'addAClass',
        element:<InstructorRoute><AddAClass/></InstructorRoute>
      },
      {
        path:'myClasses',
        element:<InstructorRoute><MyClasses/></InstructorRoute>
      },
      //admin routes
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome/></AdminRoute>
      },
      {
        path:'manageClasses',
        element:<AdminRoute><ManageClasses/></AdminRoute>
      },
      {
        path:'manageUsers',
        element:<AdminRoute><ManageUsers/></AdminRoute>
      }
    ]
  }
]);

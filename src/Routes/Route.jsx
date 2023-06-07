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
      // instructor routes
      {
        path:'addAClass',
        element:<AddAClass/>
      },
      {
        path:'myClasses',
        element:<MyClasses/>
      }
    ]
  }
]);

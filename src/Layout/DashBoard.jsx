import { FaAd, FaBars, FaBookReader, FaEdit, FaFile, FaHome, FaUserGraduate, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseUserRole from "../Hooks/UseUserRole";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const DashBoard = () => {
  const [userRole,roleLoading] = UseUserRole();
  if(roleLoading){
    return <LoadingSpinner/>
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className=" drawer-button absolute top-4 left-4 lg:hidden"
          >
            <FaBars />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 md:w-72 text-xl h-full bg-[#125875] text-white">
            <div className="ps-4 mb-12">
              <h3 className="text-3xl font-bold">LANGUAGE LAB</h3>
            </div>
            {userRole === 'admin' && (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome"> <FaHome /> Admin Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClasses"> <FaEdit/> Manage Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers"> <FaUsers/> Manage Users</NavLink>
                </li>
              </>
            )}
            { userRole === 'instructor'&& (
              <>
                <li>
                  <NavLink to="/dashboard/addAClass"> <FaAd/> Add A Class</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses"> <FaFile/> My Classes</NavLink>
                </li>
              </>
            )}

            {userRole === 'student' && (
              <>
                <li>
                  <NavLink to="/dashboard/studentHome"><FaHome /> Student Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mySelectedClass">
                    My Selected Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myEnrolledClass">
                    My Enrolled Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    Payment History
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors"> <FaUserGraduate/> Instructors</NavLink>
            </li>
            <li>
              <NavLink to="/classes"> <FaBookReader/> Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

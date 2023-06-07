import { FaBars, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {

  const isAdmin = false;
  const isInstructors = false;
  const isStudent = true;
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
            {isAdmin && (
              <>
                <li>
                  <NavLink to='/dashboard/adminHome' >Admin Home</NavLink>
                </li>
              </>
            )}
            {isInstructors && (
              <>
                <li>
                  <NavLink to='/dashboard/instructorsHome'>Instructors Home</NavLink>
                </li>
              </>
            )}
            {
              isStudent && <>
              <li><NavLink to='/dashboard/studentHome'>Student Home</NavLink></li>
              <li><NavLink to='/dashboard/mySelectedClass'>My Selected Class</NavLink></li>
              <li><NavLink to='/dashboard/myEnrolledClass'>My Enrolled Class</NavLink></li>
              </>
            }
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import UseUserRole from "../../Hooks/UseUserRole";
import { FaGraduationCap } from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();
  const [theme,setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')

  const handleLogOut = () => {
    logOut();
  };
  const [userRole] = UseUserRole();
  console.log(userRole);


  // handle theme -----------------

  const handleToggle = (e)=>{
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }

  useEffect(()=>{
    localStorage.setItem('theme',theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])
  
  const navItems = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/instructors"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Instructors</li>
      </NavLink>
      <NavLink
        to="/classes"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Classes</li>
      </NavLink>
      {user && (
        <NavLink
          to={
            userRole === "admin"
              ? "/dashboard/manageClasses"
              : userRole === "instructor"
              ? "/dashboard/addAClass"
              : "/dashboard/mySelectedClass"
          }
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          <li>Dashboard</li>
        </NavLink>
      )}
    </>
  );

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="bg-white">
      <div className="navbar container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost ps-0 pr-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact space-y-2 z-20 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <div>
              <h3 className="lg:text-2xl uppercase flex items-center gap-2 font-semibold">
                {" "}
                <FaGraduationCap className="text-4xl text-[#FF7350] " />
                <span className="text-secondary hidden lg:block ">Language</span>{" "}
                <span className="text-primary hidden lg:block">Lab</span>
              </h3>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-8  menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex items-center">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToggle} />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off  fill-current w-8 h-8 mt-1 mr-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {loading ? (
            "Loading"
          ) : user ? (
            <>
              {user.photoURL ? (
                <img
                  title={user?.displayName}
                  className="w-8 h-8 rounded-full mr-4 cursor-pointer"
                  src={user?.photoURL}
                ></img>
              ) : (
                <img
                  title={user?.displayName}
                  className="w-10 mr-2 cursor-pointer rounded-full"
                  src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000"
                ></img>
              )}
              <button onClick={handleLogOut} className="primary-btn px-6 py-2">
                LogOut
              </button>
            </>
          ) : (
            <Link>
              <Link to="/login">
                {" "}
                <button className="primary-btn px-12 py-3">Login</button>
              </Link>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

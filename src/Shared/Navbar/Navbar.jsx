import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";

const Navbar = () => {
  const {user} = useAuth();
  // console.log(user)
  const {logOut } = useAuth();
  const loading = false;

  const handleLogOut = () =>{
    logOut();
  }
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
        to="classes"
        className={({ isActive }) => (isActive ? "active" : "default")}
      >
        <li>Classes</li>
      </NavLink>
      {user && (
        <NavLink
          to="dashboard"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          <li>Dashboard</li>
        </NavLink>
      )}
    </>
  );
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
              <h3 className="lg:text-2xl uppercase  font-semibold"><span className="text-secondary ">Language</span> <span className="text-primary">Lab</span></h3>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-8  menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
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
              <button onClick={handleLogOut} className="primary-btn px-6 py-2">LogOut</button>
            </>
          ) : (
            <Link>
             <Link to='/login'> <button className="primary-btn px-12 py-3">Login</button></Link>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#EEFF25" : "#fff",
              viewTransitionName: isTransitioning ? "slide" : "",
              background: isActive ? "none" : "none",
            };
          }}
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactUs"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#EEFF25" : "#fff",
              viewTransitionName: isTransitioning ? "slide" : "",
              background: isActive ? "none" : "none",
            };
          }}
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#EEFF25" : "#fff",
              viewTransitionName: isTransitioning ? "slide" : "",
              background: isActive ? "none" : "none",
            };
          }}
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourMenu"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#EEFF25" : "#fff",
              viewTransitionName: isTransitioning ? "slide" : "",
              background: isActive ? "none" : "none",
            };
          }}
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourShop"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "bold",
              color: isActive ? "#EEFF25" : "#fff",
              viewTransitionName: isTransitioning ? "slide" : "",
              background: isActive ? "none" : "none",
            };
          }}
        >
          OUR SHOP
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#15151580]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="text-[30px]">Bistro Boss</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex">
              <div className="flex justify-center items-center mr-2">
                <div className="h-[20px] w-[20px] mr-[10px]">
                  <img src={user.photoURL} referrerPolicy="no-referrer" />
                </div>
                {user.displayName}
              </div>
              <div>
                <button className="btn btn-warning" onClick={handleLogOut}>
                  LogOut
                </button>
              </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="mr-4 btn btn-warning">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-warning">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

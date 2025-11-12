import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { RiProfileFill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";

const Navbar = () => {
  const { user, logout } = use(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => {
        toast(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">All Movies</NavLink>
      </li>
      <li>
        <NavLink to="/movies/my-collection">My Collection</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-primary btn-ghost lg:hidden"
          >
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
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-primary"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-primary">Movie Master Pro</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-primary font-bold">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-2">
            <NavLink onClick={handleLogout} className="btn-primary">
              Logout
            </NavLink>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <span>
                  <ImProfile className="text-primary" size={30}></ImProfile>
                </span>
              </div>
              <ul
                tabIndex={0}
                className="menu text-xs text-primary menu-sm dropdown-content mt-3 Z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {user.photoURL ? (
                  <li className="flex justify-center items-center">
                    <img className="w-10 h-10 inline" src={user.photoURL} />
                  </li>
                ) : (
                  ""
                )}
                <li>User: {user.displayName}</li>

                <li>Email: {user.email}</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <NavLink className="btn-primary w-20" to="/login">
              Login
            </NavLink>
            <NavLink className="btn-primary w-20" to="/registration">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

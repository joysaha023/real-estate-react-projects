import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const linkNav = (
        <>
           <li>
              <NavLink to={"/"} className={({isActive}) =>
               isActive ? "bg-white hover:bg-white text-[#0077be] border-0 font-semibold underline" : "font-medium"
              }
              >Home</NavLink>
            </li>
            <li>
              <NavLink to={"/agent"} className={({isActive}) =>
               isActive ? "bg-white hover:bg-white text-[#0077be] border-0 font-semibold underline" : "font-medium"
              }>Agents</NavLink>
            </li>
            <li>
              <NavLink to={"/specialEstate"} className={({isActive}) =>
               isActive ? "bg-white hover:bg-white text-[#0077be] border-0 font-semibold underline" : "font-medium"
              }>Special Estate</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"} className={({isActive}) =>
               isActive ? "bg-white hover:bg-white text-[#0077be] border-0 font-semibold underline" : "font-medium"
              }>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className={({isActive}) =>
               isActive ? "bg-white hover:bg-white text-[#0077be] border-0 font-semibold underline" : "font-medium"
              }>Contact Us</NavLink>
            </li>
        </>
    );


  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-none w-52"
            >
              {linkNav}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost gap-0 text-2xl font-bold hover:bg-white">Haven<span className="text-[#0077be]">HQ</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {linkNav}
          </ul>
        </div>

        <div className="navbar-end">
          {/* <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  title="tooltip"
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co/6JyZF0K/user.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-none w-52"
            >
              <li>
                <a className="justify-between">User Name</a>
              </li>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
          <Link to={"/login"} className="btn bg-[#0077be] rounded-none text-white hover:text-black">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

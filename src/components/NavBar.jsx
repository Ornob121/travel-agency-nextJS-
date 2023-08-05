import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { BsHandbag } from "react-icons/bs";
const NavBar = () => {
  const navLink = (
    <>
      <NavLink
        href="/"
        exact={"/"}
        activeClassName="text-[#3FD0D4]"
        className="mx-10 text-lg font-semibold"
      >
        Home
      </NavLink>
      <NavLink
        href="/destinations"
        exact={"/"}
        activeClassName="text-[#3FD0D4]"
        className="mx-10 text-lg font-semibold"
      >
        Destinations
      </NavLink>
      <NavLink
        href="/tours"
        exact={"/"}
        activeClassName="text-[#3FD0D4]"
        className="mx-10 text-lg font-semibold"
      >
        Tours
      </NavLink>
      <NavLink
        href="/blog"
        exact={"/"}
        activeClassName="text-[#3FD0D4]"
        className="mx-10 text-lg font-semibold"
      >
        Blog
      </NavLink>
      <NavLink
        href="/shop"
        exact={"/"}
        activeClassName="text-[#3FD0D4]"
        className="mx-10 text-lg font-semibold"
      >
        Shop
      </NavLink>
    </>
  );

  return (
    <nav className="shadow-sm sticky top-0 z-50 left-0 right-0 ">
      <div className="navbar bg-base-100">
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
              {navLink}
            </ul>
          </div>
          <Image
            src="/logo.png"
            width={150}
            // onBlur={true}
            height={100}
            alt="This is the website logo called SIBERIAN SPIKE"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end flex items-center">
          <>
            <BsHandbag className="text-3xl" />
          </>
          <>
            <button className="btn btn-info ml-5">Login</button>
          </>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

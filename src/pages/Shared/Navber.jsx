import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import AuthContext from "../../Context/AuthContext";

const Navber = () => {
  const { user, signoutuser } = useContext(AuthContext);
  const handlesignout = () => {
    signoutuser()
      .then(() => {
        console.log("sussecfulyy sign out");
      })
      .catch((error) => {
        console.log("failed to sign out", error.message);
      });
  };

  const link = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/findjob"}>Find Job</NavLink>
      <NavLink to={"/postjob"}>Post a job</NavLink>
      {/* <NavLink to={"/blog"}>Blog</NavLink> */}
      <NavLink to={"/mypostjob"}>My postedjob</NavLink>
      <NavLink to={"/application"}>My appliications</NavLink>
    </>
  );
  return (
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
            className="menu gap-5 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <span className="text-[#18a599]">Jobs</span>Hub
        </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal gap-5 px-1">{link}</ul>
      </div>
      <div className="navbar-end gap-5 ">
        {user ? (
          <>
            <p>
              Hello{" "}
              <button onClick={handlesignout} className="btn">
                signout
              </button>
            </p>
          </>
        ) : (
          <>
            <p>plz log in</p>
          </>
        )}
        <span className="bg-slate-200 p-2 rounded-full text-[#18a599]">
          <MdNotificationsActive />
        </span>
        <Link
          to={"/register"}
          className="btn border-2 text-white  rounded-md bg-[#18a599] "
        >
          Sign Up
        </Link>
        <Link to={"/signin"} className="btn">
          <FaRegUserCircle />
          Sign in{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navber;

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="h-12 w-screen flex  justify-between text-center items-center px-4 bg-gradient-to-l from-cyan-900 to to-blue-300 z-50 fixed top-0 left-0">
        <div>
          <p>logo</p>
        </div>
        <div className="text-white">
          <ul className="flex justify-between gap-12 ">
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
            </div>

            <div>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
            </div>

            <div>
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>

            <div>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="flex gap-6">
          <button className="bg-green-400 rounded-xl p-1 w-28 text-white">
            <Link to="/register">Register</Link>
          </button>
          <button className="bg-white rounded-xl p-1 w-28 text-green-400">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;

import React from "react";
import login from "../assets/image.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end  lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src={login}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 ">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="col-span-6  sm:items-center sm:gap-4">
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Examination Website
              </h1>

              <p className="mt-4 leading-relaxed text-xl text-center mb-12 text-gray-500">
                Log in Now!!!
              </p>
            </div>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label
                  htmlFor="Username"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "} <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  id="Username"
                  name="Username"
                  required
                  className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "} <span className="text-red-600">*</span>
                </label>

                <input
                  type="password"
                  required
                  id="Password"
                  name="password"
                  className="mt-1 w-full h-8 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Login Now
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Don't have an account?
                  <Link to="/register" className="text-gray-700 underline">
                    Register Now!!!
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;

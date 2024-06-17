import React from "react";
import formbackgroundimage from "../assets/Container.png";

const DematAccountForm = () => {
  return (
    <div className="w-full h-[750px]  mb-14">
      <div className="w-full flex h-full">
        {/* Left Side */}
        <div className="w-[50%] h-full bg-purple ">
          <div className="flex flex-col h-full w-[80%] mx-auto justify-center ">
            <h1 className="text-5xl">
              Lorem ipsum dolor sit amet consectetur.r
            </h1>

            <p className="mt-5 text-2xl w-[80%]">
              Lorem ipsum dolor sit amet consectetur. Enim nisl venenatis
              gravida scelerisque posuere bibendum nunc at.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="w-[50%]  bg-cover "
          style={{ backgroundImage: `url(${formbackgroundimage})` }}
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="container w-[70%] m-auto   xl:max-w-3xl  h-auto flex my-auto bg-white rounded-lg shadow overflow-hidden">
              <div className="w-full px-8 py-8">
                <form method="post">
                  <h1 className="text-4xl font-medium">
                    Open your FREE Demat Account
                  </h1>

                  <div className="mb-4 mt-4">
                    {/* <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label> */}
                    <input
                      className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                      id="email"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3 mt-4">
                    {/* <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label> */}
                    <input
                      className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                      id="password"
                      type="text"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="flex w-full">
                    <select
                      id="states"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm  border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-[20%] h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="MI">+91</option>
                    </select>
                     <input
                      className="text-sm bg-gray-200 appearance-none  border-l-2 border-gray-300 w-[90%] py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                      id="password"
                      type="text"
                      placeholder="Email address"
                    />
                  </div>

                  <div className="flex w-full mt-8">
                    <button
                      className="w-full bg-purple hover:bg-gray-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DematAccountForm;

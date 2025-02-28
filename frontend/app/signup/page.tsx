import React from "react";
import { FaFacebook } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="flex flex-col items-center mt-8 ">
      <div className="flex flex-col gap-2 h-[650px]">
        <div className="w-80 h-auto border border-gray-500 flex flex-col  items-center rounded gap-4 pt-8 pb-5">
          <h2 className="font-bold text-4xl inline-block tracking-tight scale-x-90 scale-y-125 ">
            𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂
          </h2>
          <h4 className="w-64 text-sm font-bold text-center  text-gray-400">
            Sign up to see photos and videos from your friends.
          </h4>
          <div className="flex items-center justify-center gap-2 text-white text-sm font-bold w-64 h-9 bg-blue-500 rounded-lg cursor-pointer ">
            <FaFacebook style={{ color: "white", fontSize: "20px" }} />
            Login with Facebook
          </div>

          <hr className="border w-64 border-gray-600 mt-[8px] " />
          <h4 className="relative text-center text-gray-400 text-sm w-10 bg-white dark:bg-black bottom-[28px] leading-none">
            OR
          </h4>

          <div className="flex flex-col gap-2 ">
            <input
              className=" rounded w-64 h-9 dark:bg-gray-900 border border-gray-500  placeholder:pl-1 pl-2 text-xs  "
              type="text"
              placeholder="Mobile Number or Email"
            />
            <input
              className=" rounded w-64 h-9 dark:bg-gray-900 border border-gray-500 placeholder:pl-1 pl-2 text-xs  "
              type="text"
              placeholder="Password"
            />
            <input
              className=" rounded w-64 h-9 dark:bg-gray-900 border border-gray-500 placeholder:pl-1 pl-2 text-xs  "
              type="text"
              placeholder="Fullname"
            />
            <input
              className=" rounded w-64 h-9 dark:bg-gray-900 border border-gray-500 placeholder:pl-1 pl-2 text-xs  "
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="w-64 text-xxs  text-center text-gray-500">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <span className="text-xs text-gray-300 cursor-pointer">
              {" "}
              Learn More
            </span>
          </div>
          <div className="w-64 text-xxs  text-center text-gray-500">
            By signing up, you agree to our{" "}
            <span className="text-xm text-gray-300 cursor-pointer ">
              {" "}
              Terms
            </span>{" "}
            ,{" "}
            <span className="text-xm text-gray-300 cursor-pointer ">
              Privacy
            </span>{" "}
            <span className="text-xm text-gray-300 cursor-pointer ">
              {" "}
              Policy
            </span>{" "}
            and{" "}
            <span className="text-xm text-gray-300 cursor-pointer ">
              {" "}
              Cookies Policy{" "}
            </span>
            .
          </div>

          <div className="w-64 h-7 rounded  flex items-center justify-center bg-blue-500 text-sm font-bold cursor-pointer ">
            sign up
          </div>
        </div>
        <div className="w-80 h-10 border border-gray-500 text-xs flex items-center justify-center rounded">
          Have an account?
          <span className="text-blue-500 text-sm cursor-pointer ">Log in</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;

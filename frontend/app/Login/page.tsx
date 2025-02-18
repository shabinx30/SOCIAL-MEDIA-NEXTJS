import React from "react";
import { FaFacebook } from "react-icons/fa";

const Page = () => {
  return (
    <div className="flex justify-center mt-8 w-screen">
  <div className="flex flex-col items-center gap-2">
    <div className="w-80 h-96 border border-gray-500 flex flex-col gap-7 items-center rounded">
      <h2 className="font-bold text-4xl inline-block tracking-tight scale-x-90 scale-y-125 p-6">
        𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-1">
          <input
            type="text"
            placeholder="Email"
            className="w-64 h-9 rounded bg-gray-900 border border-gray-500 focus:outline-none text-xxs pl-3 placeholder:pl-1 "
          />
          <input
            type="password"
            placeholder="password"
            className="w-64 h-9 rounded bg-gray-900 border border-gray-500 focus:outline-none text-xxs pl-3 placeholder:pl-1"
          />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <button className="bg-blue-500 w-64 h-9 rounded-lg mt-4">
            Log in
          </button>
          <span className="block text-sm pt-2">OR</span>
          <span className="flex items-center gap-2 text-blue-500">
            <FaFacebook style={{ color: "#1877F2",fontSize:"20px" }} />
            Login with Facebook
          </span>
          <span className="text-sm">Forgot password?</span>
        </div>
      </div>
    </div>
    <div className="w-80 h-14 border border-gray-500 text-xs flex items-center justify-center rounded">
      Don't have an account? <span className="text-blue-500 text-sm">Sign up</span>
    </div>
  </div>
</div>

  );
};
export default Page;

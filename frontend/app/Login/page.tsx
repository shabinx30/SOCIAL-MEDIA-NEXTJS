import React from "react";
import { FaFacebook } from "react-icons/fa";

const Page = () => {
  return (
    <div className="flex flex-col gap-2  items-center mt-5">
      <div className="w-72 h-96 border border-gray-500 flex flex-col gap-7 items-center">
        <h2 className="font-bold  text-[1.35rem]  inline-block tracking-tight scale-x-90 scale-y-125">
          𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4 ">
            <input type="text" placeholder="Email" className="w-56 h-8 rounded bg-transparent border-2 border-gray-500 focus:outline-none text-xxs placehol" />
            <input type="password" placeholder="password" className="w-56 h-8 rounded" />
          </div>
          <div>
            <button className="bg-blue-500 w-56 h-8 rounded">Log in </button>
            <span className="block">OR</span>

            <span className="flex items-center gap-2">
              <FaFacebook style={{ color: "#1877F2" }} />
              Login with facebook
            </span>
            <span>Forgot password ?</span>
          </div>
        </div>
      </div>
      <div className="w-80 h-10 border border-gray-500 "></div>
    </div>
  );
};
export default Page;

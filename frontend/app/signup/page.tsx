"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";

const Signup = () => {
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup Data:", { mobileOrEmail, password, fullname, username });
    // Add signup logic here (e.g., API call)
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col gap-2 h-[650px]">
        <div className="w-80 h-auto border border-gray-500 flex flex-col items-center rounded gap-4 pt-8 pb-5">
          <h2 className="font-bold text-4xl inline-block tracking-tight scale-x-90 scale-y-125">
            𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂
          </h2>
          <h4 className="w-64 text-sm font-bold text-center text-gray-400">
            Sign up to see photos and videos from your friends.
          </h4>
          <div className="flex items-center justify-center gap-2 text-white text-sm font-bold w-64 h-9 bg-blue-500 rounded-lg cursor-pointer">
            <FaFacebook style={{ color: "white", fontSize: "20px" }} />
            Login with Facebook
          </div>

          <div className="relative w-64">
            <hr className="border w-full border-gray-600" />
            <h4 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-black text-gray-400 text-sm px-2">
              OR
            </h4>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              className="rounded w-64 h-9 dark:bg-gray-900 border border-gray-500 placeholder:pl-1 pl-2 text-xs"
              type="text"
              placeholder="Mobile Number or Email"
              value={mobileOrEmail}
              onChange={(e) => setMobileOrEmail(e.target.value)}
              aria-label="Mobile Number or Email"
            />
            <input
              className="rounded w-64 h-9 dark:bg-gray-900 border border-gray-500 placeholder:pl-1 pl-2 text-xs"
              type="password" // Changed to password type for security
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <input
              className="rounded w-64 h-9 dark:bg-gray-900 border border-gray-500 placeholder:pl-1 pl-2 text-xs"
              type="text"
              placeholder="Full Name" // Adjusted placeholder for consistency
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              aria-label="Full Name"
            />
            <input
              className="rounded w-64 h-9 dark:bg-gray-900 border border-gray-500 placeholder:pl-1 pl-2 text-xs"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
            />
            <button
              type="submit"
              className="w-64 h-7 rounded flex items-center justify-center bg-blue-500 text-sm font-bold cursor-pointer text-white"
            >
              Sign Up
            </button>
          </form>

          <div className="w-64 text-xxs text-center text-gray-500">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <span className="text-xs text-gray-300 cursor-pointer">
              Learn More
            </span>
          </div>
          <div className="w-64 text-xxs text-center text-gray-500">
            By signing up, you agree to our{" "}
            <span className="text-xs text-gray-300 cursor-pointer">Terms</span>
            ,{" "}
            <span className="text-xs text-gray-300 cursor-pointer">
              Privacy
            </span>{" "}
            <span className="text-xs text-gray-300 cursor-pointer">
              Policy
            </span>{" "}
            and{" "}
            <span className="text-xs text-gray-300 cursor-pointer">
              Cookies Policy
            </span>
            .
          </div>
        </div>
        <div className="w-80 h-10 border border-gray-500 text-xs flex items-center justify-center rounded">
          Have an account?{" "}
          <Link href={'/login'}>
            <span className="text-blue-500 text-sm cursor-pointer">Log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;  
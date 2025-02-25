"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./side_bar";

const RouteChecker = ({ children }: { children: React.ReactNode }) => {
  const CurrentRoute = usePathname();
  console.log(CurrentRoute);

  if (CurrentRoute.toLowerCase() === "/login" || CurrentRoute.toLowerCase() === "/signup") {
    return <>{children}</>
  }

  return (
    <>
      <Sidebar />
      <div className="pl-2 md:pl-[6rem] lg:pl-[15.3em]">{children}</div>
    </>
  );
};

export default RouteChecker;

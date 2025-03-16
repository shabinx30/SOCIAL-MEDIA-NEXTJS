"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./side_bar";

const RouteChecker = ({ children }: { children: React.ReactNode }) => {
  const CurrentRoute = usePathname();

  if (CurrentRoute === "/login" || CurrentRoute === "/signup") {
    return <>{children}</>
  }

  return (
    <>
      <Sidebar />
      <div className="md:pl-[6rem] lg:pl-[17.3em]">{children}</div>
    </>
  );
};

export default RouteChecker;

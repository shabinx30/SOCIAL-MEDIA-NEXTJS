"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./side_bar";

const RouteChecker = ({ children }: { children: React.ReactNode }) => {
  const CurrentRoute = usePathname();
  const set = new Set(['/login', '/signup', '/stories'])

  if (set.has(CurrentRoute)) {
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

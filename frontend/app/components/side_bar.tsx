import React from "react";
import { CgSearch } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import Link from 'next/link'

const menuItems = [
  { icon: "https://cdn-icons-png.flaticon.com/512/2932/2932143.png", label: "Home", isImg: true, href: "/" },
  { icon: <CgSearch size={30} />, label: "Search", href: "/search" },
  { icon: <MdOutlineExplore size={30} />, label: "Explore", href: "/explore" },
  { icon: "https://cdn-icons-png.flaticon.com/512/12595/12595880.png", label: "Reels", isImg: true, href: "/reels" },
  { icon: <RiMessengerLine size={30} />, label: "Messages", href: "/messages" },
  { icon: <FaRegHeart size={26} />, label: "Notifications", href: "/notifications" },
  { icon: "https://cdn-icons-png.flaticon.com/512/10103/10103630.png", label: "Create", isImg: true, href: "/create" },
  { icon: "https://cdn-icons-png.flaticon.com/512/18827/18827853.png", label: "Profile", isImg: true, href : "/profile" },
  { icon: "https://cdn-icons-png.flaticon.com/512/13894/13894991.png", label: "More", isImg: true, href: "/more" },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-[16.5%] border-r border-[#2e2e2e]">
      <h2 className="font-bold px-6 pt-9 text-[1.35rem] inline-block tracking-tight scale-x-90 scale-y-125">𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂</h2>
      <div className="px-3 pt-10">
        {menuItems.map(({ icon, label, isImg, href }, index) => (
          <Link href={href}>
            <div
              key={index}
              className="flex gap-5 items-center dark:hover:bg-[#1A1A1A] hover:bg-[#F2F2F2] transition duration-300 px-4 py-3 rounded-lg cursor-pointer mt-2"
            >
              {isImg ? (
                <img className="dark:invert w-[26px]" src={icon as string} alt={label} />
              ) : (
                icon
              )}
              <p className="text-base">{label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
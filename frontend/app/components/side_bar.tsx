"use client"

// icons
import { MdOutlineExplore, MdExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RiMessengerLine, RiMessengerFill } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { FaHeart } from "react-icons/fa6";

import Link from 'next/link'
import { usePathname } from "next/navigation";
import Image from "next/image";

const menuItems = [
  { icon: "https://cdn-icons-png.flaticon.com/256/2932/2932143.png", label: "Home", isImg: true, href: "/" },
  { icon: "https://cdn-icons-png.flaticon.com/256/17213/17213017.png", label: "Search", isImg: true, href: "/search" },
  { icon: <MdOutlineExplore size={30} />, label: "Explore", href: "/explore" },
  { icon: "https://cdn-icons-png.flaticon.com/256/12595/12595880.png", label: "Reels", isImg: true, href: "/reels" },
  { icon: <RiMessengerLine size={30} />, label: "Messages", href: "/messages" },
  { icon: <FaRegHeart size={26} />, label: "Notifications", href: "/notifications" },
  { icon: "https://cdn-icons-png.flaticon.com/256/10103/10103630.png", label: "Create", isImg: true, href: "/create" },
  { icon: "https://cdn-icons-png.flaticon.com/256/18827/18827853.png", label: "Profile", isImg: true, href : "/shabinsharih" },
  { icon: "https://cdn-icons-png.flaticon.com/256/13894/13894991.png", label: "More", isImg: true, href: "/more" },
];

const activeMenuItems = [
  { icon: "https://cdn-icons-png.flaticon.com/256/3405/3405771.png", isImg: true },
  { icon: "https://cdn-icons-png.flaticon.com/256/151/151773.png", isImg: true },
  { icon: <MdExplore size={30} /> },
  { icon: "https://cdn-icons-png.flaticon.com/256/12595/12595820.png", isImg: true },
  { icon: <RiMessengerFill size={30} /> },
  { icon: <FaHeart size={26} /> },
  { icon: "https://cdn-icons-png.flaticon.com/256/9790/9790398.png", isImg: true },
  { icon: "https://cdn-icons-png.flaticon.com/256/18827/18827853.png", isImg: true },
  { icon: "https://cdn-icons-png.flaticon.com/256/8867/8867520.png", isImg: true },
]

const Sidebar = () => {

  const CurrentRoute = usePathname()
  
  return (
    <>
      {/* Sidebar */}
      <div className="fixed h-screen md:w-[4.5rem] lg:w-[15.3em] bg-white dark:bg-black hidden md:block border-r border-[#DBDBDB] dark:border-[#2e2e2e]">
        <Link href={'/'}>
          <h2 className="select-none font-bold px-6 pt-9 text-[1.35rem] tracking-tight scale-x-90 scale-y-125 hidden lg:block">
            𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂
          </h2>
          <SiInstagram size={25} className="hidden md:block lg:hidden mx-6 mt-11 text-dark dark:text-white" />
        </Link>
        <div className="px-3 pt-10">
          {menuItems.map(({ icon, label, isImg, href }, index) => (
            <Link href={href} key={index}>
              <div className="relative flex gap-5 items-center dark:active:brightness-50 dark:hover:bg-[#1A1A1A] hover:bg-[#F2F2F2] transition duration-200 px-2.5 py-[0.7em] rounded-lg mt-2">
                {/* count */}
                {href == '/messages' ? <div className="bg-[#FF3040] border-[3px] border-white dark:text-white dark:border-black z-10 left-6 top-[0.4rem] absolute w-[1.6em] h-[1.6em] flex justify-center items-center rounded-full text-sm font-mono">{3}</div> : <></>}
                {CurrentRoute == href ? (
                  activeMenuItems[index].isImg ? (
                    <Image width={26} height={26} className="dark:invert w-[26px]" src={activeMenuItems[index].icon as string} alt={label} />
                  ) : (
                    activeMenuItems[index].icon
                  )
                ) : (
                  isImg ? (
                    <Image width={26} height={26} className="dark:invert w-[26px]" src={icon as string} alt={label} />
                  ) : (
                    icon
                  )
                )}
                <p className={`hidden lg:block ${CurrentRoute == href ? "font-bold" : "text-base"}`}>{label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed z-10 bottom-0 left-0 md:hidden w-full h-[3.5em] bg-white dark:bg-black border-t border-[#DBDBDB] dark:border-[#2e2e2e] py-3 px-6">
        <div className="flex justify-between items-center w-full">
          {/* Home */}
          <Link href={'/'}>
            {CurrentRoute == "/" ? (<Image width={26} height={26} className="dark:invert w-[26px]" src={activeMenuItems[0].icon as string} alt={"Home"} />) : (<Image width={24} height={24} className="dark:invert w-[24px]" src={menuItems[0].icon as string} alt={"Home"} />)}
          </Link>
          {/* Search */}
          <Link href={'/search'}>
            {CurrentRoute == "/search" ? (<Image width={24} height={24} className="dark:invert w-[24px]" src={activeMenuItems[1].icon as string} alt={"Search"} />) : (<Image width={26} height={26} className="dark:invert w-[26px]" src={menuItems[1].icon as string} alt={"Home"} />)}
          </Link>
          {/* Explore */}
          <Link href={'/explore'}>
            {CurrentRoute == "/explore" ? (activeMenuItems[2].icon) : (menuItems[2].icon)}
          </Link>
          {/* Reels */}
          <Link href={'/reels'}>
            {CurrentRoute == "/reels" ? (<Image width={26} height={26} className="dark:invert w-[26px]" src={activeMenuItems[3].icon as string} alt= {"Reels"} />) : (<Image width={26} height={26} className="dark:invert w-[26px]" src={menuItems[3].icon as string} alt={"Reels"} />)}
          </Link>
          {/* Profile */}
          <Link href={'/shabinsharih'}>
            {CurrentRoute == "/profile" ? (<Image width={27} height={27} className="dark:invert w-[27px]" src={activeMenuItems[7].icon as string} alt={"Profile"} />) : (<Image width={27} height={27} className="dark:invert w-[27px]" src={menuItems[7].icon as string} alt={"Profile"} />)}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
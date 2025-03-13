"use client"

import Image from "next/image";
import { memo, ReactNode } from "react";

// Icons
import { FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { LuBookmark } from "react-icons/lu";

// Components
import Media from "./components/home/media/Media";
import Story from "./components/home/story/Story";
import PopUp from "./components/home/popup/PopUp";

// Context
import { useAppContext } from "@/app/context/AppContext";

// Constants
const PROFILE_IMAGE = "https://instagram.fcok3-2.fna.fbcdn.net/v/t51.2885-19/476501464_1523240058345855_3565333406899966342_n.jpg?_nc_ht=instagram.fcok3-2.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AHku2GBAwVT0RJbW0qNB0e9Klc1URYJa7oUdN5mH68D-1X9yPAw8CAF0DxQkOjFYgKyNt7htnmgrYd6BhVPvZQV&_nc_ohc=y1eTcK4XTocQ7kNvgG1yK3c&_nc_gid=10bd902f436144a48546adeab947251b&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYGizs5U10YpANF8aSXUKVdGSIUR99TVSZZrClFcX-j-Lw&oe=67D64B9A&_nc_sid=7d3ac5";

// Memoized components for performance
const MemoizedStory = memo(Story);
const MemoizedMedia = memo(Media);
const MemoizedPopUp = memo(PopUp);

const ProfileImage = ({ size = 30, className = "" }) => (
    <Image
        className={`rounded-full ${className}`}
        loading="lazy"
        src={PROFILE_IMAGE}
        alt="profile"
        width={size}
        height={size}
    />
);

const IconButton = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <div className={`cursor-pointer ${className}`}>
        {children}
    </div>
);

const Post = memo(() => {
    const { isPop } = useAppContext();

    return (
        <div className={`flex justify-center ${isPop ? 'lg:pr-2' : ''}`}>
            <div className="pt-6 w-full max-w-lg">
                <div className="flex justify-between px-2">
                    <div className="flex gap-2">
                        <ProfileImage className="my-auto cursor-pointer" />
                        <div>
                            <p className="font-semibold text-sm cursor-pointer">
                                shabinsharih <span className="text-[#a1a1a1] text-xs font-light cursor-default">{" • "} 48m</span>
                            </p>
                            <p className="text-sm">♪ music</p>
                        </div>
                    </div>
                    <div className="flex gap-4 h-8">
                        <button className="px-5 py-1 bg-[#efefef] hover:bg-[#DBDBDB] dark:bg-[#333333] rounded-lg dark:hover:bg-[#262626] text-sm duration-150">
                            Follow
                        </button>
                        <MemoizedPopUp />
                    </div>
                </div>

                <MemoizedMedia />

                <div className="flex justify-between pt-3 px-2">
                    <div className="flex gap-4">
                        <IconButton><FaRegHeart size={26} /></IconButton>
                        <IconButton>
                            <Image
                                width={26}
                                height={22}
                                className="dark:invert select-none"
                                src="https://cdn-icons-png.flaticon.com/256/3031/3031126.png"
                                alt="comments"
                            />
                        </IconButton>
                        <IconButton>
                            <Image
                                width={26}
                                height={20}
                                className="dark:invert select-none h-6 rotate-[17.5deg]"
                                src="https://cdn-icons-png.flaticon.com/256//2697/2697852.png"
                                alt="share"
                            />
                        </IconButton>
                    </div>
                    <IconButton><LuBookmark size={26} /></IconButton>
                </div>

                <div className="px-2">
                    <p className="py-2 text-[0.9em] font-semibold cursor-pointer">44,832 likes</p>
                    <p className="text-[0.8em] font-light cursor-pointer">
                        <span className="font-semibold text-sm mr-2">shabinsharih</span>
                        The highly anticipated follow up to one of our 2024 music videos of the year. EYECANDY FEATURE: HANUMANKIND - RUN IT...
                    </p>
                    <p className="text-[#7a7a7a] text-[0.95em] my-2 cursor-pointer">View all 45 comments</p>
                    <input
                        type="text"
                        placeholder="Add a comment"
                        className="w-full placeholder-[#7a7a7a] text-[0.95em] outline-none bg-transparent"
                    />
                </div>
                <hr className="border-t-2 border-[#c8c8c8] dark:border-[#282828] mt-4" />
            </div>
        </div>
    );
});

Post.displayName = "Post";

const MobileHeader = () => (
    <div className="md:hidden flex justify-between bg-white dark:bg-black w-full pt-2 pb-6 px-2">
        <h2 className="select-none font-semibold text-[1.75rem] tracking-tight scale-x-90 scale-y-125">
            𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂
        </h2>
        <div className="flex gap-6 pt-2 pr-2">
            <IconButton><FaRegHeart size={26} /></IconButton>
            <IconButton><RiMessengerLine size={28} /></IconButton>
        </div>
    </div>
);

const SuggestedUsers = () => {
    const { isPop } = useAppContext();

    return (
        <div className={`hidden lg:block pt-3 w-[35%] ${isPop ? 'lg:pr-10 lg:pl-3.5' : 'px-6'}`}>
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <ProfileImage size={45} />
                    <div>
                        <p className="text-sm font-semibold">shabinsharih</p>
                        <p className="text-[#a1a1a1] text-sm">SHABIN</p>
                    </div>
                </div>
                <div className="my-auto">
                    <p className="text-[#0095F6] text-sm cursor-pointer">Switch</p>
                </div>
            </div>
            <div className="flex justify-between text-sm font-semibold pt-8">
                <p className="text-[#a1a1a1]">Suggested for you</p>
                <p className="cursor-pointer">See All</p>
            </div>
        </div>
    );
};

const Home = () => {
    const storyItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const postItems = [1, 2, 3, 4, 5];

    return (
        <>
            <MobileHeader />
            <div className="flex md:pt-6">
                <div className="block w-full lg:w-[65%]">
                    <div className="inline-block w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-2">
                        {storyItems.map((id) => <MemoizedStory key={id} />)}
                    </div>
                    <div className="block">
                        {postItems.map((id) => <Post key={id} />)}
                    </div>
                </div>
                <SuggestedUsers />
            </div>
        </>
    );
};

export default Home;
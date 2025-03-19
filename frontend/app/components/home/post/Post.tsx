"use client"

import { useAppContext } from "@/app/context/AppContext";
import Image from "next/image";
import { useState } from "react";

//icons
import { LuBookmark } from "react-icons/lu";
import { MdMoreVert } from "react-icons/md"
import { FaHeart } from 'react-icons/fa6'
import { FaRegHeart } from "react-icons/fa";

//components
import Media from "../media/Media";
import Link from "next/link";

const Post = () => {

    const { isPop, setPop } = useAppContext();
    const [like, setAnimate] = useState('mini-like-ani')
    const [isLike, setLike] = useState(false)
    const [isFollow, setFollow] = useState(false)

    function animateLike() {
        setAnimate('mini-like-ani')
        setLike(true)
        setTimeout(() => {
            setAnimate('')
        }, 500);
    }

    return (
        <div className={`flex justify-center ${isPop ? 'lg:pr-[0.6em]' : ''}`}>
            <div className="pt-6 w-[30em]">
                <div className="flex justify-between px-2">
                    <div className="flex gap-2">
                        <Link href={'/shabinsharih'}>
                            <Image className="rounded-full my-auto cursor-pointer" loading="lazy" src="https://instagram.fcok3-2.fna.fbcdn.net/v/t51.2885-19/476501464_1523240058345855_3565333406899966342_n.jpg?_nc_ht=instagram.fcok3-2.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AHku2GBAwVT0RJbW0qNB0e9Klc1URYJa7oUdN5mH68D-1X9yPAw8CAF0DxQkOjFYgKyNt7htnmgrYd6BhVPvZQV&_nc_ohc=y1eTcK4XTocQ7kNvgG1yK3c&_nc_gid=10bd902f436144a48546adeab947251b&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYGizs5U10YpANF8aSXUKVdGSIUR99TVSZZrClFcX-j-Lw&oe=67D64B9A&_nc_sid=7d3ac5" alt="profile" width={30} height={30} />
                        </Link>
                        <div className="block">
                            <Link href={'/shabinsharih'}>
                                <p className="font-semibold text-sm cursor-pointer">shabinsharih <span className="text-[#a1a1a1] text-xs font-light cursor-default">{" • "} 48m</span></p>
                            </Link>
                            <p className="text-sm">♪ music</p>
                        </div>
                    </div>
                    <div className="flex gap-4 h-[2em]">

                        {/* follow & unfollow */}
                        {isFollow ? 
                        (<button onClick={() => setFollow(false)} className="px-5 py-1 bg-[#efefef] hover:bg-[#DBDBDB] dark:bg-[#333333] rounded-lg dark:hover:bg-[#262626] text-sm duration-150">
                            Following
                        </button>) 
                            : 
                        (<button onClick={() => setFollow(true)} className="px-5 py-1 bg-[#efefef] hover:bg-[#DBDBDB] dark:bg-[#333333] rounded-lg dark:hover:bg-[#262626] text-sm duration-150">
                            Follow
                        </button>)}

                        {/* more button */}
                        <MdMoreVert
                            onClick={() => setPop(true)}
                            className="cursor-pointer my-auto"
                            size={20}
                        />
                    </div>
                </div>
                <Media animateLike={animateLike} />
                <div className="flex justify-between pt-3 px-2">
                    <div className="flex gap-4 cursor-pointer">
                        
                        {/* like */}
                        {isLike ?
                            <FaHeart size={26} className={`text-[#E8174B] ${like}`} onClick={() => setLike(false)} />
                            :
                            <FaRegHeart size={26} className={`${like}`} onClick={() => setLike(true)} />
                        }
                        <Image width={26} height={22} className="dark:invert select-none" src="https://cdn-icons-png.flaticon.com/256/3031/3031126.png" alt="comments" />
                        <Image width={26} height={20} className="dark:invert select-none h-6 rotate-[17.5deg]" src="https://cdn-icons-png.flaticon.com/256//2697/2697852.png" alt="comments" />
                    </div>
                    <LuBookmark className="cursor-pointer" size={26} />
                </div>
                <div className="px-2">
                    <p className="py-2 text-[0.9em] font-semibold select-none cursor-pointer">44,832 likes</p>
                    <p className="text-[0.8em] font-light cursor-pointer"><span className="font-semibold text-sm mr-2">shabinsharih</span>The highly anticipated follow up to one of our 2024 music videos of the year. EYECANDY FEATURE: HANUMANKIND - RUN IT...</p>
                    <p className="text-[#7a7a7a] text-[0.95em] my-2 cursor-pointer">View all 45 comments</p>
                    <input type="text" placeholder="Add a comment" className="placeholder-[#7a7a7a] text-[0.95em] outline-none bg-transparent" />
                </div>
                <hr className="border-t-2 border-[#c8c8c8] dark:border-[#282828] mt-[1em]" />
            </div>
        </div>
    )
}

export default Post
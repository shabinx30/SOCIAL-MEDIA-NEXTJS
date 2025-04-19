"use client"

import { useAppContext } from "@/context/AppContext";
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
                <div className="flex justify-between items-center pl-4 pr-2.5">
                    <div className="flex gap-2 leading-[1]">
                        <Link href={'/shabinsharih'}>
                            <Image className="rounded-full cursor-pointer" loading="lazy" src="/Images/profile.jpg" alt="profile" width={32} height={32} />
                        </Link>
                        <div className="block">
                            <Link href={'/shabinsharih'}>
                                <p className="font-semibold text-[0.85em] cursor-pointer">shabinsharih{" • "}<span className="text-[#a1a1a1] text-[0.75em] cursor-default">48m</span></p>
                            </Link>
                            <p className="text-sm">♪ music</p>
                        </div>
                    </div>
                    <div className="flex gap-3 h-[2em]">

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
                <div className="flex justify-between pt-3 px-3">
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
                <div className="px-3">
                    <p className="py-2 text-[0.9em] font-semibold select-none cursor-pointer">44,832 likes</p>
                    <p className="text-[0.8em] font-light cursor-pointer"><span className="font-semibold text-sm mr-2">shabinsharih</span>The highly anticipated follow up to one of our 2024 music videos of the year. EYECANDY FEATURE: HANUMANKIND - RUN IT...</p>
                    <p className="text-[#7a7a7a] text-[0.95em] my-2 cursor-pointer">View all 45 comments</p>
                    <input type="text" placeholder="Add a comment" className="placeholder-[#7a7a7a] text-[0.95em] outline-none bg-transparent" />
                </div>
                <hr className="border-t border-[#d9d9d9] dark:border-[#282828] mt-[1em]" />
            </div>
        </div>
    )
}

export default Post
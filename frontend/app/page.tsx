"use client"

import Image from "next/image";
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';

import "../components/home/media/media.css"

//icons
import { FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { CgSpinner } from "react-icons/cg";


// components
import Story from "../components/home/story/Story";
import { useAppContext } from "./context/AppContext";
import { mockPosts } from "./mockData"


const Post = dynamic(() => import("../components/home/post/Post"), {
    // loading: () => <p>Loading Posts...</p>,
    ssr: false // Important for client-only components
});


const Home = () => {

    const { isPop } = useAppContext()

    const arr: string[] = ['john', 'alex', 'nothing', 'samsung', 'iphone', 'xiomi', 'oneplus', 'poco', 'iqoo']

    const [posts, setPosts] = useState<string[]>(mockPosts.slice(0, 5)); // Load initial posts
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const observerRef = useRef<HTMLDivElement | null>(null);

    // Simulate fetching more posts
    const fetchMorePosts = () => {
        setLoading(true);

        setTimeout(() => {
            const newPosts = mockPosts.slice(page * 5, (page + 1) * 5);

            if (newPosts.length === 0) {
                setHasMore(false); // No more posts to load
            } else {
                setPosts((prev) => [...prev, ...newPosts]);
                setPage((prev) => prev + 1);
            }

            setLoading(false);
        }, 1000); // Simulate network delay
    };

    // Intersection Observer for infinite scrolling
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !loading) {
                    fetchMorePosts();
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
    }, [hasMore, loading]);

    return (
        <>
            <div className="md:hidden flex justify-between bg-white dark:bg-black w-full pt-2 pb-6 px-2">
                <h2 className="select-none font-semibold text-[1.75rem] tracking-tight scale-x-90 scale-y-125 block md:hidden">
                    𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂
                </h2>
                <div className="flex gap-6 pt-2 pr-2">
                    <FaRegHeart size={26} />
                    <RiMessengerLine size={28} />
                </div>
            </div>
            <div className="flex md:pt-6">
                <div className="block w-full lg:w-[65%]">
                    <div className="inline-block w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide px-2">
                        {arr.map((id, index) => <Story key={index} id={index}/>)}
                    </div>
                    <div>
                        {posts.map((_, index) => (
                            <Post key={index} />
                        ))}

                        {/* Loading Indicator */}
                        {loading && <div className="flex justify-center py-[5em]"><CgSpinner size={30} className="animate-spin"/></div>}

                        {/* Invisible Element for Observer */}
                        <div ref={observerRef} style={{ height: '10px' }} />
                    </div>
                </div>
                <div className={`hidden lg:block pt-3 w-[35%] ${isPop ? 'lg:pr-[2.5em] lg:pl-3.5' : 'px-6'}`}>
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <Image className="rounded-full" loading="lazy" src="https://instagram.fcok3-2.fna.fbcdn.net/v/t51.2885-19/476501464_1523240058345855_3565333406899966342_n.jpg?_nc_ht=instagram.fcok3-2.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AHku2GBAwVT0RJbW0qNB0e9Klc1URYJa7oUdN5mH68D-1X9yPAw8CAF0DxQkOjFYgKyNt7htnmgrYd6BhVPvZQV&_nc_ohc=y1eTcK4XTocQ7kNvgG1yK3c&_nc_gid=10bd902f436144a48546adeab947251b&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYGizs5U10YpANF8aSXUKVdGSIUR99TVSZZrClFcX-j-Lw&oe=67D64B9A&_nc_sid=7d3ac5" alt="profile" width={45} height={45} />
                            <div>
                                <p className="text-sm font-semibold">shabinsharih</p>
                                <p className="text-[#a1a1a1] text-sm">SHABIN</p>
                            </div>
                        </div>
                        <p className="text-[#0095F6] text-sm my-auto cursor-pointer">Switch</p>
                    </div>
                    <div className="flex justify-between text-sm font-semibold pt-8">
                        <p className="text-[#a1a1a1]">Suggested for you</p>
                        <p className="cursor-pointer">See All</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home

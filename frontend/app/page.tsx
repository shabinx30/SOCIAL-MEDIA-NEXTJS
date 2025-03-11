import Image from "next/image";

//icons
import { FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { LuBookmark } from "react-icons/lu";


const Stories = () => {
    return (
        <div className="inline-block bg-gradient-to-tr from-[#F8C400] via-[#E8174B] to-[#D300C5] rounded-full w-[5.5em] h-[5.5em] md:w-[5em] md:h-[5em] p-[0.18em] md:p-0.5 mx-2 cursor-pointer">
            <div className="bg-[#070707] relative border-black w-full h-full rounded-full">
                <div className="bg-[#333333] absolute animate-pulse border-4 border-black w-full h-full rounded-full"></div>
            </div>
        </div>
    )
}

const Post = () => {
    return (
        <div className="flex justify-center">
            <div className="pt-6 w-[30em]">
                <div className="flex gap-4 px-2">
                    <div>
                        <Image className="rounded-full" src="https://instagram.fcok3-2.fna.fbcdn.net/v/t51.2885-19/476501464_1523240058345855_3565333406899966342_n.jpg?_nc_ht=instagram.fcok3-2.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AHku2GBAwVT0RJbW0qNB0e9Klc1URYJa7oUdN5mH68D-1X9yPAw8CAF0DxQkOjFYgKyNt7htnmgrYd6BhVPvZQV&_nc_ohc=y1eTcK4XTocQ7kNvgG1yK3c&_nc_gid=10bd902f436144a48546adeab947251b&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYGizs5U10YpANF8aSXUKVdGSIUR99TVSZZrClFcX-j-Lw&oe=67D64B9A&_nc_sid=7d3ac5" alt="profile" width={30} height={30} />
                    </div>
                    <div className="block">
                        <p className="font-semibold text-sm">shabinsharih <span className="text-[#a1a1a1] font-light">{" • "} 48m</span></p>
                        <p className="text-sm">♪ music</p>
                    </div>
                </div>
                <div className="w-full h-[30em] bg-[#282828] animate-pulse rounded-md mt-2">

                </div>
                <div className="flex justify-between pt-3 px-2">
                    <div className="flex gap-4">
                        <FaRegHeart size={26} />
                        <Image width={26} height={22} className="dark:invert" src="https://cdn-icons-png.flaticon.com/256/3031/3031126.png" alt="comments" />
                        <Image width={26} height={20} className="dark:invert h-6 rotate-[17.5deg]" src="https://cdn-icons-png.flaticon.com/256//2697/2697852.png" alt="comments" />
                    </div>
                    <div>
                        <LuBookmark size={26} />
                    </div>
                </div>
                <p className="px-2 py-2 text-[0.9em] font-semibold">44,832 likes</p>
                <p className="text-[0.8em] font-light px-2"><span className="font-semibold text-sm pr-2">shabinsharih</span>The highly anticipated follow up to one of our 2024 music videos of the year. EYECANDY FEATURE: HANUMANKIND - RUN IT...</p>
                <div className="pt-[4em] border-b-2 border-[#282828]"></div>
            </div>
        </div>
    )
}

const Home = () => {

    let arr = [12, 3, 4, 5, 6, 7, 8, 9, 10]

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
                        {arr.map((_, index) => <Stories key={index} />)}
                    </div>
                    <div className="block">
                        {arr.map((_, index) => <Post key={index} />)}
                    </div>
                </div>
                <div className="hidden lg:block pt-3 w-[35%] px-6">
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            <Image className="rounded-full" src="https://instagram.fcok3-2.fna.fbcdn.net/v/t51.2885-19/476501464_1523240058345855_3565333406899966342_n.jpg?_nc_ht=instagram.fcok3-2.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2AHku2GBAwVT0RJbW0qNB0e9Klc1URYJa7oUdN5mH68D-1X9yPAw8CAF0DxQkOjFYgKyNt7htnmgrYd6BhVPvZQV&_nc_ohc=y1eTcK4XTocQ7kNvgG1yK3c&_nc_gid=10bd902f436144a48546adeab947251b&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYGizs5U10YpANF8aSXUKVdGSIUR99TVSZZrClFcX-j-Lw&oe=67D64B9A&_nc_sid=7d3ac5" alt="profile" width={45} height={45} />
                            <div>
                                <p className="text-sm font-semibold">shabinsharih</p>
                                <p className="text-[#a1a1a1] text-sm">SHABIN</p>
                            </div>
                        </div>
                        <div className="my-auto">
                            <p className="text-[#0095F6] text-sm">Switch</p>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm font-semibold pt-8">
                        <p className="text-[#a1a1a1]">Suggested for you</p>
                        <p>See All</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home

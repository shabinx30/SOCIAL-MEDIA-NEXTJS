
//icons
import { PiCameraLight } from "react-icons/pi";

const PostsPage = () => {

    const posts: object[] = []

    if (!posts.length) {
        return (
            <div className="flex justify-center items-center w-full bg-background h-[10em] mt-[6em] mb-[8em]">
                <div>
                    <div className="mx-auto flex justify-center items-center border-2 rounded-full border-black w-[4em] h-[4em] dark:border-white">
                        <PiCameraLight size={45} className="text-black dark:text-white" />
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="text-2xl md:text-3xl items-center font-extrabold pt-4">Share photos</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="items-center text-sm pt-5">When you share photos, they will appear on your profile.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="items-center text-[#0095F6] pt-5">Share your first photo</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-3 w-full gap-1 pt-[0.5em] pb-[6em]">
                {posts.map((val, index) => (
                    <div key={index} className="bg-[#2B2B2B] w-full relative aspect-square"></div>
                ))}
            </div>
        )
    }
} 

export default PostsPage
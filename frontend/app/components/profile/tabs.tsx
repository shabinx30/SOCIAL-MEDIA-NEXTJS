"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsGrid3X3 } from "react-icons/bs";
import { RiAccountPinBoxLine } from "react-icons/ri";

export default function ProfileTabs({ userId }: { userId: string | null }) {
  const router = useRouter();

  return (
    <div className="mt-6 dark:bg-black border-t border-[#DBDBDB] dark:border-[#2e2e2e] md:mr-[2rem]">
      <div className="flex justify-center gap-24 text-[#8f8f8f]">
        <div
          onClick={() => router.push(`/${userId}`)}
          className='cursor-pointer flex gap-2 items-center text-black border-t-2 border-black pt-4 dark:text-white dark:border-white'>
          <BsGrid3X3 size={13} />
          <p className='text-xs font-semibold'>POSTS</p>
        </div>
        <div
          onClick={() => router.push(`/${userId}/reels`)}
          className='cursor-pointer flex gap-2 items-center pt-4'>
          <Image className='contrast-[15%] dark:invert' src='https://cdn-icons-png.flaticon.com/512/12595/12595880.png' alt='reel' width={15} height={15} />
          <p className='text-xs font-semibold'>REEL</p>
        </div>
        <div
          onClick={() => router.push(`/${userId}/tagged`)}
          className='cursor-pointer flex gap-2 items-center pt-4'>
          <RiAccountPinBoxLine size={15} />
          <p className='text-xs font-semibold'>TAGGED</p>
        </div>
      </div>
    </div>
  );
}
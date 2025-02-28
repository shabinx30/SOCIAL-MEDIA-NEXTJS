// ********************** profile page ****************************

import React from 'react'
import Image from 'next/image'
import Profile from '@/app/assets/Images/profile.jpg'
import Link from 'next/link'
import Reel from './reel/page'
import users from '../components/users'

// icons
import { RiLinkM } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { BsGrid3X3 } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { RiAccountPinBoxLine } from "react-icons/ri";

const page = async ({ params }: { params: { id: string | null } }) => {
    const { id } = await params
    // fetch the user details using this id

    // if the user is not existing redirect to page not found page

    return (
        <>
            <div className='fixed flex md:hidden w-full h-[3em] dark:bg-black border-b border-[#DBDBDB] dark:border-[#2e2e2e] justify-between items-center pl-3 pr-6'>
                <h1 className='font-bold text-xl'>{id}</h1>
                <div className='flex gap-6'>
                    <Image className='dark:invert' src='https://cdn-icons-png.flaticon.com/512/10103/10103630.png' alt='create' width={26} height={22} />
                    <Image className='dark:invert' src='https://cdn-icons-png.flaticon.com/512/13894/13894991.png' alt='more' width={26} height={26} />
                </div>
            </div>
            <div className='flex-1 pt-8 md:pt-0 md:px-[2em] lg:px-[4em]'>
                <div className='flex justify-center pt-[2.5em] gap-4 md:gap-16'>
                    <div>
                        <Image className='rounded-full md:w-[160] md:h-[160] duration-300' src={Profile} alt='profile picture' width={100} height={100} />
                    </div>
                    <div className='block'>
                        <div className='hidden md:flex duration-300'>
                            <h1 className='text-xl'>{id}</h1>
                            <button className='mt-4 md:mt-0 md:ml-4 px-4 py-1 bg-[#efefef] hover:bg-[#DBDBDB] dark:bg-[#333333] h-[2.2em] rounded-lg dark:hover:bg-[#262626] text-sm duration-150'>Edit Profile</button>
                            <button className='ml-2 px-4 py-1 bg-[#efefef] hover:bg-[#DBDBDB] dark:bg-[#333333] h-[2.2em] rounded-lg dark:hover:bg-[#262626] text-sm duration-150'>View archive</button>
                            <Image className='hidden md:block dark:invert w-6 h-6 mx-2 my-0.5' src="https://cdn-icons-png.flaticon.com/512/5693/5693241.png" alt='settings' width={20} height={20} />
                        </div>
                        <p className='md:hidden text-base font-medium'>{'SHABIN'}</p>
                        <div className='flex gap-1 md:gap-6 pt-2 md:pt-6 duration-300'>
                            <div className='flex md:hidden gap-8'>
                                <div className='block'>
                                    <p className='font-semibold'>{16}</p>
                                    <p className='text-[#A8A8A8]'>posts</p>
                                </div>
                                <div className='block'>
                                    <p className='font-semibold'>{743 + "M"}</p>
                                    <p className='text-[#A8A8A8]'>followers</p>
                                </div>
                                <div className='block'>
                                    <p className='font-semibold'>{1214}</p>
                                    <p className='text-[#A8A8A8]'>following</p>
                                </div>
                            </div>
                            <div className='hidden md:flex gap-6'>
                                <p><span className='font-semibold'>{16}</span><span className='text-[#A8A8A8]'> posts</span></p>
                                <p><span className='font-semibold'>{743 + "M"}</span><span className='text-[#A8A8A8]'> followers</span></p>
                                <p><span className='font-semibold'>{1214}</span><span className='text-[#A8A8A8]'> following</span></p>
                            </div>
                        </div>
                        <div className='pt-8 hidden md:block gap-0'>
                            {/* name */}
                            <p className='block'>shabin</p>
                            {/* bio */}
                            <p>🧑‍💻 Web Developer</p>
                            {/* links */}
                            <div className='flex text-[#00376B] dark:text-[#E0E2EF]'>
                                <RiLinkM size={16} className='my-auto mr-1' />
                                <Link className='hover:underline text-sm font-semibold' href={'https://shabeensharih.com'} target='blank'>shabeensharih.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-8 px-4 block md:hidden gap-0'>
                    {/* name */}
                    <p className='hidden md:block'>shabin</p>
                    {/* bio */}
                    <p>🧑‍💻 Web Developer</p>
                    {/* links */}
                    <div className='flex text-[#00376B] dark:text-[#E0E2EF]'>
                        <RiLinkM size={16} className='my-auto mr-1' />
                        <Link className='hover:underline text-sm font-semibold' href={'https://shabeensharih.com'} target='blank'>shabeensharih.com</Link>
                    </div>
                </div>
                <div className='flex md:hidden duration-300 w-full px-4 pt-4'>
                    <button className='px-4 py-1 w-[50%] bg-[#efefef] hover:bg-[#DBDBDB] dark:bg-[#333333] h-[2.5em] rounded-lg dark:hover:bg-[#262626] text-sm duration-150'>Edit Profile</button>
                    <button className='ml-2 px-4 py-1 w-[50%] bg-[#efefef] hover:bg-[#DBDBDB] dark:bg-[#333333] h-[2.5em] rounded-lg dark:hover:bg-[#262626] text-sm duration-150'>Share profile</button>
                </div>
                <div className='flex pt-[2em] md:pt-[3em] px-[1em] md:px-[8em] justify-start gap-6 md:gap-10'>
                    <div className='bg-[#E1E1E1] dark:bg-[#2B2B2B] w-20 h-20 rounded-full cursor-pointer'>
                        <div className='border-2 border-white dark:border-black w-[95%] h-[95%] rounded-full m-[0.1435rem]'></div>
                    </div>
                    <div className='bg-[#E1E1E1] dark:bg-[#2B2B2B] w-20 h-20 rounded-full cursor-pointer'>
                        <div className='border-2 border-white dark:border-black w-[95%] h-[95%] rounded-full m-[0.1435rem]'></div>
                    </div>
                    <div className='bg-[#E1E1E1] dark:bg-[#383838] w-20 h-20 rounded-full cursor-pointer'>
                        <div className='flex justify-center border-2 bg-[#F5F5F5] dark:bg-[#121212] border-white dark:border-black w-[95%] h-[95%] rounded-full m-[0.1435rem] items-center'>
                            <GoPlus className='text-[#9c9c9c] dark:text-[#737373]' size={55} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 dark:bg-black border-t border-[#DBDBDB] dark:border-[#2e2e2e] md:mr-[2rem]'>
                <div className='flex justify-center gap-24 text-[#8f8f8f]'>
                    <div className='cursor-pointer flex gap-2 items-center text-black border-t-2 border-black pt-4 dark:text-white dark:border-white'>
                        <BsGrid3X3 size={13} />
                        <p className='text-xs font-semibold'>POSTS</p>
                    </div>
                    <div className='cursor-pointer flex gap-2 items-center pt-4'>
                        <Image className='contrast-[15%] dark:invert' src='https://cdn-icons-png.flaticon.com/512/12595/12595880.png' alt='reel' width={15} height={15} />
                        <p className='text-xs font-semibold'>REEL</p>
                    </div>
                    <div className='cursor-pointer flex gap-2 items-center pt-4'>
                        <RiAccountPinBoxLine size={15} />
                        <p className='text-xs font-semibold'>TAGGED</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
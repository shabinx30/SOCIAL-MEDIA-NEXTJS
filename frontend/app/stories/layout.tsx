import type { Metadata } from 'next';

import Link from 'next/link';
import React from 'react';
import { IoClose } from "react-icons/io5";

export const metadata: Metadata = {
    title: 'Stories • Pixagram',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex justify-center items-center relative bg-[#1A1A1A] w-screen h-[100dvh]'>
            <div className='absolute z-30 top-4 left-4'>
                <Link href={'/'}>
                    <h2 className="select-none font-bold text-[1.35rem] tracking-tight scale-x-90 scale-y-125 hidden lg:block">
                        𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂
                    </h2>
                </Link>
            </div>

            {children}

            <Link href={'/'}>
                <div className='absolute z-30 top-4 right-4'>
                    <IoClose size={35} />
                </div>
            </Link>
        </div>
    );
};

export default Layout;

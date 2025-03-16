// "use client"

import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: 'Stories • Pixagram',
};

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <div className='flex bg-[#1A1A1A] w-screen h-[100dvh]'>
                <div className='flex-1 justify-start'>
                    <Link href={'/'}>
                        <h2 className="select-none font-bold text-[1.35rem] pt-4 tracking-tight scale-x-90 scale-y-125 hidden lg:block">
                            𝒫𝒾𝓍𝒶𝑔𝓇𝒶𝓂
                        </h2>
                    </Link>
                </div>
                <div className='flex-1'>
                    {children}
                </div>
                <div className='flex-1'>

                </div>
            </div>
        </>
    )
}

export default layout
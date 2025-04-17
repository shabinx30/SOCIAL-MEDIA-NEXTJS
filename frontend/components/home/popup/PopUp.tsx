"use client"

import React, { useEffect } from 'react'
import { useAppContext } from "@/context/AppContext"
import { AnimatePresence, motion } from 'framer-motion'



const PopBg = () => {

    const { isPop, setPop } = useAppContext()

    useEffect(() => {
        document.body.style.overflow = isPop ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isPop]);

    return (
        <AnimatePresence>
            {isPop && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={() => setPop(false)}
                    style={{ transform: "translateZ(0)" }}
                    className="fixed inset-0 will-change-contents z-[1000] backdrop-blur-[5px] bg-[#00000050] flex justify-center items-center"
                >
                    <motion.div
                        layout
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="dark:bg-[#262626] bg-white w-[80%] md:w-[25em] rounded-3xl will-change-transform"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='flex justify-center py-3.5 cursor-pointer hover:bg-[#c8c8c8] dark:hover:bg-[#202020] rounded-t-3xl font-semibold duration-300 text-sm text-red-500'>Report</div>
                        <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />
                        <div className='flex justify-center py-3.5 cursor-pointer hover:bg-[#c8c8c8] dark:hover:bg-[#202020] duration-300 font-semibold text-sm text-[#0095F6]'>Follow</div>
                        <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />
                        <div className='flex justify-center py-3.5 cursor-pointer hover:bg-[#c8c8c8] dark:hover:bg-[#202020] duration-300 text-sm'>Add to favorite</div>
                        <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />
                        <div className='flex justify-center py-3.5 cursor-pointer hover:bg-[#c8c8c8] dark:hover:bg-[#202020] duration-300 text-sm'>Go to post</div>
                        <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />
                        <div className='flex justify-center py-3.5 cursor-pointer hover:bg-[#c8c8c8] dark:hover:bg-[#202020] duration-300 text-sm'>Share to...</div>
                        <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />
                        <div className='flex justify-center py-3.5 cursor-pointer hover:bg-[#c8c8c8] dark:hover:bg-[#202020] duration-300 text-sm'>Copy link</div>
                        <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />
                        <div className='flex justify-center py-3.5 cursor-pointer hover:bg-[#c8c8c8] dark:hover:bg-[#202020] duration-300 text-sm'>About this account</div>
                        <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />
                        <div onClick={() => setPop(false)} className='flex justify-center py-3.5 cursor-pointer hover:bg-[#c8c8c8] dark:hover:bg-[#202020] rounded-b-3xl duration-300 text-sm'>Cancel</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default PopBg
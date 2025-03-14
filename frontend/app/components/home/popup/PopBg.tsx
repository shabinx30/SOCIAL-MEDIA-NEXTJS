"use client"

import React, { useEffect } from 'react'
import { useAppContext } from "@/app/context/AppContext"
import { AnimatePresence, motion } from 'framer-motion'


const ITEMS = ['Report', 'Follow', 'Add to favorite', 'Go to post', 'Share to...', 'Copy link', 'About this account', 'Cancel']

const PopBg = () => {

    const { isPop, setPop } = useAppContext()

    useEffect(() => {
        document.body.style.overflow = isPop ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isPop]);

    if (!isPop) {
        return (
            <></>
        )
    } else {
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity:1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='fixed inset-0 z-[1000] bg-[#00000050] flex justify-center items-center'
                    onClick={() => setPop(false)}
                >
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="bg-[#262626] w-[80%] md:w-[25em] rounded-3xl will-change-transform"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {ITEMS.map((item, index) => (
                            <div key={index}>
                                <div
                                    className={`flex justify-center py-3.5 cursor-pointer text-sm ${item === 'Report' ? 'text-red-500' : item === 'Follow' ? 'text-[#0095F6]' : ''
                                        }`}
                                >
                                    {item}
                                </div>
                                {index !== ITEMS.length - 1 && (
                                    <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        )
    }
}

export default PopBg
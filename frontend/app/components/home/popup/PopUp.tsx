"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { MdMoreVert } from "react-icons/md"
import { useAppContext } from "@/app/context/AppContext"

const PopUp = () => {
    const { isPop, setPop } = useAppContext();

    // Disable/Enable scrolling
    useEffect(() => {
        if (isPop) {
            document.body.style.overflow = "hidden";  // Disable scrolling
        } else {
            document.body.style.overflow = "";        // Enable scrolling
        }

        // Cleanup when the component unmounts
        return () => {
            document.body.style.overflow = "";
        }
    }, [isPop])

    return (
        <>
            <MdMoreVert 
                onClick={() => setPop(true)} 
                className="cursor-pointer my-auto" 
                size={20} 
            />

            <AnimatePresence>
                {isPop && (
                    <div 
                        onClick={() => setPop(false)} 
                        className='fixed inset-0 z-[1000] bg-[#00000010] flex justify-center items-center'
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2 }}
                            transition={{ type: "tween", duration: 0.25 }}
                            className={`bg-[#262626] w-[80%] h-[80%] md:w-[25em] md:h-[30em] rounded-3xl`}
                        />
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

export default PopUp

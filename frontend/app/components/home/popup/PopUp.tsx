"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useCallback, memo } from "react"
import { MdMoreVert } from "react-icons/md"
import { useAppContext } from "@/app/context/AppContext"

// Constants
const POPUP_ITEMS = [
    { label: 'Report', className: 'text-red-500' },
    { label: 'Follow', className: 'text-[#0095F6]' },
    { label: 'Add to favorite', className: '' },
    { label: 'Go to post', className: '' },
    { label: 'Share to...', className: '' },
    { label: 'Copy link', className: '' },
    { label: 'About this account', className: '' },
    { label: 'Cancel', className: '' }
];

// Animation variants
const modalVariants = {
    hidden: { opacity: 0, scale: 1.15 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.15 }
};

// Memoized menu item component
const MenuItem = memo(({ 
    item, 
    isLast, 
    onClose 
}: { 
    item: { label: string, className: string }, 
    isLast: boolean,
    onClose: () => void 
}) => (
    <div>
        <div 
            onClick={isLast ? onClose : undefined} 
            className={`flex justify-center py-3.5 cursor-pointer text-sm ${item.className}`}
        >
            {item.label}
        </div>
        {!isLast && <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />}
    </div>
));

MenuItem.displayName = "MenuItem";

const PopUp = () => {
    const { isPop, setPop } = useAppContext();

    // Memoized handlers
    const handleOpen = useCallback(() => setPop(true), [setPop]);
    const handleClose = useCallback(() => setPop(false), [setPop]);
    const handleModalClick = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

    // Body scroll lock effect
    useEffect(() => {
        if (isPop) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isPop]);

    return (
        <>
            <MdMoreVert
                onClick={handleOpen}
                className="cursor-pointer my-auto"
                size={20}
                aria-label="More options"
            />

            <AnimatePresence>
                {isPop && (
                    <motion.div
                        onClick={handleClose}
                        className="fixed inset-0 z-[1000] bg-[#00000020] flex justify-center items-center"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Options menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={modalVariants}
                            transition={{ type: "tween", duration: 0.2 }}
                            className="bg-[#262626] w-[80%] md:w-[25em] rounded-3xl"
                            onClick={handleModalClick}
                        >
                            {POPUP_ITEMS.map((item, index) => (
                                <MenuItem
                                    key={item.label}
                                    item={item}
                                    isLast={index === POPUP_ITEMS.length - 1}
                                    onClose={handleClose}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default memo(PopUp);
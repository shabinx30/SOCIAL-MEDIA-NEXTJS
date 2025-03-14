// "use client"

// import { motion, AnimatePresence } from "framer-motion"
// import { useEffect } from "react"
// import { MdMoreVert } from "react-icons/md"
// import { useAppContext } from "@/app/context/AppContext"

// const ITEMS = ['Report', 'Follow', 'Add to favorite', 'Go to post', 'Share to...', 'Copy link', 'About this account', 'Cancel']

// const PopUp = () => {
//     const { isPop, setPop } = useAppContext();

//     useEffect(() => {
//         document.body.style.overflow = isPop ? "hidden" : "";
//         return () => {
//             document.body.style.overflow = "";
//         };
//     }, [isPop]);

//     return (
//         <>
//             <MdMoreVert
//                 onClick={() => setPop(true)}
//                 className="cursor-pointer my-auto"
//                 size={20}
//             />

//             <AnimatePresence>
//                 {isPop && (
//                     <div
//                         onClick={() => setPop(false)}
//                         className='fixed inset-0 z-[1000] bg-[#00000010] flex justify-center items-center'
//                     >
//                         <motion.div
//                             initial={{ opacity: 0, scale: 1.15 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             exit={{ opacity: 0, scale: 1.15 }}
//                             transition={{ type: "tween", duration: 0.2 }}
//                             className='bg-[#262626] w-[80%] md:w-[25em] rounded-3xl'
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             {ITEMS.map((item, index) => (
//                                 <div key={index}>
//                                     {item == 'Report' ? 
//                                         (<div className="flex justify-center py-3.5 cursor-pointer text-sm text-red-500">{item}</div>)
//                                          : item == 'Follow' ? (<div className="flex justify-center py-3.5 cursor-pointer text-sm text-[#0095F6]">{item}</div>) :
//                                         (<div className="flex justify-center py-3.5 cursor-pointer text-sm">{item}</div>)
//                                     }
//                                     {index !== ITEMS.length - 1 && (
//                                         <hr className="border-t-2 border-[#c8c8c8] dark:border-[#2f2f2f]" />
//                                     )}
//                                 </div>
//                             ))}
//                         </motion.div>
//                     </div>
//                 )}
//             </AnimatePresence>
//         </>
//     )
// }

// export default PopUp

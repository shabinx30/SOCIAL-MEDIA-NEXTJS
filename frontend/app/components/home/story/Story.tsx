"use client"

import { useState, useRef, useEffect } from "react"
import "./story.css"
import { useRouter } from "next/navigation"

const Story: React.FC = () => {

    const router = useRouter()

    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const [position, setPosition] = useState<{ top: number, left: number, width: number, height: number }>({ 
        top: 0, 
        left: 0, 
        width: 0, 
        height: 0 
    })
    const divRef = useRef<HTMLDivElement>(null)

    // Function to capture the original position before expanding
    const capturePosition = (): { top: number, left: number, width: number, height: number } => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect()
            return {
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            }
        }
        return position
    }

    // Toggle expansion
    function toggleExpand(): void {
        if (!isExpanded) {
            // Expand
            setPosition(capturePosition())
            setIsExpanded(true)

            //routing to stories page
            setTimeout(() => {
                router.push('/stories')
            }, 200);
        } else {
            // Immediately close without animation
            setIsExpanded(false)
        }
    }

    // Save position on initial render
    useEffect(() => {
        if (divRef.current) {
            const initialPosition = capturePosition();
            setPosition(initialPosition);
        }
    }, []);

    return (
        <div className="inline-block bg-gradient-to-tr from-[#F8C400] via-[#E8174B] to-[#D300C5] rounded-full w-[5.5em] h-[5.5em] md:w-[5em] md:h-[5em] p-[0.18em] md:p-0.5 mx-2 cursor-pointer">
            <div className="bg-white dark:bg-[#000000] dark:border-black w-full h-full rounded-full">
                <div 
                    ref={divRef}
                    onClick={toggleExpand} 

                    // here u wanna put animate-pulse on (!isExpanded) section

                    className={`
                        bg-[#c8c8c8] dark:bg-[#333333] 
                        ${!isExpanded ? 'w-full h-full rounded-full border-4 border-white dark:border-black' : ''}
                        ${isExpanded ? 'expanding-div fixed z-50' : ''}
                    `}
                    style={isExpanded ? {
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        transformOrigin: `${position.left + position.width/2}px ${position.top + position.height/2}px`
                    } : {}}
                >
                    {/* Optional content for expanded state */}
                    
                </div>
            </div>
        </div>
    )
}

export default Story
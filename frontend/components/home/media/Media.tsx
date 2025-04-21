"use client"

import { useState } from 'react'
import { FaHeart } from 'react-icons/fa6'

import "./media.css"

const Media = ({ animateLike }: {animateLike: () => void}) => {

    const [isClick, setClick] = useState(false)
    const [random, setRandom] = useState('')

    const animations: string[] = ['like-animation-1', 'like-animation-2', 'like-animation-3']
    let animation: number

    function showLike() {

        animation = Math.floor(Math.random() * animations.length);
        setRandom(animations[animation])
        setClick(true)
        //changing like in the interaction section
        animateLike()

        if (typeof window !== "undefined") {
            const isAndroid = /Android/i.test(navigator.userAgent);
            const isSupportedBrowser =
                "vibrate" in navigator && typeof navigator.vibrate === "function";

            // Trigger vibration only on supported devices
            if (isAndroid && isSupportedBrowser) {
                navigator.vibrate(100); // Vibrates for 100ms
            }
        }

        //hiding the like icon 
        setTimeout(() => setClick(false), 1100);

    }

    return (
        <>
            <div onContextMenu={(e) => e.preventDefault()} className="w-full h-[30em] animate-pulse flex items-center justify-center bg-[#c8c8c8] dark:bg-[#282828] md:rounded-md mt-2"
                onDoubleClick={showLike}
            >
                {/* image */}
                {isClick && (
                    <FaHeart
                        style={{ fill: 'url(#heartGradient)' }}
                        className={`text-[8em] ${random}`}
                    />
                )}

                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="heartGradient" gradientTransform="rotate(45)">
                            <stop offset="0%" stopColor="#f88400" />
                            <stop offset="50%" stopColor="#E8174B" />
                            <stop offset="100%" stopColor="#d30086" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </>
    )
}

export default Media
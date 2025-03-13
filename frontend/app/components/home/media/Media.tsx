"use client"

import { useState, useRef, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa6'
import "./media.css"

interface Heart {
  id: number;
  x: number;
  y: number;
  animation: string;
  size: number;
}

const Media = () => {
    const [hearts, setHearts] = useState<Heart[]>([])
    const lastTapRef = useRef<number>(0)
    const tapSpeedRef = useRef<number[]>([])
    const tapStreakRef = useRef<number>(0)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    
    const animations: string[] = ['like-animation-1', 'like-animation-2', 'like-animation-3', 'like-animation-4', 'like-animation-5']

    const calculateHeartSize = (): number => {
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight
        const baseSizePx = 128
        const maxDimension = Math.min(viewportWidth, viewportHeight)
        const maxScale = maxDimension / baseSizePx

        let size = 1.0
        
        switch (tapStreakRef.current) {
            case 0:
            case 1:
                size = 1.0
                break
            case 2:
                size = 2.0
                break
            case 3:
                size = 4.0
                break
            case 4:
                size = 8.0
                break
            case 5:
                size = 16.0
                break
            default:
                size = maxScale
        }
        
        return size
    }

    const resetStreak = () => {
        tapStreakRef.current = 0
        tapSpeedRef.current = []
    }

    function showLike(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const now = Date.now()
        const tapSpeed = now - lastTapRef.current
        
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        if (lastTapRef.current !== 0) {
            if (tapSpeedRef.current.length >= 5) {
                tapSpeedRef.current.shift()
            }
            tapSpeedRef.current.push(tapSpeed)
            
            if (tapSpeed < 500) {
                tapStreakRef.current += 1
            } else {
                tapStreakRef.current = 1
            }
        } else {
            tapStreakRef.current = 1
        }
        
        lastTapRef.current = now
        timeoutRef.current = setTimeout(resetStreak, 500)

        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const id = Date.now()
        const animation = animations[Math.floor(Math.random() * animations.length)]
        const size = calculateHeartSize()
        
        setHearts(prevHearts => [
            ...prevHearts,
            { id, x, y, animation, size }
        ])

        if (typeof window !== "undefined") {
            const isAndroid = /Android/i.test(navigator.userAgent)
            const isSupportedBrowser = "vibrate" in navigator && typeof navigator.vibrate === "function"
            if (isAndroid && isSupportedBrowser) {
                navigator.vibrate(100)
            }
        }

        setTimeout(() => {
            setHearts(prevHearts => prevHearts.filter(heart => heart.id !== id))
        }, 1100)
    }

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <>
            <div 
                className="w-full h-[30em] flex items-center justify-center bg-[#c8c8c8] dark:bg-[#282828] md:rounded-md mt-2 relative overflow-hidden"
                onDoubleClick={showLike}
            >
                {hearts.map(heart => (
                    <FaHeart
                        key={heart.id}
                        style={{
                            fill: 'url(#heartGradient)',
                            position: 'absolute',
                            left: `${heart.x}px`,
                            top: `${heart.y}px`,
                            transform: `translate(-50%, -50%) scale(${heart.size})`,
                            fontSize: '8em',
                            zIndex: 10,
                            maxWidth: '100vw',    // Limit to viewport width
                            maxHeight: '100vh',   // Limit to viewport height
                            overflow: 'hidden'    // Hide any overflow
                        }}
                        className={heart.animation}
                    />
                ))}

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
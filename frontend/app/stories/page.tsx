"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


// icons
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

// Minimal top-level component
const Stories = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StoriesContent />
        </Suspense>
    );
};


const StoriesContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const storyRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const [count, setCount] = useState(() => {
        const id = searchParams.get("id");
        return id ? Number(id) : 0;
    });

    useEffect(() => {
        const currentId = searchParams.get("id");
        if (currentId !== String(count)) {
            router.push(`?id=${count}`, { scroll: false });
        }
        scrollToStory(count);
    }, [count, router, searchParams]); // Added dependencies to fix ESLint warning

    const scrollToStory = (index: number) => {
        const story = storyRefs.current[index];
        const container = containerRef.current;
        if (!story || !container) return;

        setTimeout(() => {
            const containerWidth = container.offsetWidth;
            const storyWidth = story.offsetWidth;
            const scrollPosition = story.offsetLeft - (containerWidth - storyWidth) / 2;

            container.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
        }, 350); // Matches transition duration
    };

    const handleNext = () => {
        if (count < arr.length - 1) {
            setCount((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const handleKeyEvents = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowLeft':
                    handlePrev()
                    break;
                case 'ArrowRight':
                    handleNext()
                    break;
                case 'ArrowUp':
                    handlePrev()
                    break;
                case 'ArrowDown':
                    handleNext()
                    break;
                default:
                    break;
            }
        }

        window.addEventListener('keydown', handleKeyEvents)

        return () => {
            window.removeEventListener('keydown', handleKeyEvents)
        }
    }, [handleNext, handlePrev])

    return (
        <div className="w-[100vw] h-[100vh] overflow-hidden relative">
            <div
                ref={containerRef}
                className="flex h-full px-[34em] items-center gap-8 justify-start overflow-x-hidden scrollbar-hide whitespace-nowrap"
            >
                {arr.map((content, index) => (
                    <div
                        key={index}
                        id={index + ""}
                        ref={(el) => {
                            storyRefs.current[index] = el;
                        }}
                        onClick={() => setCount(index)}
                        className={`${index === count ? "w-[24em] h-[92vh]" : "w-[14em] h-[52vh]"} bg-[#282828] flex justify-center items-center rounded-2xl transition-all duration-[350ms] ease-in-out flex-shrink-0`}
                    >
                        <p className="text-[#E8174B]">{content}</p>
                    </div>
                ))}
            </div>
            <button
                className="fixed left-1/3 top-1/2 transform translate-x-1/2 -translate-y-1/2 p-1.5 font-black bg-[#515151] text-white rounded-full disabled:opacity-50 z-20"
                onClick={handlePrev}
                disabled={count === 0}
            >
                <GrFormPrevious size={20}/>
            </button>
            <button
                className="fixed right-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1.5 font-black bg-[#515151] text-white rounded-full disabled:opacity-50 z-20"
                onClick={handleNext}
                disabled={count === arr.length - 1}
                >
                <GrFormNext size={20}/>
            </button>
        </div>
    );
};

export default Stories;
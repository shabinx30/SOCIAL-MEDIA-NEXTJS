"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import MobileStory from '../components/stories/MobileStory'

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
    }, [count, router, searchParams]);

    const scrollToStory = (index: number) => {
        const container = containerRef.current;
        if (!container) return;

        const containerWidth = container.offsetWidth;
        const activeWidth = 24 * 16; // 384px
        const inactiveWidth = 14 * 16; // 224px
        const gap = 48; // 3rem = 48px
        const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft);
        const maxScroll = container.scrollWidth - containerWidth;

        // Final offsetLeft when story at index is active
        const finalOffsetLeft = paddingLeft + index * (inactiveWidth + gap);
        const scrollPosition = finalOffsetLeft - (containerWidth - activeWidth) / 2;
        const clampedScroll = Math.max(0, Math.min(scrollPosition, maxScroll));

        console.log({
            index,
            paddingLeft,
            finalOffsetLeft,
            containerWidth,
            scrollPosition,
            clampedScroll,
            maxScroll,
        });

        container.scrollTo({
            left: clampedScroll,
            behavior: "smooth", // Try "auto" first to eliminate animation conflict
        });

        // Debug: Check actual position after transition
        setTimeout(() => {
            const story = storyRefs.current[index];
            if (story) {
                const actualOffsetLeft = story.offsetLeft;
                const actualScrollShouldBe = actualOffsetLeft - (containerWidth - activeWidth) / 2;
                console.log({
                    actualOffsetLeft,
                    actualScrollShouldBe,
                    currentScrollLeft: container.scrollLeft,
                });
            }
        }, 500); // After transition (350ms) + buffer
    };

    const handleNext = () => {
        if (count < arr.length - 1) {
            const nextIndex = count + 1;
            setCount(nextIndex);
        }
    };

    const handlePrev = () => {
        if (count > 0) {
            const prevIndex = count - 1;
            setCount(prevIndex);
        }
    };

    useEffect(() => {
        const handleKeyEvents = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowLeft":
                case "ArrowUp":
                    handlePrev();
                    break;
                case "ArrowRight":
                case "ArrowDown":
                    handleNext();
                    break;
            }
        };
        window.addEventListener("keydown", handleKeyEvents);
        return () => window.removeEventListener("keydown", handleKeyEvents);
    }, [count]);

    return (
        <>
            <div className="hidden md:block w-[100vw] h-[100vh] overflow-hidden relative">
                <div className="absolute w-[30%] h-full z-10 bg-gradient-to-r from-black/50"></div>
                <div className="absolute right-0 w-[30%] h-full z-10 bg-gradient-to-l from-black/50"></div>
                <div
                    ref={containerRef}
                    className="flex h-full md:px-[26%] lg:px-[37%] items-center gap-12 justify-start overflow-x-hidden scrollbar-hide whitespace-nowrap"
                >
                    {arr.map((content, index) => (
                        <div
                            key={index}
                            id={index + ""}
                            ref={(el) => { storyRefs.current[index] = el }}
                            onClick={() => setCount(index)}
                            className={`${index === count ? "w-[24em] h-[92vh] z-20" : "w-[14em] h-[52vh] z-0"} bg-[#282828] relative flex justify-center items-center rounded-2xl transition-all duration-[500ms] ease-in-out flex-shrink-0`}
                        >
                            <p className="text-[#E8174B]">{content}</p>
                        </div>
                    ))}
                </div>
                <button
                    className="fixed left-4 top-1/2 transform -translate-y-1/2 p-1.5 bg-[#515151] text-white rounded-full disabled:opacity-50 z-50 hidden lg:block"
                    onClick={handlePrev}
                    disabled={count === 0}
                >
                    <GrFormPrevious size={20} />
                </button>
                <button
                    className="fixed right-4 top-1/2 transform -translate-y-1/2 p-1.5 bg-[#515151] text-white rounded-full disabled:opacity-50 z-50 hidden lg:block"
                    onClick={handleNext}
                    disabled={count === arr.length - 1}
                >
                    <GrFormNext size={20} />
                </button>
            </div>
            <MobileStory/>
        </>
    );
};

export default Stories;
"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Stories = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [count, setCount] = useState(() => {
        const id = searchParams.get("id");
        return id ? Number(id) : 0;
    });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StoriesContent count={count} setCount={setCount} />
        </Suspense>
    );
};

interface StoriesContentType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const StoriesContent = ({ count, setCount }: StoriesContentType) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const storyRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentId = searchParams.get("id");
        if (currentId !== String(count)) {
            router.push(`?id=${count}`, { scroll: false });
        }
        scrollToStory(count);
    }, [count]);

    const scrollToStory = (index: number) => {
        const story = storyRefs.current[index];
        const container = containerRef.current;
        if (!story || !container) return;

        // Wait for the size transition to complete (500ms matches CSS transition duration)
        setTimeout(() => {
            const containerWidth = container.offsetWidth;
            const storyWidth = story.offsetWidth;
            const scrollPosition = story.offsetLeft - (containerWidth - storyWidth) / 2;

            container.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
        }, 500); // Match this to the CSS `transition-all duration-500`
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

    return (
        <div className="w-[100vw] h-[100vh] overflow-hidden relative">
            <div
                ref={containerRef}
                className="flex h-full px-[34em] items-center gap-8 justify-start overflow-x-hidden scrollbar-hide whitespace-nowrap"
            >
                {arr.map((route, index) => (
                    <div
                        key={index}
                        id={index + ""}
                        ref={(el) => {
                            storyRefs.current[index] = el;
                        }}
                        onClick={() => setCount(index)}
                        className={`${index === count ? "w-[24em] h-[92vh]" : "w-[14em] h-[52vh]"
                            } bg-[#282828] rounded-2xl transition-all duration-500 ease-in-out flex-shrink-0`}
                    >
                        {index}
                    </div>
                ))}
            </div>
            {/* Fixed Previous Button */}
            <button
                className="fixed left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-300 text-black rounded-full disabled:opacity-50 z-20"
                onClick={handlePrev}
                disabled={count === 0}
            >
                &lt;
            </button>
            {/* Fixed Next Button */}
            <button
                className="fixed right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-300 text-black rounded-full disabled:opacity-50 z-20"
                onClick={handleNext}
                disabled={count === arr.length - 1}
            >
                &gt;
            </button>
        </div>
    );
};

export default Stories;
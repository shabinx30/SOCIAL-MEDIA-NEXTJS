"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import { EffectCoverflow, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css"
import "swiper/css/effect-coverflow"

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
    

    const [count, setCount] = useState(() => {
        const id = searchParams.get("id");
        return id ? Number(id) : 0;
    });

    useEffect(() => {
        const currentId = searchParams.get("id");
        if (currentId !== String(count)) {
            router.push(`?id=${count}`, { scroll: false });
        }
    }, [count, router, searchParams]);

    

    return (
        <>
            {/* <div className="hidden md:block w-[100vw] h-[100vh] overflow-hidden relative">
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
            </div> */}
            <div className="hidden md:flex w-[100vw] h-[100vh] justify-center items-center">
                <Swiper
                    effect={'coverflow'}
                    spaceBetween={100}
                    centeredSlides={true}
                    slidesPerView={3}
                    mousewheel={true}
                    keyboard={{
                        enabled:true,
                    }}
                    coverflowEffect={
                        {
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }
                    }
                    modules={[EffectCoverflow, Keyboard, Mousewheel]}
                    className="bg-transparent"
                >
                    {[1, 2, 3, 4, 5, 6].map((val, index) => (
                        <SwiperSlide className="">
                            <div
                                className={`w-full h-[92vh] bg-[#282828] mx-auto flex justify-center items-center rounded-2xl flex-shrink-0`}
                            >
                                <p className="text-[#E8174B]">{index}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <MobileStory />
        </>
    );
};

export default Stories;
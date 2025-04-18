"use client";

import { Suspense } from "react";

import { EffectCoverflow, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css"
import "swiper/css/effect-coverflow"

import MobileStory from '../../components/stories/MobileStory'

const Stories = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StoriesContent />
        </Suspense>
    );
};

const StoriesContent = () => {

    return (
        <>
            <main className="hidden md:flex w-[100vw] h-[100vh] justify-center items-center">
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
                        <SwiperSlide key={index} className="">
                            <div
                                className={`w-full h-[92vh] bg-[#282828] mx-auto flex justify-center items-center rounded-2xl flex-shrink-0`}
                            >
                                <p className="text-[#E8174B]">{index}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
            <MobileStory />
        </>
    );
};

export default Stories;
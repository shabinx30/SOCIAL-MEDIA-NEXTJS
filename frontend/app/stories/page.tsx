"use client";

import { Suspense, useEffect } from "react";
import "./story.css"

import MobileStory from "../../components/stories/MobileStory";

const Stories = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StoriesContent />
        </Suspense>
    );
};

const StoriesContent = () => {
    useEffect(() => {
        const stories = document.querySelectorAll(".story");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            {
                root: document.querySelector(".stories"),
                threshold: 0.75,
            }
        );

        stories.forEach((story) => observer.observe(story));

        return () => {
            stories.forEach((story) => observer.unobserve(story));
        };
    }, []);

    return (
        <>
            <main className="hidden md:flex w-[100vw] h-[100vh] justify-center items-center">
                <ul className="stories h-full w-[50%]">
                    {new Array(10).fill(1).map((_,i) => (
                        <li key={i} className="story">
                            <div className="flex justify-center items-center w-[25em] h-full">
                                {i}
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
            <MobileStory />
        </>
    );
};

export default Stories;

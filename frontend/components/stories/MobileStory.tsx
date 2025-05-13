"use client";

import React, { useEffect, useRef, useState } from "react";
import "./MobileStory.css";

interface strType {
    data: string;
}

const CubeComponent = () => {
    const cubeRef = useRef<HTMLDivElement>(null);
    const currentAngleRef = useRef(0);
    const persRef = useRef<HTMLDivElement>(null);

    // story viewing logic
    const stories: strType[][] = [
        [
            { data: "profile 1 story 1" },
            { data: "profile 1 story 2" },
        ],
        [{ data: "profile 2 story 1" }],
        [
            { data: "profile 3 story 1" },
            { data: "profile 3 story 2" },
        ],
        [
            { data: "profile 4 story 1" },
            { data: "profile 4 story 2" },
        ],
        [
            { data: "profile 5 story 1" },
            { data: "profile 5 story 2" },
        ],
    ];
    const [front, setFront] = useState<number>(0);
    const [right, setRight] = useState<number>(1);
    const [back, setBack] = useState<number>(2);
    const [left, setLeft] = useState<number>(3);
    const faces = [
        setFront,
        setRight,
        setBack,
        setLeft,
        setFront,
        setRight,
        setBack,
    ];
    const [currPro, setCurrPro] = useState<number>(0);
    const [currStr, setCurrStr] = useState<number>(0);

    const updateBack = (direction: number) => {
        if (direction > 0) {
            setCurrPro((pPro) => {
                if (pPro >= stories.length - 1) return pPro;
                if (pPro >= 2 && pPro + 2 < stories.length) {
                    faces[pPro + 2](pPro + 2);
                }
                return pPro + 1;
            });
            setCurrStr(0);
        } else {
            setCurrPro((pPro) => {
                if (pPro === 0) return pPro;
                if (pPro >= 2 && pPro - 2 >= 0) {
                    faces[pPro - 2](pPro - 2);
                }
                return pPro - 1;
            });
            setCurrStr(0);
        }
    };

    const next = () => {
        if (currStr < stories[currPro].length - 1) {
            setCurrStr((p) => p + 1);
        } else if (cubeRef.current) {
            if (currPro >= stories.length - 1) {
                return;
            }
            currentAngleRef.current -= 90;
            cubeRef.current.style.transform = `rotateY(${currentAngleRef.current}deg)`;
            if (persRef.current) {
                persRef.current.style.transform = `translateZ(${-21}vw)`;
                setTimeout(() => {
                    if (persRef.current) {
                        persRef.current.style.transform = `translateZ(${0}vw)`;
                    }
                }, 200);
            }
            updateBack(1);
        }
    };

    const prev = () => {
        if (currStr > 0) {
            setCurrStr((p) => p - 1);
        } else if (cubeRef.current) {
            if (currPro === 0) {
                return;
            }
            currentAngleRef.current += 90;
            cubeRef.current.style.transform = `rotateY(${currentAngleRef.current}deg)`;
            if (persRef.current) {
                persRef.current.style.transform = `translateZ(${-21}vw)`;
                setTimeout(() => {
                    if (persRef.current) {
                        persRef.current.style.transform = `translateZ(${0}vw)`;
                    }
                }, 200);
            }
            updateBack(-1);
        }
    };

    useEffect(() => {
        console.log("currPro:", currPro, "currStr:", currStr);
    }, [currPro, currStr]);

    // Helper function to get a valid story index for a given profile
    const getValidStoryIndex = (profileIndex: number, storyIndex: number) => {
        return Math.min(storyIndex, stories[profileIndex].length - 1);
    };

    return (
        <main className="container block md:hidden">
            <div className="pers" ref={persRef}>
                <p className="fixed text-white">curr: {currPro}</p>
                <div className="cube" ref={cubeRef}>
                    <section className="face front">
                        <div
                            onClick={prev}
                            style={{ backgroundColor: "rgba(255,0,0,0.3)" }}
                        ></div>
                        <div>{stories[front][getValidStoryIndex(front, currStr)].data}</div>
                        <div
                            onClick={next}
                            style={{ backgroundColor: "rgba(0,255,0,0.3)" }}
                        ></div>
                    </section>
                    <section className="face right">
                        <div
                            onClick={prev}
                            style={{ backgroundColor: "rgba(255,0,0,0.3)" }}
                        ></div>
                        <div>{stories[right][getValidStoryIndex(right, currStr)].data}</div>
                        <div
                            onClick={next}
                            style={{ backgroundColor: "rgba(0,255,0,0.3)" }}
                        ></div>
                    </section>
                    <section className="face back">
                        <div
                            onClick={prev}
                            style={{ backgroundColor: "rgba(255,0,0,0.3)" }}
                        ></div>
                        <div>{stories[back][getValidStoryIndex(back, currStr)].data}</div>
                        <div
                            onClick={next}
                            style={{ backgroundColor: "rgba(0,255,0,0.3)" }}
                        ></div>
                    </section>
                    <section className="face left">
                        <div
                            onClick={prev}
                            style={{ backgroundColor: "rgba(255,0,0,0.3)" }}
                        ></div>
                        <div>{stories[left][getValidStoryIndex(left, currStr)].data}</div>
                        <div
                            onClick={next}
                            style={{ backgroundColor: "rgba(0,255,0,0.3)" }}
                        ></div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default CubeComponent;
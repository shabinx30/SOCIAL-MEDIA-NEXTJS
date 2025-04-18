"use client"

import React, { useEffect, useRef, useState } from 'react';
import "./MobileStory.css";

const CubeComponent = () => {
    const cubeRef = useRef<HTMLDivElement>(null);
    const currentAngleRef = useRef(0);
    const persRef = useRef<HTMLDivElement>(null)
    const [log, setLog] = useState('')


    // story viewing logic
    const stories = ['story 1', 'story 2', 'story 3', 'story 4', 'story 5', 'story 6', 'story 7']
    // const [currStory, setCurrStory] = useState<number>(0)
    const [front, setFront] = useState<number>(0)
    const [right, setRight] = useState<number>(1)
    const [back, setBack] = useState<number>(2)
    const [left, setLeft] = useState<number>(3)
    const faces = [setFront, setRight, setBack, setLeft, setFront, setRight, setBack]
    const [currStr, setCurrStr] = useState<number>(0)

    const next = () => {
        if (cubeRef.current) {

            //prevent going next from the last story
            if (currStr == (stories.length - 1)) {
                return
            }

            //rotating the cube
            currentAngleRef.current -= 90;
            cubeRef.current.style.transform = `rotateY(${currentAngleRef.current}deg)`;
            if (persRef.current) {
                persRef.current.style.transform = `translateZ(${-21}vw)`;
                setTimeout(() => {
                    if (persRef.current) {
                        persRef.current.style.transform = `translateZ(${0}vw)`
                    }
                }, 200)
            }
            updateBack(1)
        }
    };

    const prev = () => {
        if (cubeRef.current) {

            //prevent going back from 1st story
            if (currStr === 0) {
                return
            }

            //rotating the cube
            currentAngleRef.current += 90;
            cubeRef.current.style.transform = `rotateY(${currentAngleRef.current}deg)`;
            if (persRef.current) {
                persRef.current.style.transform = `translateZ(${-21}vw)`;
                setTimeout(() => {
                    if (persRef.current) {
                        persRef.current.style.transform = `translateZ(${0}vw)`
                    }
                }, 200)
            }
            updateBack(-1)
        }
    };



    let isDragging = false;
    let startX = 0;
    let rotationOffset = 0;

    const updateRotation = (deltaX: number) => {
        // console.log(deltaX,'from delta')
        rotationOffset = deltaX * .5; // sensitivity factor
        if (cubeRef.current) {
            cubeRef.current.style.transform = `rotateY(${currentAngleRef.current + rotationOffset}deg)`;
        }
        // updateBack(deltaX)
    };

    useEffect(() => {
        // Start drag
        window.addEventListener('pointerdown', (e) => {
            isDragging = true;
            startX = e.clientX;
        });

        // While dragging
        window.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            updateRotation(deltaX);
        });

        // End drag
        window.addEventListener('pointerup', () => {
            if (!isDragging) return;
            isDragging = false;

            // Snap to closest 90-degree rotation
            currentAngleRef.current += rotationOffset;
            currentAngleRef.current = Math.round(currentAngleRef.current / 90) * 90;

            if (cubeRef.current) {
                cubeRef.current.style.transform = `rotateY(${currentAngleRef.current}deg)`;
            }

            // Reset offset
            rotationOffset = 0;
        });

        window.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            // setLog(startX)
        });

        window.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = endX - startX;

            if (Math.abs(diff) > 50) {
                rotateCube(diff > 0 ? 1 : -1); // swipe right = prev, left = next
            }
        });
    }, [])


    let isScrolling: boolean = false;

    const rotateCube = (direction: number) => {
        let isBlock = false
        setCurrStr(pstr => {
            if (direction === -1 && pstr === (stories.length - 1)) {
                isBlock = true
                return pstr
            }
            if (direction === 1 && pstr === 0) {
                if (cubeRef.current) {
                    cubeRef.current.style.transform = `rotateY(${currentAngleRef.current}deg)`;
                }
                isBlock = true
                return pstr
            }
            return pstr
        })
        if(isBlock) return
        if (isScrolling) return;
        isScrolling = true;

        currentAngleRef.current += direction * 90;
        if (cubeRef.current) {
            cubeRef.current.style.transform = `rotateY(${currentAngleRef.current}deg)`;
        }

        // slight perspective in-out animation
        if (persRef.current) {
            persRef.current.style.transform = `translateZ(-21vw)`;
            setTimeout(() => {
                if (persRef.current) {
                    persRef.current.style.transform = `translateZ(0vw)`;
                }
                isScrolling = false;
            }, 200);
        }
        updateBack(direction === -1 ? 1 : -1)
    };


    const updateBack = (direction: number) => {
        setLog('function called')
        if (direction > 0) {
            setCurrStr((pstr) => {
                //prevent going next from the last story
                if (pstr == stories.length - 1) return pstr;
                //updating the back side of the cube to next
                if (pstr >= 2 && pstr + 2 < stories.length) {
                    faces[pstr + 2](pstr + 2);
                }
                //track the current story
                return pstr + 1;
            });
        } else {
            setCurrStr((pstr) => {
                //prevent going back from 1st story
                if (pstr === 0) return pstr;
                //updating the back side of the cube to prev
                if (pstr >= 2 && pstr - 2 >= 0) {
                    faces[pstr - 2](pstr - 2);
                }
                //track the current story
                return pstr - 1;
            });
        }
    };
    

    return (
        <main className="container block md:hidden">
            <div className='pers' ref={persRef}>
                <p className='fixed text-white'>log: {log}</p>
                <p className='fixed text-white top-4'>curr: {currStr}</p>
                <div className="cube" ref={cubeRef}>
                    <section className="face front">
                        <div onClick={prev} style={{ backgroundColor: 'rgba(255,0,0,0.3)' }}></div>
                        <div>{stories[front]}</div>
                        <div onClick={next} style={{ backgroundColor: 'rgba(0,255,0,0.3)' }}></div>
                    </section>
                    <section className="face right">
                        <div onClick={prev} style={{ backgroundColor: 'rgba(255,0,0,0.3)' }}></div>
                        <div>{stories[right]}</div>
                        <div onClick={next} style={{ backgroundColor: 'rgba(0,255,0,0.3)' }}></div>
                    </section>
                    <section className="face back">
                        <div onClick={prev} style={{ backgroundColor: 'rgba(255,0,0,0.3)' }}></div>
                        <div>{stories[back]}</div>
                        <div onClick={next} style={{ backgroundColor: 'rgba(0,255,0,0.3)' }}></div>
                    </section>
                    <section className="face left">
                        <div onClick={prev} style={{ backgroundColor: 'rgba(255,0,0,0.3)' }}></div>
                        <div>{stories[left]}</div>
                        <div onClick={next} style={{ backgroundColor: 'rgba(0,255,0,0.3)' }}></div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default CubeComponent;
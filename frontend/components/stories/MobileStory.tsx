"use client"

import React, { useRef, useState } from 'react';
import "./MobileStory.css";

const CubeComponent = () => {
    const cubeRef = useRef<HTMLDivElement>(null);
    const currentAngleRef = useRef(0);
    const persRef = useRef<HTMLDivElement>(null)


    // story viewing logic
    const stories = ['story 1', 'story 2', 'story 3', 'story 4', 'story 5', 'story 6', 'story 7']
    const [front, setFront] = useState<number>(0)
    const [right, setRight] = useState<number>(1)
    const [back, setBack] = useState<number>(2)
    const [left, setLeft] = useState<number>(3)
    const faces = [setFront, setRight, setBack, setLeft, setFront, setRight, setBack]
    const [currStr, setCurrStr] = useState<number>(0)


    const updateBack = (direction: number) => {
        // setLog('function called')
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


    return (
        <main className="container block md:hidden">
            <div className='pers' ref={persRef}>
                <p className='fixed text-white'>curr: {currStr}</p>
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
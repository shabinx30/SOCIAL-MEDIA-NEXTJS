"use client"

import React, { useEffect, useRef } from 'react';
import "./MobileStory.css";

const CubeComponent = () => {
    const cubeRef = useRef<HTMLDivElement>(null);
    const currentAngleRef = useRef(0);
    const persRef = useRef<HTMLDivElement>(null)

    const next = () => {
        // console.log('Next clicked');
        if (cubeRef.current) {
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
        }
    };

    const prev = () => {
        // console.log('Prev clicked');
        if (cubeRef.current) {
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
        }
    };

    let isDragging = false;
    let startX = 0;
    let rotationOffset = 0;

    const updateRotation = (deltaX: number) => {
        rotationOffset = deltaX * .5; // sensitivity factor
        if (cubeRef.current) {
            cubeRef.current.style.transform = `rotateY(${currentAngleRef.current + rotationOffset}deg)`;
        }
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
    };

    return (
        <div className="container block md:hidden">
            <div className='pers' ref={persRef}>
                <div className="cube" ref={cubeRef}>
                    <div className="face front">
                        <div className="sLeft" onClick={prev} style={{ backgroundColor: 'rgba(255,0,0,0.3)' }}></div>
                        <div>story 1</div>
                        <div className="sRight" onClick={next} style={{ backgroundColor: 'rgba(0,255,0,0.3)' }}></div>
                    </div>
                    <div className="face back">
                        <div className="sLeft" onClick={prev} style={{ backgroundColor: 'rgba(255,0,0,0.3)' }}></div>
                        <div>story 3</div>
                        <div className="sRight" onClick={next} style={{ backgroundColor: 'rgba(0,255,0,0.3)' }}></div>
                    </div>
                    <div className="face left">
                        <div className="sLeft" onClick={prev} style={{ backgroundColor: 'rgba(255,0,0,0.3)' }}></div>
                        <div>story 4</div>
                        <div className="sRight" onClick={next} style={{ backgroundColor: 'rgba(0,255,0,0.3)' }}></div>
                    </div>
                    <div className="face right">
                        <div className="sLeft" onClick={prev} style={{ backgroundColor: 'rgba(255,0,0,0.3)' }}></div>
                        <div>story 2</div>
                        <div className="sRight" onClick={next} style={{ backgroundColor: 'rgba(0,255,0,0.3)' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CubeComponent;
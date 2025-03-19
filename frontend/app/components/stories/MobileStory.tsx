import React, { useRef } from 'react';
import "./MobileStory.css";

const CubeComponent = () => {
    const cubeRef = useRef<HTMLDivElement>(null);
    const currentAngleRef = useRef(0);

    const next = () => {
        console.log('Next clicked');
        if (cubeRef.current) {
            currentAngleRef.current -= 90;
            cubeRef.current.style.transform = `rotateY(${currentAngleRef.current}deg)`;
        }
    };

    const prev = () => {
        console.log('Prev clicked');
        if (cubeRef.current) {
            currentAngleRef.current += 90;
            cubeRef.current.style.transform = `rotateY(${currentAngleRef.current}deg)`;
        }
    };

    return (
        <div className="container block md:hidden">
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
    );
};

export default CubeComponent;
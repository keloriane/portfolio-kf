'use client'
import { useEffect, useRef } from "react";
import gsap from 'gsap'

const Cursor = () => {
    const cursor = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (cursor.current) {
                gsap.to(cursor.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 1,
                    ease: "cubic-bezier(0.76, 0, 0.024, 1)"
                });
            }
        };

        if(window) {
          window.addEventListener("mousemove", handleMouseMove);
        }

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [cursor]);

    return (
        <div ref={cursor} className="c-cursor">
            <div className="c-cursor__inner"></div>
            <div className="c-cursor__follower"></div>
        </div>
    );
}

export default Cursor;

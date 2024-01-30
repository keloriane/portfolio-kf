import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type CursorProps = {
  backgroundImage?: string | null;
};

const Cursor: React.FC<CursorProps> = ({ backgroundImage = null }) => {
  const cursor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const setCursorSize = (width: number, height: number) => {
      gsap.to(cursor.current, {
        width,
        height,
        duration: 1,
        ease: "cubic-bezier(0.76, 0, 0.024, 1)",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor.current) {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 1,
          ease: "cubic-bezier(0.76, 0, 0.024, 1)",
        });

        const newSize = backgroundImage !== null ? [320, 320] : [32, 32];
        // @ts-ignore: Unreachable code error
        setCursorSize(...newSize)
      }
    };

    if (window) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [backgroundImage]);

  useEffect(() => {
    if (cursor.current && backgroundImage !== null) {
      gsap.to(cursor.current, {
        duration: 1,
        scaleY: 1,
        scaleX: 1,
        ease: "cubic-bezier(0.76, 0, 0.024, 1)",
      });
    }
  }, [backgroundImage]);


  return (
    <div ref={cursor} className={`c-cursor ${backgroundImage ? "cursor-hovered" : ""}`} style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        mixBlendMode: backgroundImage ? "normal" : "difference",
        width: backgroundImage ? "320px" : "32px",
        height: backgroundImage ? "320px" : "32px",
    }}>
      <div className="c-cursor__inner"></div>
      <div className="c-cursor__follower"></div>
    </div>
  );
};

export default Cursor;

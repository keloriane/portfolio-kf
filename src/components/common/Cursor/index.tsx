'use client'
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
type CursorProps = {
  backgroundImage?: string | null;
};

const Cursor: React.FC<CursorProps> = ({ backgroundImage}) => {
    const cursor = useRef<HTMLDivElement | null>(null);

    
    useLayoutEffect(() => {
   
    document.addEventListener("pageLoaded", () => {
        gsap.set(cursor.current, {
            width: 32,
            height: 32,
            duration: 1,
            ease: "cubic-bezier(0.76, 0, 0.024, 1)",
          });
    });
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor.current) {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 1,
          ease: "cubic-bezier(0.76, 0, 0.024, 1)",
        });
    
        
        if (backgroundImage && backgroundImage !== null) {
          gsap.to(cursor.current, {
            width: 320,
            height: 320,
            duration: 1,
            ease: "cubic-bezier(0.76, 0, 0.024, 1)",
          });
        } else {
          gsap.to(cursor.current, {
            width: 32,
            height: 32,
            duration: 1,
            ease: "cubic-bezier(0.76, 0, 0.024, 1)",
          });
        }
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

  return (
    <div
      ref={cursor}
      className={`c-cursor ${backgroundImage ? "cursor-hovered" : ""}`}
      style={{
        mixBlendMode: backgroundImage ? "normal" : "difference",
        width: backgroundImage ? "320px" : "32px",
        height: backgroundImage ? "320px" : "32px",
      }}
    >
        {
            backgroundImage && backgroundImage ? (<Image 
              src={backgroundImage} 
              placeholder="blur"
              alt="project-image"
              blurDataURL={backgroundImage} 
              fill
              sizes="(max-width: 768px) 900px, (max-width: 1200px) 500px, 320px"
              className="w-full h-full" style={{objectFit:"cover"}}  />) : (<img src={backgroundImage ? backgroundImage : ""} alt="" className="w-full h-full hidden" style={{objectFit:"cover"}}  />) 

        }

    </div>
  );
};

export default Cursor;

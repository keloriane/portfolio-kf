"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import sprite from "@/assets/images/smoke_sprites2.webp";

gsap.registerPlugin(ScrollTrigger);

interface TitleSmokeProps {
  children: React.ReactElement<any>;
}

const TitleMask = styled.div`
  -webkit-mask-image: url(${sprite.src});
  mask-image: url(${sprite.src});
  -webkit-mask-size: 100% 3600%;
  mask-size: 100% 3600%;
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
`;

const TitleSmoke: React.FC<TitleSmokeProps> = ({ children }) => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleElement,
        start: "top bottom", // Animation starts when the top of the title enters the bottom of the viewport
        end: "bottom top", // Animation ends when the bottom of the title enters the top of the viewport
      },
    });

    tl.to(titleElement, {
      duration: 1.5,
      maskPosition: "0 100%",
      ease: "steps(35)",
    });

    // Clean up when the component unmounts
    return () => {
      tl.kill();
    };
  }, []);

  return <TitleMask ref={titleRef}>{children}</TitleMask>;
};

export default TitleSmoke;

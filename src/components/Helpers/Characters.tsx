'use client'
// 'use client'
import React, { useEffect, useRef } from "react";
import gsap  from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { twMerge } from "tailwind-merge";





const Characters = ({  className , phrase }: { className: string , phrase:string }) => {
  let refs = useRef<(HTMLSpanElement | null)[]>([]);
  const body = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);



  const splitWords = (phrase: string) => {
    let body: React.ReactNode[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: React.ReactNode[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span className="opacity-[0.2]" key={letter + "_" + i} ref={(el) => refs.current.push(el)}>
          {letter}
        </span>
      );
    });
    return letters;
  };


  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "bottom bottom",
        end: `+=${window.innerHeight / 1.5}`,
       
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);



  return (
      <div ref={container} className="flex">
          <div ref={body} className={twMerge("flex flex-wrap gap-3", className)}>
        {
      splitWords(phrase)
      }
      </div>
    </div>
  );
};

export default Characters;

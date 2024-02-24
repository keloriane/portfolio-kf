import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { twMerge } from 'tailwind-merge';

interface AnimatedTextProps {
  text: string;
  splitBy: 'letter' | 'word' | 'phrase';
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  gap?: string;
  duration: number;
  className?: string;
  fontSize?: number;
  highlightWords?: string[]; // Add this prop to highlight certain words
  highlightColor?: string;
  reactRef?: React.RefObject<HTMLDivElement>;
  // Add this prop to set the highlight color
}
const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  fontSize,
  reactRef,
  splitBy,
  as,
  gap,
  duration,
  className,
  highlightWords = [],
  highlightColor = 'red',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const elementsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        elementsRef.current,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          ease: 'cubic-bezier(.215,.61,.355,1)',
          duration: duration,
        },
      );
    }
  }, [inView, duration]);

  const createElement = (str: string, index: number) => {
    const TagName = as;

    return (
      <span
        key={index}
        style={{
          overflow: 'hidden',
          visibility: inView ? 'visible' : 'hidden',
          color: highlightWords.includes(str) ? highlightColor : 'inherit',
          height: fontSize ? `${fontSize + 5}px` : 'auto',
        }}
      >
        <TagName ref={(el) => (elementsRef.current[index] = el)}>{str}</TagName>
        {splitBy !== 'letter' && ' '}
      </span>
    );
  };

  let splitText: string[];

  if (splitBy === 'letter') {
    splitText = Array.from(text);
  } else if (splitBy === 'word') {
    splitText = text.split(' ');
  } else if (splitBy === 'phrase') {
    splitText = text.split(/(?:\n|\. |\? )/);
  } else {
    splitText = text.split('. ');
  }

  return (
    <div ref={reactRef}>
      <div
        ref={ref}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: gap,
        }}
        className={twMerge(`gap-[${gap}] leading-none`, className)}
      >
        {splitText.map((str, index) => createElement(str, index))}
      </div>
    </div>
  );
};

export default AnimatedText;

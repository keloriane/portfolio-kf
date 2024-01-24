import { useRef } from "react";
import { useScroll, motion , useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { MotionValue } from "framer-motion";


const Words = ({text  , className }:{text:string , className:string}) => {

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target:element,
        offset:["start end" , "start start" ]
    });
    const words = text.split(" ");

    return ( 
        <p ref={element} className={twMerge("flex flex-wrap gap-2" , className)} >
            {words.map((word , index) => {
                const start = index / words.length;
                const end = start + (1/words.length);
                return (
                    <Word key={index} range={[start , end]} progress={scrollYProgress}>
                        {word}
                    </Word>
                )
            })}
        </p>
     );
}
 
export default Words;



const Word = ({children , range , progress} : {children:React.ReactNode, range:number[] , progress:MotionValue<number>}) => {
    const opacity = useTransform(progress , range , [0 , 1]);
    return (
        <span className="relative">
            <span  className="absolute opacity-[0.3]">{children}</span>
            <motion.span style={{opacity}}>{children}</motion.span>
        </span>
    )
}
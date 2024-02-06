'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { twMerge } from 'tailwind-merge';




type ImageParallaxProps = {
    src:  string | StaticImageData;
    alt: string;
    className?: string;
}

const ImageParallax:React.FC<ImageParallaxProps> = ({src , alt , className}) => {

    const imageRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
       
    }, [imageRef])


    return (  
        <div>
            <div className={twMerge('relative overflow-hidden w-[512px] ' , 'image-p')} ref={imageRef} >
                <Image src={src} alt={alt} objectFit='cover' className='w-full h-[140%]] top-[20%] absolute object-cover'   />
            </div>
        </div>
    );
}
 
export default ImageParallax;
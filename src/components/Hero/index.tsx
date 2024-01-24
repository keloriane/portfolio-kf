'use client'
import { useRef , useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import Kevin from '@/assets/images/kevin.png'
import gsap from 'gsap'
import Image from 'next/image'
import AnimatedText from '../common/AnimatedText'

const Hero = ({className}:{className:string}) => {
    
    return ( 
        <header className={twMerge("flex h-screen w-screen items-center justify-center flex-wrap gap-[55px]" , className)}>
            <div className='flex flex-col items-center justify-center'>
     
                <AnimatedText text="Creative Developer" splitBy="word" gap="5px" duration={.5} as="h2" className="text-lg leading-2 capitalize font-bold" />
                <AnimatedText text="Based in Brussels" splitBy="word" gap="5px" duration={.5} as="h2" className="text-lg leading-2 capitalize font-bold"/>
     
               
                <button className='w-[182px] bg-black font-regular text-white rounded-full px-[40px] py-[15px] text-[26px] mt-[55px]'>
                    Project
                </button>
            </div>
            <div>
                
            </div>
            
        </header>
     );
}
 
export default Hero;